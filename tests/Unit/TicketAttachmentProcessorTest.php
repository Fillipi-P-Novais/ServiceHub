<?php

use App\Models\{User, Company, Project, Ticket};
use App\Services\TicketAttachmentProcessor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;

uses(RefreshDatabase::class);

it('processes attachment and updates ticket detail through service', function () {
    Storage::fake('local');

    $user = User::factory()->create(['email_verified_at' => now()]);
    $company = Company::factory()->create();
    $project = Project::factory()->for($company)->create();

    Storage::disk('local')->put('tickets/1/data.json', json_encode(['error_code' => 500]));

    $ticket = Ticket::factory()
        ->for($project)
        ->for($user)
        ->create(['attachment_path' => 'tickets/1/data.json']);

    $ticket->detail()->firstOrCreate([]);

    app(TicketAttachmentProcessor::class)->process($ticket);

    $ticket->refresh();

    expect($ticket->detail->technical_data)->toHaveKey('error_code')
        ->and($ticket->detail->processed_at)->not->toBeNull();
});

<?php

use App\Models\{User, Company, Project, Ticket, TicketDetail};
use App\Jobs\ProcessTicketAttachment;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->company = Company::factory()->create();
    $this->project = Project::factory()->for($this->company)->create();
});

// Teste de relacionamentos
it('ticket belongs to project and has detail', function () {
    $ticket = Ticket::factory()
        ->for($this->project)
        ->for($this->user)
        ->create();

    // cria apenas se não existir (nunca duplica)
    $ticket->detail()->firstOrCreate([]);

    $ticket->refresh();

    expect($ticket->project)->toBeInstanceOf(Project::class)
        ->and($ticket->detail)->not->toBeNull()
        ->and($ticket->user->id)->toBe($this->user->id);
});

// Teste de criação via controller
it('creates ticket with attachment and dispatches job', function () {
    Queue::fake();
    Storage::fake();

    $response = $this->actingAs($this->user)
        ->post(route('projects.tickets.store', $this->project), [
            'title' => 'Problema no sistema',
            'description' => 'Descrição detalhada...',
            'attachment' => UploadedFile::fake()->create('data.json', 100, 'application/json'),
        ]);

    $response->assertRedirect();

    $ticket = Ticket::first();
    expect($ticket->title)->toBe('Problema no sistema')
        ->and($ticket->attachment_path)->not->toBeNull();

    Queue::assertPushed(ProcessTicketAttachment::class);
});

// Teste do Job
it('processes attachment and updates ticket detail', function () {
    Storage::fake();

    Storage::put('tickets/1/data.json', json_encode(['error_code' => 500]));

    $ticket = Ticket::factory()
        ->for($this->project)
        ->for($this->user)
        ->create(['attachment_path' => 'tickets/1/data.json']);

    $ticket->detail()->firstOrCreate([]);

    (new ProcessTicketAttachment($ticket))->handle();

    $ticket->refresh();

    expect($ticket->detail->technical_data)->toHaveKey('error_code')
        ->and($ticket->detail->processed_at)->not->toBeNull();
});

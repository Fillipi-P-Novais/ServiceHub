<?php

use App\Models\{User, Company, Project, Ticket};
use App\Jobs\ProcessTicketAttachment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create(['email_verified_at' => now()]);
    $this->company = Company::factory()->create();
    $this->project = Project::factory()->for($this->company)->create();
});

it('validates required fields and minimum description length', function () {
    Queue::fake();
    Storage::fake('local');

    $response = $this->actingAs($this->user)
        ->post(route('projects.tickets.store', $this->project), [
            'title' => '',               
            'description' => 'curto',   
        ]);

    $response->assertStatus(302);
    $response->assertSessionHasErrors(['title', 'description']);

    expect(Ticket::count())->toBe(0);
    Queue::assertNotPushed(ProcessTicketAttachment::class);
});

it('accepts only json or txt attachments', function () {
    Queue::fake();
    Storage::fake('local');

    $response = $this->actingAs($this->user)
        ->post(route('projects.tickets.store', $this->project), [
            'title' => 'Teste',
            'description' => 'Descrição válida 123',
            'attachment' => UploadedFile::fake()->create('malware.exe', 10, 'application/octet-stream'),
        ]);

    $response->assertStatus(302);
    $response->assertSessionHasErrors(['attachment']);

    expect(Ticket::count())->toBe(0);
    Queue::assertNotPushed(ProcessTicketAttachment::class);
});

it('allows valid attachment and creates ticket', function () {
    Queue::fake();
    Storage::fake('local');

    $response = $this->actingAs($this->user)
        ->post(route('projects.tickets.store', $this->project), [
            'title' => 'Ticket válido',
            'description' => 'Descrição válida 123',
            'attachment' => UploadedFile::fake()->create('data.json', 100, 'application/json'),
        ]);

    $response->assertRedirect();

    $ticket = Ticket::first();
    expect($ticket)->not->toBeNull()
        ->and($ticket->title)->toBe('Ticket válido')
        ->and($ticket->attachment_path)->not->toBeNull();

    Storage::disk('local')->assertExists($ticket->attachment_path);

    Queue::assertPushed(ProcessTicketAttachment::class);
});

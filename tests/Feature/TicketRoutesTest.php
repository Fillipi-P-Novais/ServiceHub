<?php

use App\Models\{User, Company, Project, Ticket};
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create([
        'email_verified_at' => now(),
    ]);

    $this->company = Company::factory()->create();
    $this->project = Project::factory()->for($this->company)->create();

    $this->ticket = Ticket::factory()
        ->for($this->project)
        ->for($this->user)
        ->create();

    $this->ticket->detail()->firstOrCreate([]);
});

it('guests are redirected to login when accessing ticket routes', function () {
    $this->get(route('projects.tickets.index', $this->project))->assertRedirect();
    $this->get(route('projects.tickets.create', $this->project))->assertRedirect();
    $this->get(route('projects.tickets.show', [$this->project, $this->ticket]))->assertRedirect();
});

it('authenticated user can view tickets index', function () {
    $this->actingAs($this->user)
        ->get(route('projects.tickets.index', $this->project))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Tickets/Index')
            ->has('project')
            ->has('tickets.data')
        );
});

it('authenticated user can view ticket creation page', function () {
    $this->actingAs($this->user)
        ->get(route('projects.tickets.create', $this->project))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Tickets/Create')
            ->has('project')
        );
});

it('authenticated user can view ticket details', function () {
    $this->actingAs($this->user)
        ->get(route('projects.tickets.show', [$this->project, $this->ticket]))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Tickets/Show')
            ->has('project')
            ->has('ticket')
        );
});

it('returns 404 if ticket does not belong to project', function () {
    $otherCompany = Company::factory()->create();
    $otherProject = Project::factory()->for($otherCompany)->create();

    $this->actingAs($this->user)
        ->get(route('projects.tickets.show', [$otherProject, $this->ticket]))
        ->assertNotFound();
});

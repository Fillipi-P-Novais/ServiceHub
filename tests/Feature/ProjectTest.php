<?php

use App\Models\{User, Company, Project};
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->company = Company::factory()->create();
});

it('requires authentication to create a project', function () {
    $response = $this->post(route('companies.projects.store', $this->company), [
        'company_id' => $this->company->id,
        'name' => 'Projeto A',
        'description' => 'Descrição do projeto A',
    ]);

    $response->assertRedirect(route('login'));
});

it('creates a project for a company', function () {
    $response = $this->actingAs($this->user)
        ->post(route('companies.projects.store', $this->company), [
            'company_id' => $this->company->id,
            'name' => 'Projeto A',
            'description' => 'Descrição do projeto A',
        ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();

    $this->assertDatabaseHas('projects', [
        'company_id' => $this->company->id,
        'name' => 'Projeto A',
        'description' => 'Descrição do projeto A',
    ]);

    $project = Project::first();
    expect($project->company->id)->toBe($this->company->id);
});

it('validates required project fields', function () {
    $response = $this->actingAs($this->user)
        ->post(route('companies.projects.store', $this->company), []);

    $response->assertSessionHasErrors([
        'company_id',
        'name',
    ]);
});

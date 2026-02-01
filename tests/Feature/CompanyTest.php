<?php

use App\Models\User;
use App\Models\Company;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create([
        'email_verified_at' => now(),
    ]);
});

it('requires authentication to create a company', function () {
    $response = $this->post(route('companies.store'), [
        'cnpj' => '12345678000199',
        'nome_fantasia' => 'Empresa X',
    ]);

    $response->assertRedirect(route('login'));
});

it('creates a company', function () {
    $response = $this->actingAs($this->user)
    ->post(route('companies.store'), [
        'cnpj' => '12.345.678/0001-99',
        'nome_fantasia' => 'Empresa X',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();

    $this->assertDatabaseHas('companies', [
        'cnpj' => '12.345.678/0001-99',
        'nome_fantasia' => 'Empresa X',
    ]);
});

it('validates required company fields', function () {
    $response = $this->actingAs($this->user)
        ->post(route('companies.store'), []);

    $response->assertSessionHasErrors([
        'cnpj',
        'nome_fantasia',
    ]);
});

it('does not allow duplicate cnpj', function () {
    Company::factory()->create(['cnpj' => '12345678000199']);

    $response = $this->actingAs($this->user)
        ->post(route('companies.store'), [
            'cnpj' => '12345678000199',
            'nome_fantasia' => 'Empresa Y',            
        ]);

    $response->assertSessionHasErrors(['cnpj']);
});

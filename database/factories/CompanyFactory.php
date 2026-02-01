<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    protected $model = Company::class;

    public function definition(): array
    {
        return [
            'nome_fantasia' => fake()->company(),
            'cnpj' => fake()->numerify('##############'),
            'email' => fake()->companyEmail(),
            'contato_responsavel' => fake()->name(),
        ];

    }
}

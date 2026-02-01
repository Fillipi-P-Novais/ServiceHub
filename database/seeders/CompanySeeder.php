<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        Company::create([
            'cnpj' => '12345678000199',
            'nome_fantasia' => 'Empresa X',
            'email' => 'contato@empresax.com',
            'contato_responsavel' => 'Fulano',
        ]);
    }
}

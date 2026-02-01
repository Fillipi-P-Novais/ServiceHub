<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Project;
use App\Models\Ticket;
use App\Models\TicketDetail;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 3 usuários com perfil (1:1)
        $users = User::factory()
            ->count(3)
            ->create();

        foreach ($users as $user) {
            UserProfile::factory()->for($user)->create();
        }

        // 2 empresas, cada uma com 2 projetos, cada projeto com 5 tickets (+ detail)
        Company::factory()
            ->count(2)
            ->create()
            ->each(function (Company $company) use ($users) {
                Project::factory()
                    ->count(2)
                    ->for($company)
                    ->create()
                    ->each(function (Project $project) use ($users) {
                        Ticket::factory()
                            ->count(5)
                            ->for($project)
                            ->for($users->random())
                            ->create();                            
                    });
            });

        $this->call([UserSeeder::class, CompanySeeder::class]);
    }
}

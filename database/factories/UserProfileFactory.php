<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserProfileFactory extends Factory
{
    protected $model = UserProfile::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'phone' => fake()->optional()->phoneNumber(),
            'position' => fake()->optional()->jobTitle(),
            'department' => fake()->optional()->randomElement(['Suporte', 'Operações', 'TI', 'Produto']),
        ];
    }
}

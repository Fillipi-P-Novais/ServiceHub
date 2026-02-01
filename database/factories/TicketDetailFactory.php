<?php

namespace Database\Factories;

use App\Models\Ticket;
use App\Models\TicketDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketDetailFactory extends Factory
{
    protected $model = TicketDetail::class;

    public function definition(): array
    {
        return [            
            'technical_data' => fake()->optional()->passthrough([
                'source' => 'factory',
                'severity' => fake()->randomElement(['low', 'medium', 'high']),
            ]),
            'resolution_notes' => fake()->optional()->sentence(),
            'processed_at' => null,
        ];
    }

    public function processed(): self
    {
        return $this->state(fn () => [
            'processed_at' => now(),
            'technical_data' => [
                'source' => 'attachment',
                'processed_by' => 'system',
                'error_code' => fake()->numberBetween(100, 599),
            ],
        ]);
    }
}

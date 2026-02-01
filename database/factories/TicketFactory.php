<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TicketDetail;

class TicketFactory extends Factory
{
    protected $model = Ticket::class;

    public function definition(): array
    {
        return [
            'project_id' => Project::factory(),
            'user_id' => User::factory(),
            'title' => fake()->sentence(6),
            'description' => fake()->paragraphs(2, true),
            'status' => fake()->randomElement(['open', 'in_progress', 'resolved', 'closed']),
            'attachment_path' => null,
        ];
    }

    public function open(): self
    {
        return $this->state(fn () => ['status' => 'open']);
    }

    public function withAttachment(string $path = 'tickets/1/data.json'): self
    {
        return $this->state(fn () => ['attachment_path' => $path]);
    }

    public function hasDetail(): self
    {
        return $this->has(TicketDetail::factory(), 'detail');
    }
}

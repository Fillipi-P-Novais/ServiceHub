<?php

namespace App\Jobs;

use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ProcessTicketAttachment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Ticket $ticket
    ) {}

    public function handle(): void
    {
        if (!$this->ticket->attachment_path) {
            return;
        }

        if (!Storage::exists($this->ticket->attachment_path)) {
            return;
        }

        $content = Storage::get($this->ticket->attachment_path);

        // tenta interpretar como JSON, senão salva como texto
        $parsed = json_decode($content, true);

        $technicalData = is_array($parsed)
            ? $parsed
            : [
                'raw_content' => substr($content, 0, 1000),
            ];

        $this->ticket->detail()->update([
            'technical_data' => $technicalData,
            'processed_at' => now(),
        ]);
    }
}

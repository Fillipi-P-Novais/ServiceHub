<?php

namespace App\Services;

use App\Models\Ticket;
use Illuminate\Support\Facades\Storage;

class TicketAttachmentProcessor
{
    public function process(Ticket $ticket): void
    {
        $ticket->refresh();

        if (!$ticket->attachment_path) {
            return;
        }

        $disk = Storage::disk('local');

        if (!$disk->exists($ticket->attachment_path)) {
            return;
        }

        $content = $disk->get($ticket->attachment_path);
        $parsed = json_decode($content, true);

        $technicalData = is_array($parsed)
            ? $parsed
            : ['raw_content' => substr($content, 0, 1000)];

        $detail = $ticket->detail()->firstOrCreate([]);

        $detail->update([
            'technical_data' => $technicalData,
            'processed_at' => now(),
        ]);
    }
}

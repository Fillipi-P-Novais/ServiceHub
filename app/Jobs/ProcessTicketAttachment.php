<?php

namespace App\Jobs;

use App\Models\Ticket;
use App\Notifications\TicketProcessedNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use App\Services\TicketAttachmentProcessor;

class ProcessTicketAttachment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Ticket $ticket
    ) {}

    public function handle(): void {
        app(TicketAttachmentProcessor::class)->process($this->ticket);

        $this->ticket->refresh();

        if (!$this->ticket->attachment_path) {
            return;
        }

        $disk = Storage::disk('local');

        if (!$disk->exists($this->ticket->attachment_path)) {
            return;
        }

        $content = $disk->get($this->ticket->attachment_path);

        $parsed = json_decode($content, true);

        $technicalData = is_array($parsed)
            ? $parsed
            : ['raw_content' => substr($content, 0, 1000)];

        // ✅ garante 1:1 sem duplicar
        $detail = $this->ticket->detail()->firstOrCreate([]);

        $detail->update([
            'technical_data' => $technicalData,
            'processed_at' => now(),
        ]);

        $this->ticket->user->notify(new TicketProcessedNotification($this->ticket));
    }

}

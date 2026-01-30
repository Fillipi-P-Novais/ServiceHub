<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketDetail extends Model
{
    use HasFactory;

    protected $fillable = ['ticket_id', 'technical_data', 'resolution_notes', 'processed_at'];

    protected $casts = [
        'technical_data' => 'array',
        'processed_at' => 'datetime',
    ];

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
}

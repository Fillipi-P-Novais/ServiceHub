<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Jobs\ProcessTicketAttachment;
use App\Models\Project;
use App\Models\Ticket;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index(Project $project)
    {
        return Inertia::render('Tickets/Index', [
            'project' => $project->load('company'),
            'tickets' => $project->tickets()
                ->with(['user', 'detail'])
                ->latest()
                ->paginate(15),
        ]);
    }

    public function create(Project $project)
    {
        return Inertia::render('Tickets/Create', [
            'project' => $project,
        ]);
    }

    public function store(StoreTicketRequest $request, Project $project)
    {
        $ticket = $project->tickets()->create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
            'status' => 'open',
        ]);

        // Cria o TicketDetail vazio (1:1)
        $ticket->detail()->create();

        // Upload de anexo + Job
        if ($request->hasFile('attachment')) {
            $path = $request->file('attachment')->store("tickets/{$ticket->id}");
            $ticket->update(['attachment_path' => $path]);

            ProcessTicketAttachment::dispatch($ticket);
        }

        return redirect()
            ->route('projects.tickets.show', [$project, $ticket])
            ->with('success', 'Ticket criado com sucesso!');
    }

    public function show(Project $project, Ticket $ticket)
    {
        abort_unless($ticket->project_id === $project->id, 404);

        return inertia('Tickets/Show', [
            'project' => $project,
            'ticket' => $ticket->load(['user', 'detail']),
        ]);
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Jobs\ProcessTicketAttachment;
use App\Models\Project;
use App\Models\Ticket;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class TicketController extends Controller
{
    public function index(Project $project): Response
    {
        return Inertia::render('Tickets/Index', [
            'project' => $project->load('company'),
            'tickets' => $project->tickets()
                ->with(['user', 'detail'])
                ->latest()
                ->paginate(15),
        ]);
    }

    public function create(Project $project): Response
    {
        return Inertia::render('Tickets/Create', [
            'project' => $project,
        ]);
    }

    public function store(StoreTicketRequest $request, Project $project): RedirectResponse
    {
        $ticket = $project->tickets()->create([
            'user_id' => auth()->id(),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'status' => 'open',
        ]);

        $ticket->detail()->firstOrCreate([]);

        if ($request->hasFile('attachment')) {
            $path = $request->file('attachment')->store("tickets/{$ticket->id}", 'local');
            $ticket->update(['attachment_path' => $path]);

            ProcessTicketAttachment::dispatch($ticket);
        }

        return redirect()
            ->route('projects.tickets.show', [$project, $ticket])
            ->with('success', 'Ticket criado com sucesso!');
    }

    public function show(Project $project, Ticket $ticket): Response
    {
        abort_unless($ticket->project_id === $project->id, 404);

        return Inertia::render('Tickets/Show', [
            'project' => $project,
            'ticket' => $ticket->load(['user', 'detail']),
        ]);
    }

    public function edit(Project $project, Ticket $ticket): Response
    {
        abort_unless($ticket->project_id === $project->id, 404);

        return Inertia::render('Tickets/Edit', [
            'project' => $project,
            'ticket' => $ticket->load(['user', 'detail']),
        ]);
    }

    public function update(UpdateTicketRequest $request, Project $project, Ticket $ticket): RedirectResponse
    {
        abort_unless($ticket->project_id === $project->id, 404);

        $ticket->update($request->only(['title', 'description', 'status']));

        if ($request->hasFile('attachment')) {
            if ($ticket->attachment_path && Storage::exists($ticket->attachment_path)) {
                Storage::delete($ticket->attachment_path);
            }

            $path = $request->file('attachment')->store("tickets/{$ticket->id}", 'local');
            $ticket->update(['attachment_path' => $path]);

            ProcessTicketAttachment::dispatch($ticket->id);
        }

        return redirect()
            ->route('projects.tickets.show', [$project, $ticket])
            ->with('success', 'Ticket atualizado com sucesso!');
    }

    public function destroy(Project $project, Ticket $ticket): RedirectResponse
    {
        abort_unless($ticket->project_id === $project->id, 404);

        if ($ticket->attachment_path && Storage::exists($ticket->attachment_path)) {
            Storage::delete($ticket->attachment_path);
        }

        $ticket->delete();

        return redirect()
            ->route('projects.show', $project)
            ->with('success', 'Ticket excluído com sucesso!');
    }
}

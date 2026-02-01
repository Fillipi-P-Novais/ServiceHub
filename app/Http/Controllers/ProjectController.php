<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Company;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::with('company')
                ->withCount('tickets')
                ->latest()
                ->paginate(15),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Projects/Create', [
            'companies' => Company::orderBy('nome_fantasia')->get(['id', 'nome_fantasia']),
        ]);
    }

    public function store(StoreProjectRequest $request, Company $company)
    {
        //$company->projects()->create($request->validated());

        Project::create($request->validated());

        return redirect()->route('projects.index');
    }

    public function show(Project $project): Response
    {
        return Inertia::render('Projects/Show', [
            'project' => $project->load('company'),
            'tickets' => $project->tickets()
                ->with(['user', 'detail'])
                ->latest()
                ->paginate(15),
        ]);
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
            'companies' => Company::orderBy('nome_fantasia')->get(['id', 'nome_fantasia']),
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project): RedirectResponse
    {
        $project->update($request->validated());

        return redirect()
            ->route('projects.show', $project)
            ->with('success', 'Projeto atualizado com sucesso!');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $companyId = $project->company_id;
        $project->delete();

        return redirect()
            ->route('companies.show', $companyId)
            ->with('success', 'Projeto excluído com sucesso!');
    }
}

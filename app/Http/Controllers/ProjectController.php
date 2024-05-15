<?php

namespace App\Http\Controllers;

require_once __DIR__ . '/../helpers/utils.php';

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();
        $sortField = request('sortField', 'created_at');
        $sortDirection = request('sortDirection', 'desc');

        if (request('name')) {
            $query = $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('status')) {
            $query = $query->where('status', request('status'));
        }
        $projects = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Project/index', [
            'projects' => ProjectResource::collection($projects),
            'queryParams' => request()->query() ?: null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Project/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        $image = $data['image_path'] ?? null;

        if ($image) {
            $data['image_path'] = $image->store('project/' . Str::random(10), 'public');
        }

        $project = new Project($data);
        $project->updated_by = auth()->id();
        $project->created_by = auth()->id();
        $project->save();

        return to_route('project.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();
        $tasks = sortQueryModel($query);
        return Inertia::render('Project/Show', [
            'project' => (new ProjectResource($project)),
            'tasks' => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Project/Edit', [
            'project' => new ProjectResource($project)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $image = $data['image_path'] ?? null;

        if ($image) {
            if ($project->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(10), 'public');
        }
        $data['updated_by'] = auth()->id();

        $project->update($data);
        return $this->show($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        $project->delete();

        return to_route('project.index');
    }
}

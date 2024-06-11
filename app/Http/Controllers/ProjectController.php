<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('media')->orderByDesc('id')->paginate(6);

        return inertia('projects/index', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }

    public function show(Project $project)
    {
        $project->load(['media', 'albums.media']);

        return inertia('projects/show', [
            'project' => ProjectResource::make($project),
        ]);
    }
}

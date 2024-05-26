<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;

class HomeController extends Controller
{
    public function __invoke()
    {
        $projects = Project::with('media')->limit(3)->orderByDesc('id')->get();

        return inertia('index', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}

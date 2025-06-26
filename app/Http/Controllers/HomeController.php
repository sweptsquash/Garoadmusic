<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        $projects = Project::with('media')->limit(4)->orderByDesc('id')->get();

        return inertia('index', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}

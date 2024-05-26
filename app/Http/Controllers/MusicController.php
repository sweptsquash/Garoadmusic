<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Models\Album;

class MusicController extends Controller
{
    public function __invoke()
    {
        $album = Album::with('media')->orderByDesc('id')->paginate(12);

        return inertia('music', [
            'albums' => AlbumResource::collection($album),
        ]);
    }
}

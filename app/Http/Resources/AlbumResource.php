<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Album */
class AlbumResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'url' => $this->url,
            'cover' => $this->getImages($this->getFirstMedia('cover')),
            'project' => ProjectResource::make($this->whenLoaded('project')),
        ];
    }

    private function getImages(?\Spatie\MediaLibrary\MediaCollections\Models\Media $media): array
    {
        if (! $media instanceof \Spatie\MediaLibrary\MediaCollections\Models\Media) {
            return [
                'original' => null,
                'webp' => null,
            ];
        }

        return [
            'original' => $media->getUrl(),
            'webp' => $media->getUrl('webp'),
        ];
    }
}

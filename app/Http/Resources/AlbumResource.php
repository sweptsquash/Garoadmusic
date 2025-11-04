<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

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

    private function getImages(?Media $media): array
    {
        if (! $media instanceof Media) {
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

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'url' => $this->url,
            'cover' => $this->getImages($this->getFirstMedia('cover')),
            'project' => ProjectResource::make($this->whenLoaded('project')),
        ];
    }

    private function getImages($media): array
    {
        if (! $media) {
            return [
                'original' => null,
                'webp' => null,
            ];
        }

        return [
            'original' => $media->getUrl(),
            'webp' => $media->getUrk('webp'),
        ];
    }
}

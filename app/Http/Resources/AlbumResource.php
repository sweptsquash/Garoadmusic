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
            'cover' => $this->getFirstMediaUrl('cover'),
            'project' => ProjectResource::make($this->whenLoaded('project')),
        ];
    }
}

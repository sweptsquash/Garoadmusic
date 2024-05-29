<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'developer' => $this->developer,
            'publisher' => $this->publisher,
            'release_date' => $this->release_date,
            'bandcamp_embed_url' => $this->bandcamp_embed_url,
            'soundcloud_embed_url' => $this->soundcloud_embed_url,
            'youtube_embed_url' => $this->youtube_embed_url,
            'quote' => $this->quote,
            'quote_author' => $this->quote_author,
            'links' => $this->links,
            'albums' => AlbumResource::collection($this->whenLoaded('albums')),
            'cover' => $this->getImages($this->getFirstMedia('cover')),
            'banner' => $this->getImages($this->getFirstMedia('banner')),
            'logo' => $this->getImages($this->getFirstMedia('logo')),
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

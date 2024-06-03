<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * @mixin IdeHelperProject
 */
class Project extends Model implements HasMedia
{
    use HasFactory, HasSlug, InteractsWithMedia;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'developer',
        'publisher',
        'release_date',
        'bandcamp_embed_url',
        'soundcloud_embed_url',
        'youtube_embed_url',
        'quote',
        'quote_author',
        'links',
        'show_logo',
    ];

    protected $casts = [
        'release_date' => 'datetime',
        'links' => 'array',
        'show_logo' => 'boolean',
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('cover')
            ->singleFile();

        $this->addMediaCollection('banner')
            ->singleFile();

        $this->addMediaCollection('logo')
            ->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp');
    }

    public function albums(): HasMany
    {
        return $this->hasMany(Album::class);
    }
}

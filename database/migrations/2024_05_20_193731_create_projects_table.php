<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->string('developer')->nullable();
            $table->string('publisher')->nullable();
            $table->timestamp('release_date')->nullable();
            $table->text('bandcamp_embed_url')->nullable();
            $table->text('soundcloud_embed_url')->nullable();
            $table->string('youtube_embed_url')->nullable();
            $table->text('quote')->nullable();
            $table->string('quote_author')->nullable();
            $table->json('links')->nullable();
            $table->boolean('show_logo')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};

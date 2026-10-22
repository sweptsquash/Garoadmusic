<?php

declare(strict_types=1);

it('renders the public pages', function (string $uri, string $component): void {
    $this->get($uri)
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component($component));
})->with([
    'home' => ['/', 'index'],
    'about' => ['/about', 'about'],
    'music' => ['/music', 'music'],
    'projects' => ['/projects', 'projects/index'],
    'contact' => ['/contact', 'contact'],
]);

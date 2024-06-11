<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::get('/about', AboutController::class)->name('about');

Route::get('/music', MusicController::class)->name('music');

Route::prefix('projects')->name('projects.')->controller(ProjectController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/{project:slug}', 'show')->name('show');
});

Route::prefix('contact')->name('contact.')->controller(ContactController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
});

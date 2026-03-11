<?php

use App\Providers\AppServiceProvider;
use App\Providers\Filament\AdminPanelProvider;
use Olssonm\VeryBasicAuth\VeryBasicAuthServiceProvider;

return [
    AppServiceProvider::class,
    AdminPanelProvider::class,
    VeryBasicAuthServiceProvider::class,
];

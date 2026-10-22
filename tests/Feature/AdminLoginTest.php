<?php

declare(strict_types=1);

it('renders the filament admin login page', function (): void {
    $this->get('/admin/login')->assertOk();
});

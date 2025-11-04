<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return inertia('contact');
    }

    public function store(ContactStoreRequest $request): RedirectResponse
    {
        Message::query()->create($request->validated());

        return back()->with('success', 'Message sent successfully.');
    }
}

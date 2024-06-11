<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Models\Message;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('contact');
    }

    public function store(ContactStoreRequest $request)
    {
        Message::create($request->validated());

        return back()->with('success', 'Message sent successfully.');
    }
}

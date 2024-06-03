<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Mail\ContactForm;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('contact');
    }

    public function store(ContactStoreRequest $request)
    {
        Message::create($request->validated());

        Mail::to(config('services.contact_form.email'), config('services.contact_form.name'))
            ->send(new ContactForm($request->validated()));

        return back()->with('success', 'Message sent successfully.');
    }
}

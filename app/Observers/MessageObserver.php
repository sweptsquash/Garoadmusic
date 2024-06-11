<?php

namespace App\Observers;

use App\Mail\ContactForm;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;

class MessageObserver
{
    public function creating(Message $message): void
    {
        $message->ip_address = request()->ip();
    }

    public function created(Message $message): void
    {
        Mail::to(config('services.contact_form.email'), config('services.contact_form.name'))
            ->send(new ContactForm($message));
    }
}

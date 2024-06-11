<x-mail::message>
Hi Michael,

You've received a new message from your contact form.

Here are the details:
<x-mail::panel>
    <strong>Name:</strong> {{ $name }}<br>
    <strong>Email:</strong> {{ $email }}<br>
    <strong>Subject:</strong> {{ $subject }}<br>
    <strong>Message:</strong> <br /><br />
    {{ $message }}
</x-mail::panel>
</x-mail::message>

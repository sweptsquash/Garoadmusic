<?php

require_once __DIR__ . '/vendor/autoload.php';

if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $response = $data = [];

    $validation = [
        'name' => false,
        'email' => false,
        'subject' => false,
        'message' => false
    ];

    $validKeys =  array_keys($validation);

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    foreach($data as $key => $value) 
    {
        if(in_array($key, $validKeys)) 
        {
            $data[$key] = $value['value'];
        }
        else
        {
            unset($data[$key]);
        }
    }

    foreach($validation as $key => $value) 
    {
        if(empty($data[$key])) 
        {
            $validation[$key] = true;
        }
    }

    $hasError = in_array(true, $validation, true);

    if(!$hasError)
    {
        $messageBody = "Website Contact Form\r\n\r\n"
            . 'Name: ' . $data['name'] . "\r\n"
            . 'Email: ' . $data['email'] . "\r\n"
            . 'Subject: ' . $data['subject'] . "\r\n"
            . "Message: \r\n\r\n" . $data['message'];

        $transport = new \Swift_SmtpTransport('localhost', 25);
        $mailer = new \Swift_Mailer($transport);

        $message = (new \Swift_Message('Website Contact Form'))
            ->setFrom(['noreply@garoadmusic.com' => 'Garoadmusic'])
            ->setTo('tteproductions@gmail.com')
            ->setBody($messageBody, 'text/plain');

        if($mailer->send($message))
        {
            $response['result'] = 'success';
        }
        else
        {
            $response['result'] = 'error';
            $response['message'] = 'An unexpected error occured.';
        }
    }
    else
    {
        $response['result'] = 'error';
        $response['validation'] = $validation;
    }

    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}
else
{
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
}

?>
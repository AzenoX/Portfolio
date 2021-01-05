<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require('../classes/Mail.php');

use App\Mail;


if(isset($_POST['submit'])){
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new Mail(true);
    var_dump($mail->setDest("azen0x.alexis@gmail.com", "Alexis")
        ->setSubject("Portfolio >> " . $subject)
        ->setText($message)
        ->send());
}

if(isset($_GET['t'])){
    $mail = new Mail(true);
    var_dump($mail->setDest("azen0x.alexis@gmail.com", "Alexis")
        ->setSubject("Test")
        ->setText("Coucou les gens")
        ->send());
}


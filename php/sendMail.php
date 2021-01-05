<?php

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


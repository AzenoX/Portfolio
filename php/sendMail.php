<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require('../classes/Mail.php');

use App\Mail;


if(isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])){
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new Mail(true);
    var_dump($mail->setDest("azen0x.alexis@gmail.com", "Alexis")
        ->setSubject("Portfolio >> " . $subject)
        ->setText($message)
        ->send());
}
else{
    die(get_defined_vars());
}

if(isset($_GET['t'])){
    $mail = new Mail(true);
    var_dump($mail->setDest("azen0x.alexis@gmail.com", "Alexis")
        ->setSubject("Test")
        ->setText("Coucou les gens")
        ->send());
}


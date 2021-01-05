<?php


namespace App;

require("../vendor/autoload.php");
require("Vars.php");

use App\Vars;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class Mail{

    private $mail;
    private $username;
    private $return;


    public function __construct($return = true){

        //Init Timezone
        header('Content-type: text/html; charset=utf-8');
        date_default_timezone_set('Europe/Paris');

        $this->return = $return;

        //Init Mail
        $this->mail = new PHPMailer(true);

        //Add DKIM Key
        $this->mail->DKIM_domain = Vars::$domain;
        $this->mail->DKIM_private = Vars::$dkim_key_path;
        $this->mail->DKIM_selector = 'mail';
        $this->mail->DKIM_passphrase = '';
        $this->mail->DKIM_identity = $this->mail->From;

        //Setup SMTP Server
        $this->mail->isSMTP();
        $this->mail->Host       = Vars::$smtp_host;
        $this->mail->SMTPAuth   = true;
        $this->mail->Username   = Vars::$smtp_user;
        $this->mail->Password   = Vars::$smtp_pass;
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $this->mail->Port       = 587;

        //Recipients
        $this->mail->setFrom(Vars::$domain_email, Vars::$name);
        $this->mail->addReplyTo('azen0x.alexis@gmail.com', 'Informations');

        //Content
        $this->mail->isHTML(true);

        return $this;
    }


    public function setDest($email, $username = ""){
        $this->mail->addAddress($email, $username);
        $this->username = $username;

        return $this;
    }


    public function setSubject($subject){
        $this->mail->Subject = $subject;

        return $this;
    }


    public function setText($text){
        $this->mail->Body = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
        <meta name="viewport" content="width=device-width; initial-scale: 1.0; maximum_scale=1.0;" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>

    <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
        <table bgcolor="#dddddd" width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td height="100" style="font-size: 100px;line-height: 100px;">&nbsp;</td>
                </tr>
                <tr>
                    <td background="https://azenox.fr/csgro/img/assets/back.png" bgcolor="#dddddd" valign="top">
                        <!--[if gte mso 9]>
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
                        <v:fill type="tile" src="https://azenox.fr/csgro/img/assets/back.png" color="#dddddd" />
                        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                        <![endif]-->
                        <div>
                            <table bgcolor="#fff" align="center" width="60%" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td height="30" style="font-size: 30px;line-height: 30px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="http://azenox.fr/transpaws.com/" style="font-size: 40px; font-weight: bold; color: #000; text-decoration: none;">
                                                Portfolio
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="30" style="font-size: 30px;line-height: 30px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><div style="height: 1px; width: 60%; background-color: #000; margin-left: auto; margin-right: auto;"></div></td>
                                    </tr>
                                    <tr>
                                        <td height="30" style="font-size: 30px;line-height: 30px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><p style="color: #000; font-size: 20px; margin-left: 10%;">Hey '.$this->username.',</p></td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333; font-size: 16px; padding-left: 10%;">'.$text.'</td>
                                    </tr>
                                    <tr>
                                        <td height="30" style="font-size: 30px;line-height: 30px;">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--[if gte mso 9]>
                        </v:textbox>
                        </v:rect>
                        <![endif]-->
                    </td>
                </tr>
                <tr>
                    <td height="10" style="font-size: 100px;line-height: 100px;">
                        <span style="display: block; color: #888; font-size: 12px; text-align: center; margin-left: auto; margin-right: auto;">
                            This email was sent from <a style="color: #000; text-decoration: none;" href="https://'.Vars::$domain.'">https://azenox.fr</a>. Please reply to <a style="color: #000; text-decoration: none;" href="mailto:azen0x.alexis@gmail.com">azen0x.alexis@gmail.com</a>.
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>

</html>
        ';
        $this->mail->AltBody = $text;

        return $this;
    }

    public function send(){
        try {
            $this->mail->send();
            if($this->return){
                return "done";
            }
        } catch (Exception $e) {
            if($this->return){
                return "error";
            }
        }
    }



}
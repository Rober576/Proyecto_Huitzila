<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'frausto754537@gmail.com';                     //SMTP username
    $mail->Password   = 'sqwp ftvv xzea npjc';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('frausto754537@gmail.com', 'HUITZILA');
    $mail->addAddress('alfonsofrausto75@gmail.com', 'USUARIO');     //Add a recipient
 

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Solicitud de cambio de contraseña';
    $mail->Body    = 'Estimado Usuario, "65284936" es tú código de verificación de HUITZILA para el cambio de contraseña';

    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'MENSAJE ENVIADO CORRECTAMENTE';
} catch (Exception $e) {
    echo "MENSAJE NO ENVIADO. Mailer Error: {$mail->ErrorInfo}";
}
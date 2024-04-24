<?php
// PHP Mailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

// данные с формы
$data = $_POST;
$data = [];

// Объект письма:
$mail = new PHPMailer;

try {
	//Server settings
	$mail->CharSet = 'UTF-8';
    $mail->Host 	  = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@antey.fish';
    $mail->Password   = 'HJ2phepR';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
	//Recipients
    $mail->setFrom('no-reply@valeryinterior.ru');
    $mail->addAddress('v.zakernichnaya@yandex.ru');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Заявка с сайта valeryinterior.ru';
    $mail->Body    = getMessage($data);
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

function getMessage($data) {
	$message  = 'Новая заявка на сайте valeryinterior.ru<br>';
	$message .= $data['title'] . ' ' . $data['subtitle'] . '<br><br>';
	$message .= 'От: ' . $data['name'] . '<br>';
	$message .= 'телефон: ' . $data['phone'] . '<br>';
	$message .= 'e-mail: ' . $data['email'] . '<br><br>';

	return $message;
}
<?php

date_default_timezone_set('Etc/UTC');
// error_reporting(E_ALL);
// ini_set('display_errors', '1');
// require_once 'phpmailer/PHPMailerAutoload.php';
require_once 'phpmailer/class.phpmailer.php';
require_once 'phpmailer/class.smtp.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    // $mail->isSMTP();

    // $mail->SMTPDebug = 2;
    // $mail->Debugoutput = 'html';
    //
    // $mail->Host = "mail.premus.ca";
    // $mail->SMTPAuth = true;
    // $mail->Username = 'outgoing';
    // $mail->Password = 'iftrr@Ck*VnsTU9';
    // $mail->SMTPSecure = 'tls';
    // $mail->Port = 587;

    // $mail->SMTPAuth = false;
    // $mail->SMTPSecure = false;

    $mail->isSendmail();

    $mail->setFrom($_POST['inputEmail'], $_POST['inputName']);

    $mail->AddAddress('da.silva.brandon@gmail.com'); //recipient
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = "Name: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    } else {
      $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
      echo json_encode($data);
    }



} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}

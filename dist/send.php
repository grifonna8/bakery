<?php

  $userName = $_POST['userName'];
  $userPhone = $_POST['userPhone'];  
  $userEmail = $_POST['userEmail'];
  $userQuestion = $_POST['userQuestion'];
// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'nektonektovich8@gmail.com';                     // SMTP username
    $mail->Password   = 'A1!234567';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('nektonektovich8@gmail.com');
    $mail->addAddress('grifonna8@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->subject    = 'Новая заявка с сайта';

    if ($userEmail == true)
      $mail->Body = "Имя пользователя: ${userName}, его телефон: ${userPhone}, его почта: ${userEmail}";
    else if ($userQuestion == true)
      $mail->Body = "Имя пользователя: ${userName}, его телефон: ${userPhone}, его вопрос: ${userQuestion}";
    else if ($userEmail != true && $userQuestion != true)
      $mail->Body = "Имя пользователя: ${userName}, его телефон: ${userPhone}";
    $mail->send();
    header('Location: thanks.html');
/*     echo "Форма успешно отправлена"; */

} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
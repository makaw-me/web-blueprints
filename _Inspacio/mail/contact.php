<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "studio@inspacio.com";
$subject = "Inspacio Inquiry: $m_subject - $name";
$body = "You have received a new consultation inquiry from the Inspacio website contact form.\n\n"."Client Details:\nName: $name\nEmail: $email\nSubject: $m_subject\n\nMessage:\n$message\n";
$header = "From: $email\r\n";
$header .= "Reply-To: $email\r\n";
$header .= "X-Mailer: PHP/" . phpversion();

if(!mail($to, $subject, $body, $header)) {
  http_response_code(500);
}
?>

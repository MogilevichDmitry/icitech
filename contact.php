<?php
	
	$txtname = trim($_POST['txtname']);

	$txtcontact = trim($_POST['txtcontact']);

	$txtmessage = trim($_POST['txtmessage']);

	$fromMail = '+375330000000';
	$fromName = $txtname;

	$emailTo = 'hello@icitech.by';

	$subject = 'Форма обратной связи';
	$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
	$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

	$body = "Получено письмо с сайта ICITech.by\n\nИмя: $txtname\nКонтактная информация: $txtcontact \nСообщение: $txtmessage";

  mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );

	echo 'ok';
?>

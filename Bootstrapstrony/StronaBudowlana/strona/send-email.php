<?
$Email=$_POST['email'];
$name=$_POST['name'];
$surname=$_POST['surname'];
$message=$POST['message'];
$telephone=$POST['telephone'];

$body .= "Email: " + $email . "\n";
$body .= "Imie: " + $name . "\n";
$body .= "Nazwisko: " + $surname . "\n";
$body .= "Wiadomość: " + $message . "\n";
$body .= "Telefon: " + $telephone . "\n";

mail("ryszard@uslugibudowlane.opole.pl", "Mail ze strony internetowej DOM", $body);
?>
<head>
    
<script>alert("Twój Email został wysłany.");</script>

<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">

</head>
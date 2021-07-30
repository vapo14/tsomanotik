<?php
// Check for empty fields
if(empty($_POST['nombre']) || empty($_POST['correo']) || empty($_POST['asunto']) || empty($_POST['mensaje']) || !filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$nombre = strip_tags(htmlspecialchars($_POST['nombre']));
$correo = strip_tags(htmlspecialchars($_POST['correo']));
$asunto = strip_tags(htmlspecialchars($_POST['asunto']));
$mensaje = strip_tags(htmlspecialchars($_POST['mensaje']));

// Create the email and send the message
$to = "info@manotik.org"; // Add your email address in between the "" replacing yourname@yourdomain.com - This is where the form will send a mensaje to.
$subject = "Formulario de contacto de pagina web Tsomanotik:  $nombre";
$body = "¡Has recibido un nuevo contacto desde la página de Tsomanotik!\n\n"."Estos son los detalles:\n\nNombre: $nombre\n\nCorreo: $correo\n\nAsunto: $asunto\n\nMensaje:\n$mensaje";
$header = "De: noreply@manotik.org\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Responder-a: $correo";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
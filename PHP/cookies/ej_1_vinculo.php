<?php
/*
crea un script en el que a través de un vínculo permita borrar la cookie creada en el script adjunto.
*/

setcookie('visitas', "", time() - 3600 * 24);
header('Location: contador_visitas.php');
?>
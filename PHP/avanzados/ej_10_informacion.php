<?php
/*
Ejercicio 10. Crea una script en PHP que muestre la versión utilizada, 
la dirección IP del cliente y el navegador que está utilizando.
*/

echo "Version PHP: " . phpversion() . "<br/>";
echo "IP del cliente: " . $_SERVER['REMOTE_ADDR'] . "<br/>";
echo "Navegador del cliente : " . $_SERVER['HTTP_USER_AGENT'];
?>
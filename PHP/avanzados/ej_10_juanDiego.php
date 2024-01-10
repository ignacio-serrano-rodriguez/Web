<?php

//Versión actual de PHP:
echo phpversion();
echo "<br>";


//Dirección IP del cliente que realiza la petición
echo $_SERVER["REMOTE_ADDR"];
echo "<br>";

//Identificador del navegador
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";

//Otra forma de identificar al navegador
//Revisa su uso aquí: https://www.php.net/manual/en/function.get-browser.php
$browser = get_browser(null, true);
var_dump($browser);
?>
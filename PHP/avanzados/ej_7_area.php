<?php

require ("funcionAreaRectangulo.php");

$ancho = $_POST["ancho"];
$alto = $_POST["altura"];

$titulo = "Cuadrado de $ancho" . "x$alto (ancho x alto)";

$resultado = calcular_area_rectangulo($ancho, $alto);

echo 
    "<!DOCTYPE html>
    <html lang=\"es\">
    
        <head>
    
            <meta charset=\"UTF8\">
            <title> $titulo </title>
    
        </head>
    
        <body>

            <h1> $resultado </h1>
    
        </body>
        
    </html>"
;

?>
<?php

$string = "string de prueba con acénto";

//Para la longitud de la cadena
echo strlen($string);
echo "<br>";

//Para cadenas que empleen caractees de más de un byte
echo mb_strlen($string);
echo "<br>";

//Transformar la cadena a MAYÚSCULAS
echo strtoupper($string);
echo "<br>";

//Transformar la cadena a minúsculas
echo strtolower($string);
echo "<br>";

//Reemplazar fragmentos de la cadena
echo str_replace("de prueba","reemplazado", $string);
echo "<br>";

<?php
/*
Crea una cadena de texto y luego utiliza funciones de manipulación de cadenas en PHP para realizar las siguientes operaciones:
   Mostrar la longitud de la cadena.
   Convertir la cadena a mayúsculas.
   Convertir la cadena a minúsculas.
   Reemplazar una palabra en la cadena por otra.
*/

$cadena = "HoLa MuNdO, mE lLaMo NaChO";
echo "Cadena: $cadena <br/>";
echo "Longitud cadena: " . strlen($cadena) . "<br/>";
echo "Cadena en mayúsculas: " . strtoupper($cadena) . "<br/>";
echo "Cadena en minúsculas: " . strtolower($cadena) . "<br/>";
echo "Cadena remoplazada: " . str_replace("NaChO","JuAn DiEgO",$cadena);
?>

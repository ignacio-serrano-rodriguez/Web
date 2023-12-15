<?php
/*
Realiza las siguientes operaciones matemáticas en PHP y muestra el resultado en el navegador:
   Suma de dos números.
   Resta de dos números.
   Multiplicación de dos números.
   División de dos números.
*/
    echo "<title> ej 3 - operaciones </title>";

    $num1 = 2;
    $num2 = 3;
    $num3;

    $num3 = $num1 + $num2;
    echo "$num1 + $num2 = $num3</br>";

    $num3 = $num1 - $num2;
    echo "$num1 - $num2 = $num3</br>";

    $num3 = $num1 * $num2;
    echo "$num1 * $num2 = $num3</br>";

    $num3 = $num1 / $num2;
    $num3 = round($num3, 2);
    echo "$num1 / $num2 = $num3";

?>
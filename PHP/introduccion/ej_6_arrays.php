<?php
/*
Crea un array llamado $colores que contenga varios nombres de colores. 
Luego, utiliza un bucle foreach para mostrar cada color en una lista en el navegador.
*/
echo "<title> ej 6 - arrays </title>";

    $colores = array("azul", "rojo", "amarillo", "verde", "naranja"); 

    foreach ($colores as &$color) 
    {
        echo "$color</br>";
    }

?>
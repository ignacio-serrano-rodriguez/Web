<?php
/*
Elabora un formulario en PHP que recoja una información como una frase que posteriormente 
tenga que guardarse en un archivo. El script que guarda el guarda el archivo debe poder crear 
el archivo si no existe. Si por ejemplo, el formulario recoge los nombres de los alumnos que 
no han asistido a clase, por el formulario se introduce: "Maria, Juan" y el archivo debe guardar: 
"1ra hora: Maria, Juan", si el formulario se rellena por segunda vez el mismo día a continuación 
de esa línea se escribirá: "2da hora: María, Pepe". El archivo se guardará con la fecha de hoy 
con el nombre "fichero_AAMMDD.txt". El próximo día se creará un fichero nuevo cuando se rellene el 
formulario.
*/

echo "<title> ej 2 - formulario (ficheros) </title>";
$alumnosCadena = $_POST["alumnos"] . "\n";
$ficheroNombre = "fichero_" . date("ymd") . ".txt";

if(file_exists($ficheroNombre))
{
    $ficheroLineas = (count(file($ficheroNombre)))+1; 
    $fichero = fopen($ficheroNombre, "a");
}
else
{
    $ficheroLineas = 1;
    $fichero = fopen($ficheroNombre, "w");
}

$cadenaResultado = $ficheroLineas . "da hora: " . $alumnosCadena;
fwrite($fichero, $cadenaResultado);
fclose($fichero);
header('Location: ej_2_formulario.html');

?>
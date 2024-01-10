<?php
/*
Crea una página web con PHP con un formulario que permita subir un archivo. 
La ruta para guardar el archivo debería ser: 
Si el formulario se guarda en una ruta (por ejemplo: /formulario/formulario.php), 
el archivo debe guardarse en /subidas/fichero.txt. 
¿Se puede utilizar una ruta relativa o tiene que ser absoluta?

La ruta siempre ha de ser relativa para que pueda funcionar en cualquier sistema.
*/

echo "<title> ej 1 - formulario (ficheros) </title>";

echo "Usuario del sistema que ejecuta el script php: " . exec('whoami') . "<br/><br/>";

$ficheroError = $_FILES["fichero"]["error"];

if ($ficheroError != 0)
{
    echo "No se ha seleccionado ningún fichero<br/>";
}
else
{

    $ficheroTamanio = $_FILES["fichero"]["size"];

    if($ficheroTamanio > 256*1024)
    {
        echo "El fichero es demasiado grande<br/>";
    }
    else
    {
        $directorioSubida = "subidas";
        $ficheroNombre = $_FILES["fichero"]["name"];
        $ficheroNombreTemporal = $_FILES["fichero"]["tmp_name"];
        $ficheroTipo = $_FILES["fichero"]["type"];

        echo "Nombre del fichero: $ficheroNombre<br/>";
        echo "Nombre temporal del fichero: $ficheroNombreTemporal<br/>";
        echo "Tipo del fichero: $ficheroTipo<br/><br/>";

        $ficheroGuardado = move_uploaded_file($ficheroNombreTemporal, "$directorioSubida/$ficheroNombre");

        if($ficheroGuardado === true)
        {
            echo "El fichero SI se ha guardado en la ruta ($directorioSubida/)<br/>";
        } 
        else 
        {
            echo "El fichero NO se ha guardado en la ruta ($directorioSubida/)<br/>";
        } 
    }
}
?>
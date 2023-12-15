<?php

// DATOS CONEXIÓN
$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
$usuario = 'root';
$clave = '';

try 
{
    // CONEXIÓN ENLAZANDO BD A OBJETO
    $empresaBD = new PDO($conexion, $usuario, $clave);
    var_dump($empresaBD);
} 
catch (PDOException $e) 
{
    echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
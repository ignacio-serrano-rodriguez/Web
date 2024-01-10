<?php

// DATOS CONEXIÓN
$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
$usuario = 'root';
$clave = '';

try 
{
	// CONEXIÓN ENLAZANDO BD A OBJETO
    $empresaBD = new PDO($conexion, $usuario, $clave);	

	echo "-- Antes cambios --<br/>";
	$query = $empresaBD->query("SELECT codigo, nombre, clave, rol FROM usuarios");
	foreach ($query as $usuario) 
	{
		echo " Codigo: " . $usuario['codigo'];
		echo " Nombre: " . $usuario['nombre'];
		echo " Clave: " . $usuario['clave'];
		echo " Rol: " . $usuario['rol'] . "<br/>";
	}
	echo "<br/>";

	$query = $empresaBD->query("insert into usuarios(codigo, nombre, clave, rol) values('2', 'Diana', '33333', '0')");	
	$query = $empresaBD->query("update usuarios set rol =  0 where rol = 1");	
	$query = $empresaBD->query("delete from usuarios where nombre = 'Ana'");	

	echo "-- Cambios realizados --<br/>";
	$query = $empresaBD->query("SELECT codigo, nombre, clave, rol FROM usuarios");
	foreach ($query as $usuario) 
	{
		echo " Codigo: " . $usuario['codigo'];
		echo " Nombre: " . $usuario['nombre'];
		echo " Clave: " . $usuario['clave'];
		echo " Rol: " . $usuario['rol'] . "<br/>";
	}
	echo "<br/>";

	$query = $empresaBD->query("delete from usuarios where nombre = 'Diana'");	
	$query = $empresaBD->query("update usuarios set rol =  1 where rol = 0");	
	$query = $empresaBD->query("insert into usuarios(codigo, nombre, clave, rol) values('1','ana', '1234', '0')");

	echo "-- Cambios desechos --<br/>";
	$query = $empresaBD->query("SELECT codigo, nombre, clave, rol FROM usuarios");
	foreach ($query as $usuario) 
	{
		echo " Codigo: " . $usuario['codigo'];
		echo " Nombre: " . $usuario['nombre'];
		echo " Clave: " . $usuario['clave'];
		echo " Rol: " . $usuario['rol'] . "<br/>";
	}	
} 
catch (PDOException $e) 
{
	echo $e->getMessage();
} 

?>
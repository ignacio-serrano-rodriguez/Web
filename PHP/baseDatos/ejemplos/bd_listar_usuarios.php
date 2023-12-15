<?php

// DATOS CONEXIÓN
$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
$usuario = 'root';
$clave = '';

try 
{
	// CONEXIÓN ENLAZANDO BD A OBJETO
    $empresaBD = new PDO($conexion, $usuario, $clave);

	// EJEMPLO CONSULTA NO PREPARADA (SIN PARÁMETROS)
	// Realizamos la consulta SQL y la almacenamos en una variable
	// Solo se almacenan los registros consultados (no podriamos mostrar la columna código)
	$query = $empresaBD->query("SELECT codigo, nombre, clave, rol FROM usuarios");
	echo "-- Número de usuarios: " . $query->rowCount() . " --<br/>";

	foreach ($query as $usuario) 
	{
		echo " Codigo: " . $usuario['codigo'];
		echo " Nombre: " . $usuario['nombre'];
		echo " Clave: " . $usuario['clave'];
		echo " Rol: " . $usuario['rol'] . "<br/>";
	}
	echo "<br/>";

	// EJEMPLO CONSULTA PREPARADA (PARAMETRIZADA EN ORDEN)
	/* consulta preparada, parametros por orden */	
/*
	$query = $empresaBD->prepare("select nombre from usuarios where rol = ?");	
	$query->execute(array(0));
	echo "-- Número de usuarios con rol 0: " .  $query->rowCount() . " --<br/>";

	foreach ($query as $usuario) 
	{
		echo "Nombre : " . $usuario['nombre'] . "<br>";
	}
	echo "<br/>";
*/
	// EJEMPLO CONSULTA PREPARADA NOMBRE (PARAMETRIZADA SIN ORDEN)
	/* consulta preparada, parametros por nombre */	
/*
	$query = $empresaBD->prepare("select nombre from usuarios where rol = :rol");
	$query->execute(array(':rol' => 1));
	echo "-- Número de usuarios con rol 1: " .  $query->rowCount() . " --<br>";
	foreach ($query as $usuario) 
	{
		echo "Nombre : " . $usuario['nombre'] . "<br>";
	}	
*/
} 
catch (PDOException $e) 
{
	echo $e->getMessage();
}

?>
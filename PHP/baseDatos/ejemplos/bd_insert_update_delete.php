<?php

// DATOS CONEXIÓN
$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
$usuario = 'root';
$clave = '';

try 
{
	// CONEXIÓN ENLAZANDO BD A OBJETO
    $empresaBD = new PDO($conexion, $usuario, $clave);	
	echo "Conexión realizada con éxito<br/><br/>";	

	// INSERTAR (añadir nuevas tuplas/filas)
	$query = $empresaBD->query("insert into usuarios(nombre, clave, rol) values('Rodrigo', '33333', '0')");	
	if($query) 		
	{
		echo "Insert correcto <br/>";
		echo "Número de filas insertadas: " . $query->rowCount() . "<br/><br/>";
	}
	else print_r($empresaBD->errorinfo());	
	// el campo de "codigo" los crea la base de datos de forma automática
	echo "Código de la fila insertada: " . $empresaBD->lastInsertId() . "<br/><br/>"; 

	// ACTUALIZAR (modificar tuplas/filas existentes)
	$query = $empresaBD->query("update usuarios set rol =  0 where rol = 1");	
	if($query)
	{
		echo "Update correcto <br/>";
		echo "Número de filas actualizadas: " . $query->rowCount() . "<br/><br/>";
	}
	else print_r( $empresaBD -> errorinfo());	

	// BORRAR (eliminar tuplas/filas existentes)
	$query = $empresaBD->query("delete from usuarios where nombre = 'Luisa'");	
	if($query)
	{
		echo "Delete correcto <br/>";
		echo "Filas borradas: " . $query->rowCount() . "<br/><br/>";
	}
	else print_r($empresaBD->errorinfo());
	
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
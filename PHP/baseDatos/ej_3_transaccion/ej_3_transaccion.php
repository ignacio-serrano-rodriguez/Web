<?php

// DATOS CONEXIÓN
$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
$usuario = 'root';
$clave = '';

try 
{
	// CONEXIÓN ENLAZANDO BD A OBJETO
    $empresaBD = new PDO($conexion, $usuario, $clave);

	// INICIO DE LA TRANSACCIÓN QUE DA LUGAR A FALLO
	try 
	{
		$empresaBD->beginTransaction();	

		// Realizamos una consulta de insercción para un usuario con un nombre ya existente, dará lugar a un rollback
		$query = $empresaBD->query("insert into usuarios(nombre, clave, rol) values('ana', '33333', '1')");	

		// Si no salta ninguna excepción, se hace commit
		$empresaBD->commit();
		echo "Transacción realizada<br/><br/>";
	} 
	catch (PDOException $e) 
	{
		echo $e->getMessage() . "<br/>";

		// Deshace el primer cambio
		$empresaBD->rollback();
		echo "Transacción anulada<br/><br/>";
	} 

	
	// INICIO DE LA TRANSACCIÓN QUE DA LUGAR A ÉXITO
	try 
	{
		$empresaBD->beginTransaction();	

		// Realizamos una consulta de insercción para un usuario con un nombre ya existente, dará lugar a un rollback
		$query = $empresaBD->query("insert into usuarios(nombre, clave, rol) values('Jacobo', '33333', '1')");	

		// Si no salta ninguna excepción, se hace commit
		$empresaBD->commit();
		echo "Transacción realizada<br/>";
	} 
	catch (PDOException $e) 
	{
		echo $e->getMessage() . "<br/>";

		// Deshace el primer cambio
		$empresaBD->rollback();
		echo "Transacción anulada<br/>";
	} 

} 
catch (PDOException $e) 
{
    echo $e->getMessage();
} 

?>
<?php
try 
{
	$usuarioLogin = $_POST["usuarioLogin"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$array = [];
	$objeto = array("respuesta" => "Tu usuario ha sido eliminado.");
	array_push($array, $objeto);

	$query = $BD->prepare("DELETE FROM usuarios WHERE usuario = :usuarioLogin");
	$query->execute(array(':usuarioLogin' => $usuarioLogin));

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
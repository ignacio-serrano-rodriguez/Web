<?php
try 
{
	$idLogin = $_POST["idLogin"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, id_usuario FROM listas");
	$query->execute();

	$array = [];

	foreach ($query as $lista) 
	{
		if ($lista['id_usuario'] == $idLogin) 
		{
			$objeto = array("nombreLista" => $lista['nombre']);
			array_push($array, $objeto);
		}
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
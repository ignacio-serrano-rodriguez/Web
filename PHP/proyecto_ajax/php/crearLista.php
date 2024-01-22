<?php
try 
{
	$idLogin = $_POST["idLogin"] ?? null;
	$nombreLista = $_POST["nombreLista"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, id_usuario FROM listas");
	$query->execute();

	$array = [];
	$listaRepetida = false;

	foreach ($query as $lista) 
	{
		if ($lista['nombre'] == $nombreLista && $lista['id_usuario'] == $idLogin) 
		{
			$listaRepetida = true;
			$objeto = array("respuesta" => "Ya existe una lista con ese nombre.");
			array_push($array, $objeto);
		}
	}

	if($listaRepetida == false)
	{
		$objeto = array("respuesta" => "correcto");
		array_push($array, $objeto);
		$objeto = array("nombreLista" => $nombreLista);
		array_push($array, $objeto);
		$queryCreacion = $BD->prepare("insert into listas(nombre, id_usuario) values('$nombreLista', '$idLogin')");
		$queryCreacion->execute();
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
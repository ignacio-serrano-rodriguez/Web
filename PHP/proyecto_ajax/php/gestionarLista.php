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

	foreach ($query as $lista) 
	{
		if ($lista['id_usuario'] == $idLogin && $lista['nombre'] == $nombreLista) 
		{
			$queryElementos = $BD->prepare("SELECT id, id_lista, nombre, nota, comentario FROM elementos");
			$queryElementos->execute();

			foreach($queryElementos as $elemento)
			{
				if ($lista['id'] == $elemento['id_lista']) 
				{
					$objeto = array("elemento" => $elemento['nombre']);
					array_push($array, $objeto);
					$objeto = array("elemento" => $elemento['nota']);
					array_push($array, $objeto);
					$objeto = array("elemento" => $elemento['comentario']);
					array_push($array, $objeto);
				}
			}

			break;
		}
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
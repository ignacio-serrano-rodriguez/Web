<?php
	try 
	{
		$conexion = 'mysql:dbname=pedidos;host=127.0.0.1:3306';
		$usuarioBD = 'root';
		$claveBD = '';
		$BD = new PDO($conexion, $usuarioBD, $claveBD);

		$codCat = $_GET["codCat"];

		$query = $BD->query("SELECT nombre, categoria FROM productos");

		$array = [];

		foreach ($query as $elemento) 
		{
			if ($codCat == $elemento['categoria']) 
			{
				$objeto = array("nombre" => $elemento['nombre']);
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
?>
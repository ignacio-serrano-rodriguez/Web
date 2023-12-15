<?php	

	try 
	{
		$conexion = 'mysql:dbname=pedidos;host=127.0.0.1:3306';
		$usuarioBD = 'root';
		$claveBD = '';
		$BD = new PDO($conexion, $usuarioBD, $claveBD);

		$query = $BD->query("SELECT nombre FROM categorias");

		$array = [];

		foreach ($query as $elemento) 
		{
			$objeto = array("nombre" => $elemento['nombre']);
			array_push($array, $objeto);
		}

		$json = json_encode($array);	
		echo $json;
	} 
	catch (PDOException $e) 
	{
		echo 'Error con la base de datos: ' . $e->getMessage();
	}

?>
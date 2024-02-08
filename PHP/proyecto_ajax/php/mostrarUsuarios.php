<?php
try 
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");
	$query->execute();

	$array = [];

	foreach ($query as $usuario) 
	{
		if ($usuario['rol'] != $rolLogin) 
		{
			$objeto = array("nombreUsuario" => $usuario['usuario']);
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
<?php
try 
{
	$usuarioLogin = $_POST["usuarioLogin"] ?? null;
	$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");
	$query->execute();

	$array = [];

	$usuarioEncontrado = false;

	foreach ($query as $usuario) 
	{
		if ($usuario['usuario'] == $usuarioLogin && $usuario['contrasenia'] == $contraseniaLogin) 
		{
			$objeto = array("respuesta" => "correcto");
			array_push($array, $objeto);
			$objeto = array("id" => $usuario['id']);
			array_push($array, $objeto);
			$objeto = array("nombre" => $usuario['nombre']);
			array_push($array, $objeto);
			$objeto = array("apellidos" => $usuario['apellidos']);
			array_push($array, $objeto);
			$objeto = array("edad" => $usuario['edad']);
			array_push($array, $objeto);
			$objeto = array("mail" => $usuario['mail']);
			array_push($array, $objeto);
			$objeto = array("usuario" => $usuario['usuario']);
			array_push($array, $objeto);
			$objeto = array("rol" => $usuario['rol']);
			array_push($array, $objeto);

			$usuarioEncontrado = true;

			break;
		}
	}

	if($usuarioEncontrado == false)
	{
		$objeto = array("respuesta" => "La información introducida no es válida.");
		array_push($array, $objeto);
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
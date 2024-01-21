<?php
try 
{
	$usuarioIntroducido = $_POST["usuarioIntroducido"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");
	$query->execute();

	$array = [];
	$usuarioEliminado = false;

	foreach ($query as $usuario) 
	{
		if ($usuario['usuario'] == $usuarioIntroducido && $usuario['rol'] != 0) 
		{
			$objeto = array("respuesta" => "correcto");
			array_push($array, $objeto);
			$objeto = array("usuarioEliminado" => $usuario['usuario']);
			array_push($array, $objeto);
			$usuarioEliminado = true;

			$query = $BD->prepare("DELETE FROM usuarios WHERE usuario = '$usuarioIntroducido'");
			$query->execute();

			break;
		}
	}

	if($usuarioEliminado == false)
	{
		$objeto = array("respuesta" => "No se ha eliminado ningún usuario.");
		array_push($array, $objeto);
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
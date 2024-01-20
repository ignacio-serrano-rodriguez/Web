<?php
try 
{
	$idLogin = $_POST["idLogin"] ?? null;
	$usuarioLogin = $_POST["usuarioLogin"] ?? null;
	$mailLogin = $_POST["mailLogin"] ?? null;
	$usuarioActualizacion = $_POST["usuarioActualizacion"] ?? null;
	$mailActualizacion = $_POST["mailActualizacion"] ?? null;
	$nombreActualizacion = $_POST["nombreActualizacion"] ?? null;
	$apellidosActualizacion = $_POST["apellidosActualizacion"] ?? null;
	$edadActualizacion = $_POST["edadActualizacion"] ?? null;
	$contraseniaActualizacion_1 = $_POST["contraseniaActualizacion_1"] ?? null;
	$contraseniaActualizacion_2 = $_POST["contraseniaActualizacion_2"] ?? null;

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");
	$query->execute();

	$array = [];
	$usuarioMailEnUso = false;

	if($contraseniaActualizacion_1 == $contraseniaActualizacion_2 && $contraseniaActualizacion_1 != "" && $contraseniaActualizacion_2 != "")
	{
		foreach ($query as $usuario) 
		{
			if (($usuario['usuario'] == $usuarioActualizacion && $usuario['usuario'] != $usuarioLogin) || ($usuario['mail'] == $mailActualizacion && $usuario['mail'] != $mailLogin)) 
			{
				$objeto = array("respuesta" => "Ese nombre de usuario o mail ya está en uso");
				array_push($array, $objeto);
				$usuarioMailEnUso = true;
				break;
			}
		}

		if($usuarioMailEnUso == false)
		{
			$query = $BD->prepare("UPDATE usuarios SET nombre='$nombreActualizacion' WHERE id=$idLogin");
			$query->execute();
			$query = $BD->prepare("UPDATE usuarios SET apellidos='$apellidosActualizacion' WHERE id=$idLogin");
			$query->execute();
			$query = $BD->prepare("UPDATE usuarios SET edad='$edadActualizacion' WHERE id=$idLogin");
			$query->execute();
			$query = $BD->prepare("UPDATE usuarios SET mail='$mailActualizacion' WHERE id=$idLogin");
			$query->execute();
			$query = $BD->prepare("UPDATE usuarios SET usuario='$usuarioActualizacion' WHERE id=$idLogin");
			$query->execute();
			$query = $BD->prepare("UPDATE usuarios SET contrasenia='$contraseniaActualizacion_1' WHERE id=$idLogin");
			$query->execute();

			$objeto = array("respuesta" => "correcto");
			array_push($array, $objeto);
			$objeto = array("id" => $idLogin);
			array_push($array, $objeto);
			$objeto = array("nombre" => $nombreActualizacion);
			array_push($array, $objeto);
			$objeto = array("apellidos" => $apellidosActualizacion);
			array_push($array, $objeto);
			$objeto = array("edad" => $edadActualizacion);
			array_push($array, $objeto);
			$objeto = array("mail" => $mailActualizacion);
			array_push($array, $objeto);
			$objeto = array("usuario" => $usuarioActualizacion);
			array_push($array, $objeto);
			$objeto = array("contrasenia" => "");
			array_push($array, $objeto);
		}
	}
	else
	{
		$objeto = array("respuesta" => "La contraseña no coincide o está vacía");
		array_push($array, $objeto);
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
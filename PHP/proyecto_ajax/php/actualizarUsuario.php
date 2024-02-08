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
	$contraseniaAntigua = $_POST["contraseniaAntigua"] ?? null;
	$contraseniaActualizacion_1 = $_POST["contraseniaActualizacion_1"] ?? null;
	$contraseniaActualizacion_2 = $_POST["contraseniaActualizacion_2"] ?? null;

	$array = [];

	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$validacionUsuario = false;

	$query = $BD->prepare("SELECT u.id FROM usuarios u WHERE contrasenia = :contraseniaAntigua");
	$query->execute(array(':contraseniaAntigua' => $contraseniaAntigua));

	foreach ($query as $usuario) 
	{	
		if($usuario['id'] == $idLogin)
		{
			$validacionUsuario = true;
			break;
		}
	}
	
	if($validacionUsuario == true)
	{
		if (! is_int((int)$edadActualizacion))
		{
			$objeto =["respuesta" => "La edad ha de ser un entero."];
			array_push($array, $objeto);
		}
		else
		{
			$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
			$usuarioBD = 'root';
			$claveBD = '';
			$BD = new PDO($conexion, $usuarioBD, $claveBD);

			$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");
			$query->execute();

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

					$query = $BD->prepare("UPDATE usuarios SET nombre = :nombreActualizacion, apellidos = :apellidosActualizacion, edad = :edadActualizacion, mail = :mailActualizacion, usuario = :usuarioActualizacion, contrasenia = :contraseniaActualizacion_1 WHERE id = :idLogin");
					$query->execute(array(':nombreActualizacion' => $nombreActualizacion, ':apellidosActualizacion' => $apellidosActualizacion, ':edadActualizacion' => $edadActualizacion, ':mailActualizacion' => $mailActualizacion, ':usuarioActualizacion' => $usuarioActualizacion, ':contraseniaActualizacion_1' => $contraseniaActualizacion_1, ':idLogin' => $idLogin));

					$objeto = 
					[
						"respuesta" 	=> "correcto", 
						"id" 			=> $idLogin, 
						"nombre" 		=> $nombreActualizacion, 
						"apellidos" 	=> $apellidosActualizacion, 
						"edad" 			=> $edadActualizacion,
						"mail" 			=> $mailActualizacion, 
						"usuario" 		=> $usuarioActualizacion
					];

					array_push($array, $objeto);
				}
			}
			else
			{
				$objeto = array("respuesta" => "La contraseña no coincide o está vacía");
				array_push($array, $objeto);
			}
		}
	}
	else
	{
		$objeto =["respuesta" => "La contraseña antigua no es válida."];
		array_push($array, $objeto);
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	// echo 'Error con la base de datos: ' . $e->getMessage();
	$objeto =["respuesta" => "Información introducida no válida."];
	array_push($array, $objeto);
	$json = json_encode($array);	
	echo $json;
}
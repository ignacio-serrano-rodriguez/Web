<?php

use function PHPUnit\Framework\isNan;

try 
{
	$nombreRegistro = $_POST["nombreRegistro"] ?? null;
	$apellidosRegistro = $_POST["apellidosRegistro"] ?? null;
	$edadRegistro = $_POST["edadRegistro"] ?? null;
	$mailRegistro = $_POST["mailRegistro"] ?? null;
	$usuarioRegistro = $_POST["usuarioRegistro"] ?? null;
	$contraseniaRegistro_1 = $_POST["contraseniaRegistro_1"] ?? null;
	$contraseniaRegistro_2 = $_POST["contraseniaRegistro_2"] ?? null;

	$array = [];

	if($usuarioRegistro == null || $usuarioRegistro == '' || $mailRegistro == null || $mailRegistro == '')
	{
		$objeto =["respuesta" => "Usuario y correo obligatorios para el registro."];
		array_push($array, $objeto);
	}
	else if (! is_int((int)$edadRegistro))
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

		

		$usuarioRepetido = false;

		if($contraseniaRegistro_1 != $contraseniaRegistro_2 || $contraseniaRegistro_1 == "" || $contraseniaRegistro_2 == "")
		{
			$objeto = array("respuesta" => "Ambas contraseñas han de coincidir y no estar vacías.");
			array_push($array, $objeto);
		}
		else if($edadRegistro < 18)
		{
			$objeto = array("respuesta" => "No se admiten usuarios menores de edad.");
			array_push($array, $objeto);
		}
		else
		{
			foreach ($query as $usuario) 
			{
				if ($usuario['usuario'] == $usuarioRegistro || $usuario['mail'] == $mailRegistro) 
				{
					$usuarioRepetido = true;
					$objeto = array("respuesta" => "nombre de usuario o mail ya en uso");
					array_push($array, $objeto);
					break;
				}
			}

			if($usuarioRepetido == false)
			{
				$objeto = array("respuesta" => "correcto");
				array_push($array, $objeto);
				$query = $BD->prepare("insert into usuarios(nombre, apellidos, edad, mail, usuario, contrasenia, rol) values('$nombreRegistro', '$apellidosRegistro', '$edadRegistro', '$mailRegistro', '$usuarioRegistro', '$contraseniaRegistro_1', '1')");
				$query->execute();
			}
		}
	}

	$json = json_encode($array);	
	echo $json;
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}
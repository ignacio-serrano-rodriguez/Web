<?php
class Usuarios
{
	// Obtener
	public static function get($usuario)
	{
		$array = [];

		if($usuario == null)
		{
			$BD = new PDO('mysql:dbname=proyecto_php;host=127.0.0.1:3306', 'root', '');
			$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, rol  FROM usuarios");
			$query->execute();

			foreach ($query as $usuario) 
			{
				$objeto = array
				(
					"id" => $usuario['id'],
					"rol" => $usuario['rol'],
					"usuario" => $usuario['usuario'],
					"mail" => $usuario['mail'],
					"nombre" => $usuario['nombre'],
					"apellidos" => $usuario['apellidos'],
					"edad" => $usuario['edad'],
				);
				array_push($array, $objeto);
			}

			return ($array);
		}
		else
		{
			$BD = new PDO('mysql:dbname=proyecto_php;host=127.0.0.1:3306', 'root', '');
			$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, rol  FROM usuarios WHERE usuario = :usuarioIntroducido");
			$query->execute(array('usuarioIntroducido' => $usuario));

			foreach ($query as $usuario) 
			{
				$objeto = array
				(
					"id" => $usuario['id'],
					"rol" => $usuario['rol'],
					"usuario" => $usuario['usuario'],
					"mail" => $usuario['mail'],
					"nombre" => $usuario['nombre'],
					"apellidos" => $usuario['apellidos'],
					"edad" => $usuario['edad'],
				);
				array_push($array, $objeto);
			}

			return ($array);

		}
	}

	// Crear
	public static function post($informacion)
	{
		$array = [];

		try
		{
			$BD = new PDO('mysql:dbname=proyecto_php;host=127.0.0.1:3306', 'root', '');

			$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, rol  FROM usuarios");
			$query->execute();

			foreach ($query as $usuario) 
			{
				if ($usuario['usuario'] == $informacion->usuario || $usuario['mail'] == $informacion->mail) 
				{
					return ("usuario o mail ya en uso.");
				}
			}

			$query = $BD->prepare("insert into usuarios(nombre, apellidos, edad, mail, usuario, contrasenia, rol) values(:nombreRegistro, :apellidosRegistro, :edadRegistro, :mailRegistro, :usuarioRegistro, :contraseniaRegistro, :rolRegistro)");
			$query->execute(array(':nombreRegistro' => $informacion->nombre, ':apellidosRegistro' => $informacion->apellidos, ':edadRegistro' => $informacion->edad, ':mailRegistro' => $informacion->mail, ':usuarioRegistro' => $informacion->usuario, ':contraseniaRegistro' => $informacion->contrasenia, ':rolRegistro' => $informacion->rol));
			
			$query = $BD->prepare("SELECT id, nombre, apellidos, edad, mail, usuario, rol  FROM usuarios WHERE usuario = :usuarioIntroducido");
			$query->execute(array('usuarioIntroducido' => $informacion->usuario));
			
			foreach ($query as $usuario) 
			{
				$objeto = array
				(
					"id" => $usuario['id'],
					"rol" => $usuario['rol'],
					"usuario" => $usuario['usuario'],
					"mail" => $usuario['mail'],
					"nombre" => $usuario['nombre'],
					"apellidos" => $usuario['apellidos'],
					"edad" => $usuario['edad'],
				);
				array_push($array, $objeto);
			}

			return ($array);
		}
		catch(PDOException $e)
		{
			if($e->getCode() == "23000")
			{
				return ("falta informacion para crear al usuario.");
			}
			else
			{
				return("situacion inesperada.");
			}
			
		}
	}

	// Eliminar
	public static function delete($usuario)
	{
		try
		{
			$BD = new PDO('mysql:dbname=proyecto_php;host=127.0.0.1:3306', 'root', '');
			$query = $BD->prepare("DELETE FROM usuarios WHERE usuario = :usuarioIntroducido");
			$query->execute(array('usuarioIntroducido' => $usuario));
			return($query->rowCount());
		}
		catch(PDOException $e)
		{
			return ($e->getMessage());
		}
	}

	// Actualizar
	public static function put($usuario)
	{
		echo "put (actualizar)<br/>";
	}
}
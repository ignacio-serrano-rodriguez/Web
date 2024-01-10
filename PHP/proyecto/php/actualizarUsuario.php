<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$nombreActualizacion = $_POST["nombreActualizacion"];
$apellidosActualizacion = $_POST["apellidosActualizacion"];
$edadActualizacion = $_POST["edadActualizacion"];
$mailActualizacion = $_POST["mailActualizacion"];
$usuarioActualizacion = $_POST["usuarioActualizacion"];
$contraseniaActualizacion_1 = $_POST["contraseniaActualizacion_1"];
$contraseniaActualizacion_2 = $_POST["contraseniaActualizacion_2"];

try
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$informacionExistente = false;
	$mensajeConsola = "";
	$usuarioActualizado = false;

	$query = $empresaBD->query("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");

	foreach ($query as $usuarioQuery) 
	{
		if($usuarioQuery['id'] != $idLogin)
		{
			if($usuarioQuery['usuario'] == $usuarioActualizacion || $usuarioQuery['mail'] == $mailActualizacion)
			{

				if($usuarioQuery['usuario'] == $usuarioActualizacion)
					$mensajeConsola = "usuario ya existente";
				else
					$mensajeConsola = "correo ya existente";

				$informacionExistente = true;
				break;
			}
		}
	}

	if($informacionExistente == false)
	{
		if($nombreActualizacion == "")
		{
			$mensajeConsola = "nombre no válido";
		}
		else if($apellidosActualizacion == "")
		{
			$mensajeConsola = "apellidos no válidos";
		}
		else if($mailActualizacion == "")
		{
			$mensajeConsola = "correo no válido";
		}
		else if($usuarioActualizacion == "")
		{
			$mensajeConsola = "usuario no válido";
		}
		else if($contraseniaActualizacion_1 == "")
		{
			$mensajeConsola = "contraseña no válida";
		}
		else if($contraseniaActualizacion_1 != $contraseniaActualizacion_2)
		{
			$mensajeConsola = "las contraseñas no coinciden";
		}
		else if(filter_var($edadActualizacion, FILTER_VALIDATE_INT) === false)
		{
			$mensajeConsola = "edad introducida no válida";
		}
		else if($edadActualizacion < 18)
		{
			$mensajeConsola = "has de ser mayor de edad";
		}
		else if($edadActualizacion > 120)
		{
			$mensajeConsola = "edad introducida incorrecta";
		}
		else
		{
			$empresaBD->query("UPDATE usuarios SET nombre='$nombreActualizacion' WHERE id=$idLogin");
			$empresaBD->query("UPDATE usuarios SET apellidos='$apellidosActualizacion' WHERE id=$idLogin");
			$empresaBD->query("UPDATE usuarios SET edad='$edadActualizacion' WHERE id=$idLogin");
			$empresaBD->query("UPDATE usuarios SET mail='$mailActualizacion' WHERE id=$idLogin");
			$empresaBD->query("UPDATE usuarios SET usuario='$usuarioActualizacion' WHERE id=$idLogin");
			$empresaBD->query("UPDATE usuarios SET contrasenia='$contraseniaActualizacion_1' WHERE id=$idLogin");
			
			$usuarioActualizado = true;
			$mensajeConsola = "usuario actualizado. Inicie sesión";

			echo 
			"
				<form id=\"formularioConsola\" action=\"../html/inicio.php\" method=post>
					<input type=\"hidden\" value=true name=\"consolaActivada\"/>
					<input type=\"hidden\" value=\"$mensajeConsola\" name=\"mensajeConsola\"/>
				</form>

				<script type=\"text/javascript\">
					window.onload = function () 
					{
						document.getElementById(\"formularioConsola\").submit();
					}
				</script>
			";
		}
	}

	if ($usuarioActualizado == false)
	{
		echo 
		"
			<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"$mensajeConsola\" name=\"mensajeConsola\"/>

				<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
				<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
				<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

				<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

			</form>

			<script type=\"text/javascript\">
				window.onload = function () 
				{
					document.getElementById(\"formularioConsola\").submit();
				}
			</script>
		";
	}
}

catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
<?php

$nombreRegistro = $_POST["nombreRegistro"];
$apellidosRegistro = $_POST["apellidosRegistro"];
$edadRegistro = $_POST["edadRegistro"];
$mailRegistro = $_POST["mailRegistro"];
$usuarioRegistro = $_POST["usuarioRegistro"];
$contraseniaRegistro_1 = $_POST["contraseniaRegistro_1"];
$contraseniaRegistro_2 = $_POST["contraseniaRegistro_2"];

try
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$informacionExistente = false;
	$mensajeConsola = "";

	$query = $empresaBD->query("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");

	foreach ($query as $usuarioQuery) 
	{
		if($usuarioQuery['usuario'] == $usuarioRegistro || $usuarioQuery['mail'] == $mailRegistro)
		{

			if($usuarioQuery['usuario'] == $usuarioRegistro)
				$mensajeConsola = "usuario ya existente";
			else
				$mensajeConsola = "correo ya existente";

			$informacionExistente = true;
			break;
		}
	}

	if($informacionExistente == false)
	{
		if($nombreRegistro == "")
		{
			$mensajeConsola = "nombre no válido";
		}
		else if($apellidosRegistro == "")
		{
			$mensajeConsola = "apellidos no válidos";
		}
		else if($mailRegistro == "")
		{
			$mensajeConsola = "correo no válido";
		}
		else if($usuarioRegistro == "")
		{
			$mensajeConsola = "usuario no válido";
		}
		else if($contraseniaRegistro_1 == "")
		{
			$mensajeConsola = "contraseña no válida";
		}
		else if($contraseniaRegistro_1 != $contraseniaRegistro_2)
		{
			$mensajeConsola = "las contraseñas no coinciden";
		}
		else if(filter_var($edadRegistro, FILTER_VALIDATE_INT) === false)
		{
			$mensajeConsola = "edad introducida no válida";
		}
		else if($edadRegistro < 18)
		{
			$mensajeConsola = "has de ser mayor de edad";
		}
		else if($edadRegistro > 120)
		{
			$mensajeConsola = "edad introducida incorrecta";
		}
		else
		{
			$query = $empresaBD->query("insert into usuarios(nombre, apellidos, edad, mail, usuario, contrasenia, rol) values('$nombreRegistro', '$apellidosRegistro', '$edadRegistro', '$mailRegistro', '$usuarioRegistro', '$contraseniaRegistro_1', '1')");
			$mensajeConsola = "usuario creado. Inicie sesión";
		}
	}

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

catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
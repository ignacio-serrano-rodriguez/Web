<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$nombreLista = $_POST["nombreLista"];

try 
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$listaRepetida = false;

	$query = $empresaBD->query("SELECT id, nombre, id_usuario FROM listas");

	foreach ($query as $listaQuery) 
	{
		if($listaQuery['id_usuario'] == $idLogin && $listaQuery['nombre'] == $nombreLista)
		{
			$listaRepetida = true;
			break;
		}
	}

	if($listaRepetida == false)
	{
		$query = $empresaBD->query("insert into listas(nombre, id_usuario) values('$nombreLista', '$idLogin')");
		
		echo 
		"
			<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"lista $nombreLista creada\" name=\"mensajeConsola\"/>

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
	else
	{
		echo 
		"
			<form id=\"formularioConsola\" action=\"inicioUsuario.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"nombre de lista ya en uso\" name=\"mensajeConsola\"/>

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
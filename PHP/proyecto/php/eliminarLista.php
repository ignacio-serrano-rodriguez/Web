<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$idLista = $_POST["idLista"] ?? null;
$nombreLista = $_POST["nombreLista"] ?? null;

try 
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$empresaBD->query("delete from listas where id = '$idLista'");	

	echo 
	"
		<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

			<input type=\"hidden\" value=true name=\"consolaActivada\"/>
			<input type=\"hidden\" value=\"lista $nombreLista eliminada\" name=\"mensajeConsola\"/>

			<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
			<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
			<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

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
<?php

$usuario = $_POST["usuario"];

try 
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$empresaBD->query("delete from usuarios where usuario = '$usuario'");	

	echo 
	"
		<form id=\"formularioConsola\" action=\"../html/inicio.php\" method=post>
			<input type=\"hidden\" value=true name=\"consolaActivada\"/>
			<input type=\"hidden\" value=\"su usuario ha sido eliminado\" name=\"mensajeConsola\"/>
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
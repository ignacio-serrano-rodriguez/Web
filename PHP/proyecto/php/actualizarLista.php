<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$idLista = $_POST["idLista"] ?? null;
$nombreLista = $_POST["nombreLista"] ?? null;

$nombreListaActualizado = $_POST["nombreListaActualizado"] ?? null;

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
		if($listaQuery['id_usuario'] == $idLogin && $listaQuery['nombre'] == $nombreListaActualizado)
		{
			$listaRepetida = true;
			break;
		}
	}

	if($listaRepetida == false)
	{
		$empresaBD->query("UPDATE listas SET nombre='$nombreListaActualizado' WHERE id=$idLista");
		
		echo 
		"
			<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"nombre de lista modificado\" name=\"mensajeConsola\"/>

				<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
				<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
				<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
				<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

				<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
				<input type=\"hidden\" value=\"$nombreListaActualizado\" name=\"nombreLista\"/>

				<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

				<script type=\"text/javascript\">
					window.onload = function () 
					{
						document.getElementById(\"formularioConsola\").submit();
					}
				</script>

			</form>

			
		";

	}
	else
	{

		echo 
		"
			<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"nombre de lista ya en uso\" name=\"mensajeConsola\"/>

				<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
				<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
				<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
				<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

				<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
				<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>
				<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreListaActualizado\"/>

				<script type=\"text/javascript\">
					window.onload = function () 
					{
						document.getElementById(\"formularioConsola\").submit();
					}
				</script>

			</form>

			
		";

	}
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
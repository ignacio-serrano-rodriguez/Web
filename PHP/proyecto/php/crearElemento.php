<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$idLista = $_POST["idLista"] ?? null;
$nombreLista = $_POST["nombreLista"] ?? null;

$nombreElemento = $_POST["nombreElemento"];
$notaElemento = $_POST["notaElemento"];
$comentarioElemento = $_POST["comentarioElemento"];

try 
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$listaRepetida = false;

	$query = $empresaBD->query("SELECT id, nombre, id_lista, nota, comentario FROM elementos");

	foreach ($query as $elementoQuery) 
	{
		if($elementoQuery['id_lista'] == $idLista && $elementoQuery['nombre'] == $nombreElemento)
		{
			$elementoRepetido = true;
			break;
		}
	}

	if($elementoRepetido == false)
	{
		if($notaElemento < 0 || $notaElemento > 10)
		{
			echo 
			"
				<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

					<input type=\"hidden\" value=true name=\"consolaActivada\"/>
					<input type=\"hidden\" value=\"la nota tiene que estar en 0 y 10\" name=\"mensajeConsola\"/>

					<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
					<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
					<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

					<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
					<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

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
			$query = $empresaBD->query("insert into elementos(nombre, id_lista, nota, comentario) values('$nombreElemento', '$idLista', '$notaElemento','$comentarioElemento')");
			
			echo 
			"
				<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

					<input type=\"hidden\" value=true name=\"consolaActivada\"/>
					<input type=\"hidden\" value=\"$nombreElemento añadido\" name=\"mensajeConsola\"/>

					<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
					<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
					<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

					<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
					<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

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
	else
	{
		echo 
		"
			<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"$nombreElemento ya existe\" name=\"mensajeConsola\"/>

				<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
				<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
				<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

				<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
				<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

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
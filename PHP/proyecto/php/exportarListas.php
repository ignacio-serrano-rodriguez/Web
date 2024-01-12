<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$nombreFichero = "../exportaciones/listasExportadas.txt";
unlink($nombreFichero);
$fichero = fopen($nombreFichero, "w");
$contenido = "";

try
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$BD = new PDO($conexion, $usuarioBD, $claveBD);

	$query_1 = $BD->query("SELECT id, nombre, id_usuario FROM listas");

	foreach ($query_1 as $listaQuery) 
	{
		if($listaQuery['id_usuario'] == $idLogin)
		{
			$idLista = $listaQuery['id'];
			$nombreLista = $listaQuery['nombre'];

			//echo "[$nombreLista]<br/>";
			$contenido = $contenido . "\n[$nombreLista]\n";

			$query_2 = $BD->query("SELECT id, id_lista, nombre, nota, comentario FROM elementos");

			foreach ($query_2 as $elementoQuery) 
			{
				if($elementoQuery['id_lista'] == $idLista)
				{
					$nombreElemento = $elementoQuery['nombre'];
					$notaElemento = $elementoQuery['nota'];
					$comentarioElemento = $elementoQuery['comentario'];
					$idElemento = $elementoQuery['id'];

					/*
					echo
					"
						<br/>&emsp;- $nombreElemento<br/>
						&emsp;&emsp;nota: $notaElemento/10<br/> 
						&emsp;&emsp;comentario: $comentarioElemento<br/>
					";
					*/

					$contenido = $contenido . "\n" . "    " . "- $nombreElemento\n";
					$contenido = $contenido . "    " . "    " . "nota: $notaElemento/10\n";
					$contenido = $contenido . "    " . "    " . "comentario: $comentarioElemento\n";
				}
			}

			echo "<br/>";
		}
	}
}
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

fwrite($fichero, $contenido);
fclose($fichero);

$rutaFichero = realpath($nombreFichero);


echo 
"
	<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

		<input type=\"hidden\" value=true name=\"consolaActivada\"/>
		<input type=\"hidden\" value=\"listas exportadas en el fichero ($rutaFichero)\" name=\"mensajeConsola\"/>

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


?>
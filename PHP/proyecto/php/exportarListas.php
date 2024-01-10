<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$nombreFichero = "../exportaciones/listasExportadas.txt";
unlink($nombreFichero);
$fichero = fopen($nombreFichero, "w");
$contenido = "";





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
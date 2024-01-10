<?php
echo "fichero de exportar";

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$fichero = fopen("../exportaciones/fichero", "w");
fwrite($fichero, "hola muxndo");
fclose($fichero);
/*
echo 
"
	<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

		<input type=\"hidden\" value=true name=\"consolaActivada\"/>
		<input type=\"hidden\" value=\"listas exportadas\" name=\"mensajeConsola\"/>

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
*/
?>
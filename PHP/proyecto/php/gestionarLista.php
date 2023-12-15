<?php

$consolaActivada = $_POST["consolaActivada"] ?? null;
$mensajeConsola = $_POST["mensajeConsola"] ?? null;

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

	echo "<title>$usuarioLogin - $nombreLista</title>";

	if ($consolaActivada == "true") 
	{
		echo $mensajeConsola;
		$consolaActivada = false;
		$mensajeConsola = "";
	}	

	echo "<h1>$usuarioLogin</h1>";
	echo 
	"
		<form id=\"formularioConsola\" action=\"actualizarLista.php\" method=post>
		
			<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
			<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
			<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
			<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

			<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
			<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

			nombre de la lista: <input type=\"text\" value=\"$nombreLista\" name=\"nombreListaActualizado\"/>

			<input type=\"submit\" value=\"actualizar nombre\"><br/>

		</form>
	";

	echo 
	"
		<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

			<input type=\"hidden\" value=false name=\"consolaActivada\"/>
			<input type=\"hidden\" value=\"\" name=\"mensajeConsola\"/>

			<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
			<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
			<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
			<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

			<input type=\"submit\" value=\"Volver al perfil\"><br/>

		</form>
		<hr/>
	";

	echo
	"
		<h2>Elementos de ($nombreLista)</h2>
	";

	echo 
	"	
		<form id=\"formularioConsola\" action=\"crearElemento.php\" method=post>

			<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
			<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
			<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

			<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
			<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

			nombre: <input type=\"text\" value=\"\" name=\"nombreElemento\"/>
			nota (0/10): <input type=\"text\" value=\"\" name=\"notaElemento\"/>
			comentario: <input type=\"text\" value=\"\" name=\"comentarioElemento\"/>

			<input type=\"submit\" value=\"Añadir elemento\">
			
		</form>
		<br/><br/>
	";

	$query = $empresaBD->query("SELECT id, id_lista, nombre, nota, comentario FROM elementos");

	foreach ($query as $elementoQuery) 
	{
		if($elementoQuery['id_lista'] == $idLista)
		{
			$nombreElemento = $elementoQuery['nombre'];
			$notaElemento = $elementoQuery['nota'];
			$comentarioElemento = $elementoQuery['comentario'];
			$idElemento = $elementoQuery['id'];

			echo 
			"	<form form id=\"formularioConsola_1\" action=\"actualizarElemento.php\" method=post>

					nombre: <input readonly type=\"text\" value=\"$nombreElemento\" name=\"nombreElemento\"/>
					nota (0/10): <input type=\"text\" value=\"$notaElemento\" name=\"notaElemento\"/>
					comentario: <input type=\"text\" value=\"$comentarioElemento\" name=\"comentarioElemento\"/>			

					<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
					<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
					<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
					<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>
		
					<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
					<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

					<input type=\"hidden\" value=\"$idElemento\" name=\"idElemento\"/>

					<br/><br/>

					<input type=\"submit\" value=\"Actualizar elemento\">

				</form>

				<form form id=\"formularioConsola_2\" action=\"eliminarElemento.php\" method=post>

					<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
					<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
					<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
					<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>
		
					<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
					<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

					<input type=\"hidden\" value=\"$idElemento\" name=\"idElemento\"/>
					<input type=\"hidden\" value=\"$nombreElemento\" name=\"nombreElemento\"/>

					<input type=\"submit\" value=\"Eliminar elemento\">

				</form> <br/>
			";
		}
	}

	echo 
	"
		<hr/>
		<br/>
		<form id=\"formularioConsola\" action=\"eliminarLista.php\" method=post>

			<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
			<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
			<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
			<input type=\"hidden\" value=true name=\"usuarioEnBaseDatos\"/>

			<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
			<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

			<input type=\"submit\" value=\"Eliminar lista\"><br/>

		</form>
	";
} 
catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
}

?>
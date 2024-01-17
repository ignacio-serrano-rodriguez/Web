<?php 
	$consolaActivada = $_POST["consolaActivada"] ?? null;
	$mensajeConsola = $_POST["mensajeConsola"] ?? null;
?>

<!DOCTYPE html>
<html lang="es">

	<head>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<meta name="description" content="sitio web de listas"/>
		<meta name="keywords" content="listas,gustos,series,peliculas,videojuegos,libros,manga,anime"/>
		<meta name="author" content="Ignacio Serrano Rodríguez"/>

		<link href="../css/style.css" rel="stylesheet" type="text/css"/>

		<title> Listas de gustos </title>

	</head>

	<body>

		<?php

			if ($consolaActivada == "true") 
			{
				echo $mensajeConsola;
				$consolaActivada = false;
				$mensajeConsola = "";
			}				
		?>

		<h1> Listas de gustos </h1>

		<h2> Inicio de sesión </h2>

		<form action="../php/gestionarUsuario.php" method=post>

			<label for=usuarioLogin> usuario </label>
			<input type=text id=usuarioLogin name=usuarioLogin> <br/>
	
			<label for="contraseniaLogin"> contraseña </label>
			<input type="password" id="contraseniaLogin" name="contraseniaLogin"> <br/><br/>
	
			<input type="submit" value="iniciar">
	
		</form>

		<h2> Registro de usuario </h2>

		<form action="../php/crearUsuario.php" method="post">

			<label for="nombreRegistro"> nombre </label>
			<input type="text" id="nombreRegistro" name="nombreRegistro"> <br/>

			<label for="apellidosRegistro"> apellidos </label>
			<input type="text" id="apellidosRegistro" name=apellidosRegistro> <br/>

			<label for="edadRegistro"> edad </label>
			<input type="text" id="edadRegistro" name="edadRegistro"> <br/>

			<label for="mailRegistro"> correo electrónico </label>
			<input type="text" id="mailRegistro" name="mailRegistro"> <br/>

			<label for="usuarioRegistro"> usuario </label>
			<input type="text" id="usuarioRegistro" name="usuarioRegistro"> <br/>
	
			<label for="contraseniaRegistro_1"> contraseña </label>
			<input type="password" id="contraseniaRegistro_1" name="contraseniaRegistro_1"> <br/>

			<label for="contraseniaRegistro_2"> repite la contraseña </label>
			<input type="password" id="contraseniaRegistro_2" name="contraseniaRegistro_2"> <br/><br/>
	
			<input type="submit" value="registrarse">
	
		</form>

	</body>

</html>
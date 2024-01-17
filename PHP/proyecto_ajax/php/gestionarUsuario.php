<?php

$consolaActivada = $_POST["consolaActivada"] ?? null;
$mensajeConsola = $_POST["mensajeConsola"] ?? null;

$usuarioEnBaseDatos = $_POST["usuarioEnBaseDatos"] ?? null;

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

try
{
	$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);

	$query = $empresaBD->query("SELECT id, nombre, apellidos, edad, mail, usuario, contrasenia, rol  FROM usuarios");

	foreach ($query as $usuarioQuery) 
	{
		if($usuarioQuery['usuario'] == $usuarioLogin && $usuarioQuery['contrasenia'] == $contraseniaLogin)
		{
			$idLogin= $usuarioQuery['id'];
			$mailLogin = $usuarioQuery['mail'];
			$nombreLogin = $usuarioQuery['nombre'];
			$apellidosLogin = $usuarioQuery['apellidos'];
			$edadLogin = $usuarioQuery['edad'];
			$rolLogin = $usuarioQuery['rol'];
			$contraseniaLogin = $usuarioQuery['contrasenia'];

			if ($consolaActivada == "true") 
			{
				echo $mensajeConsola;
				$consolaActivada = false;
				$mensajeConsola = "";
			}	

			echo "<title>Lista de gustos - $usuarioLogin</title>";

			echo "<h1>$usuarioLogin</h1>";

			echo "<h2>Tú información</h2>";
			echo 
			"
				<form id=\"formularioConsola\" action=\"actualizarUsuario.php\" method=post>
				
					<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
					<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
					<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

					usuario: <input type=\"text\" value=\"$usuarioLogin\"  name=\"usuarioActualizacion\"/><br/>
					mail: <input type=\"text\" value=\"$mailLogin\"  name=\"mailActualizacion\"/> <br/>
					nombre: <input type=\"text\" value=\"$nombreLogin\" name=\"nombreActualizacion\"/> <br/>
					apellidos: <input type=\"text\" value=\"$apellidosLogin\" name=\"apellidosActualizacion\"/> <br/>
					edad: <input type=\"text\" value=\"$edadLogin\" name=\"edadActualizacion\"/> <br/>
					contraseña: <input type=\"password\" value=\"\" name=\"contraseniaActualizacion_1\"/> <br/>
					repite la contraseña: <input type=\"password\" value=\"\" name=\"contraseniaActualizacion_2\"/> <br/><br/>

					<input type=\"submit\" value=\"Actualizar información\"><br/>

				</form>
			";

			echo 
				"
					<form id=\"formularioConsola\" action=\"../html/inicio.php\" method=post>
						<input type=\"hidden\" value=true name=\"consolaActivada\"/>
						<input type=\"hidden\" value=\"sesión cerrada\" name=\"mensajeConsola\"/>
						<input type=\"submit\" value=\"Cerrar sesión\">
					</form>
				";
			
			echo "<hr/>";

			if($rolLogin == 1)
			{
				echo "<h2> Tus listas </h2>";

				echo 
				"
					<form id=\"formularioConsola\" action=\"exportarListas.php\" method=post>
						<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
						<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
						<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>
						<input type=\"submit\" value=\"Exportar listas\">
					</form>
				";

				echo 
				"	
					<form id=\"formularioConsola\" action=\"crearLista.php\" method=post>

						<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
						<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
						<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

						nombre de la lista: <input type=\"text\" value=\"\" name=\"nombreLista\"/>
						<input type=\"submit\" value=\"Crear\">
						
					</form>
				";

				$query = $empresaBD->query("SELECT id, nombre, id_usuario FROM listas");

				foreach ($query as $listaQuery) 
				{
					if($listaQuery['id_usuario'] == $idLogin)
					{
						$idLista = $listaQuery['id'];
						$nombreLista = $listaQuery['nombre'];

						echo 
						"	
							<form id=\"formularioConsola\" action=\"gestionarLista.php\" method=post>

								<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
								<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
								<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

								<input type=\"hidden\" value=\"$idLista\" name=\"idLista\"/>
								<input type=\"hidden\" value=\"$nombreLista\" name=\"nombreLista\"/>

								<input type=\"submit\" value=\"$nombreLista\">
								
							</form>
						";
					}
				}

				echo "<hr/>";
			}

			if($rolLogin == 0)
			{
				echo "<h2>Eliminar usuario</h2>";

				foreach ($query as $usuarioQuery) 
				{
					echo $usuarioQuery['usuario'] . "<br/>";
				}

				echo 
				"	<br/>
					<form id=\"formularioConsola\" action=\"eliminarUsuario.php\" method=post>

						<input type=\"hidden\" value=\"$idLogin\" name=\"idLogin\"/>
						<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuarioLogin\"/>
						<input type=\"hidden\" value=\"$contraseniaLogin\" name=\"contraseniaLogin\"/>

						<input type=\"text\" value=\"\" name=\"usuario\"/>
						<input type=\"submit\" value=\"Eliminar este usuario\">
						
					</form>
				";
			}
			else
			{
				echo 
				"
					<form id=\"formularioConsola\" action=\"eliminarTuUsuario.php\" method=post>
						<input type=\"hidden\" value=\"$usuarioLogin\" name=\"usuario\"/><br/>
						<input type=\"submit\" value=\"Eliminar tu usuario\">
					</form>
				";
			}
			
			$usuarioEnBaseDatos = true;
			break;
		}
	}

	if($usuarioEnBaseDatos != true)
	{
		echo 
		"
			<form id=\"formularioConsola\" action=\"../html/inicio.php\" method=post>
				<input type=\"hidden\" value=true name=\"consolaActivada\"/>
				<input type=\"hidden\" value=\"inicio de sesión no válido\" name=\"mensajeConsola\"/>
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

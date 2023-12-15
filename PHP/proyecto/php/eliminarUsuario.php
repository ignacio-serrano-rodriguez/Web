<?php

$idLogin = $_POST["idLogin"] ?? null;
$usuarioLogin = $_POST["usuarioLogin"] ?? null;
$contraseniaLogin = $_POST["contraseniaLogin"] ?? null;

$usuario = $_POST["usuario"];

if($usuario != "admin")
{
	try 
	{
		$conexion = 'mysql:dbname=proyecto_php;host=127.0.0.1:3306';
		$usuarioBD = 'root';
		$claveBD = '';
		$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
		$usuarioEncontrado = false;

		$query = $empresaBD->query("SELECT usuario FROM usuarios");

		foreach ($query as $usuarioQuery) 
		{
			if($usuarioQuery['usuario'] == $usuario)
			{
				$usuarioEncontrado = true;
				break;
			}
		}

		if($usuarioEncontrado == true)
		{

			try 
			{
				$empresaBD->beginTransaction();	
				$empresaBD->query("delete from usuarios where usuario = '$usuario'");		
				$empresaBD->commit();
			} 
			catch (PDOException $e) 
			{
				echo $e->getMessage();
				$empresaBD->rollback();
			} 

			echo 
			"
				<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

					<input type=\"hidden\" value=true name=\"consolaActivada\"/>
					<input type=\"hidden\" value=\"$usuario eliminado\" name=\"mensajeConsola\"/>
		
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
		}
		else
		{
			echo 
			"
				<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

					<input type=\"hidden\" value=true name=\"consolaActivada\"/>
					<input type=\"hidden\" value=\"usuario inexistente\" name=\"mensajeConsola\"/>

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
		}
	} 
	catch (PDOException $e) 
	{
		echo 'Error con la base de datos: ' . $e->getMessage();
	} 
}
else
{
	echo 
	"
		<form id=\"formularioConsola\" action=\"gestionarUsuario.php\" method=post>

			<input type=\"hidden\" value=true name=\"consolaActivada\"/>
			<input type=\"hidden\" value=\"no puedes borrar al admin\" name=\"mensajeConsola\"/>

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
}

?>
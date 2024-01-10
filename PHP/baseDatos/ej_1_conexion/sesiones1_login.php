<?php

/*formulario de login habitual
si va bien abre sesión, guarda el nombre de usuario y redirige a principal.php 
si va mal, mensaje de error */

function comprobar_usuario($nombre, $clave)
{
	try
	{
		$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
		$usuarioBD = 'root';
		$claveBD = '';
		$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);

		$query = $empresaBD->query("SELECT nombre, clave, rol FROM usuarios");

		foreach ($query as $usuarioQuery) 
		{
			if($usuarioQuery['nombre'] == $nombre && $usuarioQuery['clave'] == $clave)
			{
				$usu['nombre'] = "usuario";
				$usu['rol'] = 0;
				return $usu;
			}
		}

		return false;
	}

	catch (PDOException $e) 
	{
		echo 'Error con la base de datos: ' . $e->getMessage();
	} 
	
}

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{  	
	$usu = comprobar_usuario($_POST['usuario'], $_POST['clave']);
	if($usu==false)
	{
		$err = true;
		$usuario = $_POST['usuario'];
	}else
	{	
		session_start();
		$_SESSION['usuario'] = $_POST['usuario'];
		header("Location: sesiones1_principal.php");	
	}
}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Formulario de login</title>		
		<meta charset = "UTF-8">
	</head>
	<body>	

		<?php 
			if(isset($_GET["redirigido"]))
			{
				echo "<p>Haga login para continuar</p>";
			}
		?>

		<?php 
			if(isset($err) and $err == true)
			{
				echo "<p> revise usuario y contraseña</p>";
			}
		?>

		<form action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method = "POST">
			Usuario
			<input value = "<?php if(isset($usuario))echo $usuario;?>"
			id = "usuario" name = "usuario" type = "text">							
			Clave			
			<input id = "clave" name = "clave" type = "password">						
			<input type = "submit">
		</form>

	</body>

</html>
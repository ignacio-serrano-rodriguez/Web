<?php

$codigo = $_POST["codigo"];

try
{
	$conexion = 'mysql:dbname=empresa;host=127.0.0.1';
	$usuarioBD = 'root';
	$claveBD = '';
	$empresaBD = new PDO($conexion, $usuarioBD, $claveBD);
	$usuarioQueryEncontrado = false;

	$query = $empresaBD->query("SELECT codigo, nombre, clave, rol FROM usuarios");

	foreach ($query as $usuarioQuery) 
	{
		if($usuarioQuery['codigo'] == $codigo)
		{
			echo " Codigo: " . $usuarioQuery['codigo'] . "<br/>";
			echo " Nombre: " . $usuarioQuery['nombre'] . "<br/>";
			echo " Clave: " . $usuarioQuery['clave'] . "<br/>";
			echo " Rol: " . $usuarioQuery['rol'] . "<br/>";
			$usuarioQueryEncontrado = true;
			break;
		}
	}

	if($usuarioQueryEncontrado == false)
	{
		echo "No existe ningún usuario con tal código";
	}
}

catch (PDOException $e) 
{
	echo 'Error con la base de datos: ' . $e->getMessage();
} 

?>
<?php
/*
Ejercicio 2: Escribe un formulario para insertar un nuevo equipo. 
Si hay un error al insertar, mostrar un mensaje al usuario.
*/

require_once "bootstrap.php";
require_once './src/Equipo.php';

$nombreEquipo = $_POST["nombreEquipo"] ?? null;
$fundacionEquipo = $_POST["fundacionEquipo"] ?? null;
$sociosEquipo = $_POST["sociosEquipo"] ?? null;
$ciudadEquipo = $_POST["ciudadEquipo"] ?? null;
$datosValidos = false;

if($nombreEquipo != null && $fundacionEquipo != null && $sociosEquipo != null && $ciudadEquipo != null)
{
	$datosValidos = true;
	$equipo = new Equipo();
	$equipo->setNombre($nombreEquipo);
	$equipo->setFundacion($fundacionEquipo);
	$equipo->setSocios($sociosEquipo);
	$equipo->setCiudad($ciudadEquipo);
	$entityManager->persist($equipo);
	$entityManager->flush();
}

echo
"
	<form action='ej2.php' method=post>
		<p id='consola'></p>
		<input id='nombreEquipo' name='nombreEquipo' type='text' placeholder='Nombre'/><br/>
		<input id='fundacionEquipo' name='fundacionEquipo' type='text' placeholder='Año de fundación'/><br/>
		<input id='sociosEquipo' name='sociosEquipo' type='text' placeholder='Número de socios'/><br/>
		<input id='ciudadEquipo' name='ciudadEquipo' type='text' placeholder='Ciudad'/><br/>
		<input type='submit' value='Crear equipo'/>
	</form>
";

if($datosValidos == false)
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`Introduce datos válidos para crear un equipo.`;
		</script>
	";
}
else
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`Equipo creado con los datos introducidos.`;
		</script>
	";
}


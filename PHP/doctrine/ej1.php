<?php
/*
Ejercicio 1: Crea una aplicación que reciba el código de un equipo y muestre todos sus datos. 
Si el equipo no existe mostrar un mensaje apropiado para el usuario.
*/
require_once "bootstrap.php";
require_once './src/Equipo.php';

$idEquipo = $_POST["idEquipo"] ?? null;
$existenciaEquipo = true;

if($idEquipo == null)
	$existenciaEquipo = false;
else
	$equipo = $entityManager->find("Equipo",$idEquipo);
	if($equipo == null)
		$existenciaEquipo = false;
	else
	{
		$nombreEquipo = $equipo->getNombre();
		$fundacionEquipo = $equipo->getFundacion();
		$sociosEquipo = $equipo->getSocios();
		$ciudadEquipo = $equipo->getCiudad();
	}

echo
"
	<form action='ej1.php' method=post>
		<p id='consola'></p>
		<input id='idEquipo' name='idEquipo' type='text' placeholder='Introduce ID equipo'/>
		<input type='submit' value='Obtener su información'/>
	</form>
";

if($existenciaEquipo == false)
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`Introduce un ID de equipo válido.`;
		</script>
	";
}
else
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`	

				Nombre ($nombreEquipo)<br/>
				Fundación ($fundacionEquipo)<br/>
				Socios ($sociosEquipo)<br/>
				Ciudad ($ciudadEquipo)
			`;
		</script>
	";
}
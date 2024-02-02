<?php
/*
Ejercicio 3: Crea una pequeña aplicación que muestre los datos de todos los equipos ubicados en 
una ciudad (ingresada por el usuario).
*/

require_once "bootstrap.php";
require_once './src/Equipo.php';

$ciudadIntroducida = $_POST["ciudadIntroducida"] ?? null;

if($ciudadIntroducida != null)
	$equipos = $entityManager->getRepository('Equipo')->findBy(array('ciudad' => $ciudadIntroducida));	

echo
"
	<form action='ej3.php' method=post>
		<p id='consola'></p>
		<input id='ciudadIntroducida' name='ciudadIntroducida' value='' type='text' placeholder='Introduce una ciudad'/>
		<input type='submit' value='Obtener equipos'/>
	</form>
";

if($equipos == null)
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`Introduce un nombre de ciudad válido.`;
		</script>
	";
}
else
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`	
				Equipos de la ciudad de ($ciudadIntroducida)<br/><br/>
			`;
		</script>
		
	";

	foreach($equipos as $equipo)
	{
		$nombreEquipo = $equipo->getNombre();
		$fundacionEquipo = $equipo->getFundacion();
		$sociosEquipo = $equipo->getSocios();
		$ciudadEquipo = $equipo->getCiudad();

		echo 
		"
			<script>
				document.getElementById('consola').innerHTML+=`	
					Nombre ($nombreEquipo)<br/>
					Fundación ($fundacionEquipo)<br/>
					Socios ($sociosEquipo)<br/>
					Ciudad ($ciudadEquipo)<br/><br/>
				`;
			</script>
		";
	}
}
<?php
/*
Ejercicio 3: Crea una pequeña aplicación que muestre los datos de todos los equipos ubicados en 
una ciudad (ingresada por el usuario).

Ejercicio 4: Escribe un script que devuelva los nombres de los equipos con más de 10.000 socios. 
Intégralo con la aplicación anterior.
*/

require_once "bootstrap.php";
require_once './src/Equipo.php';

$ciudadIntroducida = $_POST["ciudadIntroducida"] ?? null;
$obtenerSocios = $_POST["obtenerSocios"] ?? null;

echo $obtenerSocios;


if($ciudadIntroducida != null)
	$equipos = $entityManager->getRepository('Equipo')->findBy(array('ciudad' => $ciudadIntroducida));	

echo
"
	<form action='ej3_4.php' method=post>
		<p id='consola'></p>
		<input id='obtenerSocios' name='obtenerSocios' type='hidden' value='false'/>
		<input id='ciudadIntroducida' name='ciudadIntroducida' value='' type='text' placeholder='Introduce una ciudad'/>
		<input type='submit' value='Obtener equipos'/>
	</form>
";

echo
"
	<form action='ej3_4.php' method=post>
		<input id='obtenerSocios' name='obtenerSocios' type='hidden' value='true'/>
		<input type='submit' value='Obtener equipos con más de 10K socios'/>
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
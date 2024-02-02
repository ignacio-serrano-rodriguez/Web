<?php
/*
Ejercicio 3: Crea una pequeña aplicación que muestre los datos de todos los equipos ubicados en 
una ciudad (ingresada por el usuario).

Ejercicio 4: Escribe un script que devuelva los nombres de los equipos con más de 10.000 socios. 
Intégralo con la aplicación anterior.

Ejercicio 5: Escribe un script con la consulta para que devuelva los nombres de los jugadores de los 
equipos de Madrid. Intégralo con la aplicación anterior.
*/

require_once "bootstrap.php";
require_once './src/Equipo.php';
require_once './src/EquipoBidireccional.php';
require_once './src/JugadorBidireccional.php';

$ciudadIntroducida = $_POST["ciudadIntroducida"] ?? null;
$opcion = $_POST["opcion"] ?? null;

if($ciudadIntroducida != null && $opcion == 0)

	$equipos = $entityManager->getRepository('Equipo')->findBy(array('ciudad' => $ciudadIntroducida));

else if($opcion == 1)
{
	$cantidadSocios = 10000;

	$queryBuilder = $entityManager->getRepository('Equipo')->createQueryBuilder('e');

	$query = $queryBuilder
		->where('e.socios > :cantidadSocios')
		->setParameter('cantidadSocios', $cantidadSocios)
		->getQuery();
	
	$equipos = $query->getResult();
}

else if($opcion == 2)
{
	$id = 2;
	$equipo = $entityManager->find("EquipoBidireccional", $id);

	if(!$equipo)
	{
		echo "Equipo no encontrado";
	}
	else
	{
		echo "Nombre del equipo: ". $equipo->getNombre()."<br>";
		$jugadores = $equipo->getJugadores();
		echo "Lista de jugadores"."<br>";

		foreach($jugadores as $jugador)
		{
			echo "Nombre: ". $jugador->getNombre()."<br>";
		}
	}
}

echo
"
	<form action='ej3_4_5.php' method=post>
		<p id='consola'></p>
		<input id='opcion' name='opcion' type='hidden' value='0'/>
		<input id='ciudadIntroducida' name='ciudadIntroducida' value='' type='text' placeholder='Introduce una ciudad'/>
		<input type='submit' value='Obtener equipos'/>
	</form>

	<form action='ej3_4_5.php' method=post>
		<input id='opcion' name='opcion' type='hidden' value='1'/>
		<input type='submit' value='Obtener equipos con más de 10K socios'/>
	</form>

	<form action='ej3_4_5.php' method=post>
		<input id='opcion' name='opcion' type='hidden' value='2'/>
		<input type='submit' value='Obtener jugadores de equipos de Madrid'/>
	</form>
";

if($opcion == 0)
{
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
}
else if($opcion == 1)
{
	echo 
	"
		<script>
			document.getElementById('consola').innerHTML=`	
				Equipos que tienen más de $cantidadSocios socios<br/><br/>
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
else if($opcion == 2)
{
	echo "opcion 2 resultado";
}
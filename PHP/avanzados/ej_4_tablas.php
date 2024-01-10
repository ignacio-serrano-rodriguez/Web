<?php
/*
Imprime en el navegador todas las tablas de multiplicar que contenga todos los números hasta el 12 incluido.
Para el formato de los datos en el navegador preséntalos en formato de tabla HTML con la etiqueta <table>, 
<td> y <tr> para crear una tabla HTML válida. 
*/

for ($i=1; $i <= 12; $i++) 
{ 
	// Inicio de tabla
	echo
		"<table border=\"1\">
		<tr>
			<th> $i </th>
		</tr>"
	;

	// Añadir elementos
	for ($j=1; $j <= 12; $j++) 
	{ 
		$operacion = $i * $j;

		echo 
			"<tr> 
				<td> $i x $j = $operacion</td> 
			</tr>"
		;
	}

	// Fin de tabla
	echo "</table>";
}

?>
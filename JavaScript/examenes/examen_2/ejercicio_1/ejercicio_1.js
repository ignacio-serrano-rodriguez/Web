/*
Crea una página web en HTML que pida a través de un input el listado de una serie de alimentos y la
cantidad, siguiendo el siguiente formato:

Manzana-4/Plátano-12/Kiwi-3/Calabacín-7/Uva-50/Melocotón-6/Naranja-12

A la derecha de input debe aparecer un botón llamado “Crear tabla”. Al pulsarlo, debes mostrar justo debajo
una tabla.
*/

function crear_tabla() 
{
	// Transformamos la cadena recibida por el input a un array y la guardamos en una variable
	let serieAlimentosArray = document.getElementById("serieAlimentos").value.split("/");
	console.log(serieAlimentosArray);

	// Creamos una variable donde almacenaremos el html inicial de la tabla
	let htmlTabla =`
		<br/>
		<table style="border: 1px solid black; border-collapse: collapse;">
		<tr>
			<th style="border: 1px solid black;">Fruta</th>
			<th style="border: 1px solid black;">Cantidad</th>
			<th style="border: 1px solid black;">Mitad</th>
		</tr>
	`;

	// Recorremos en un for cada uno de los alimentos del array
	for (let i = 0; i < serieAlimentosArray.length; i++) 
	{
		// Obtenemos de forma individual cada alimento
		let alimento = serieAlimentosArray[i].split("-");
		console.log(alimento);

		// Obtenemos tanto el nombre como la cantidad del alimento para mostrarlo en la tabla
		let nombreAlimento = alimento[0];
		console.log(alimento[0]);
		let cantidadAlimento = alimento[1];
		console.log(alimento[1]);

		// Añadimos a la variable que guarda el html de la tabla, cada una de las informaciones de cada alimento en formato fila de tabla
		htmlTabla +=`
		<tr>
			<td style="border: 1px solid black;">${nombreAlimento}</td>
			<td style="border: 1px solid black;">${cantidadAlimento}</td>
			<td style="border: 1px solid black;">${cantidadAlimento/2}</td>
		</tr>
		`;
	}

	// Añadimos la etiqueta de cierre de la tabla
	htmlTabla += "</table>";

	// Agregamos la tabla al html con los datos recibidos por el input
	document.getElementById("tabla").innerHTML=htmlTabla;
}
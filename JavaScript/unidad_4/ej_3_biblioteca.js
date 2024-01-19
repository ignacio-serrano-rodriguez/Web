/*
Llevas a cabo un sistema de gestión para una biblioteca. Realiza las acciones siguientes utilizando los métodos de arrays adecuados:
Registro inicial de libros:
Inicia el sistema con un array vacío llamado libros.

Agrega 10 nuevos libros:
Cada libro debe ser un array con dos elementos: el título del libro y el autor.

Muestra el siguiente menú al usuario (sólo la parte en negrita) y realiza las acciones que se describen:

1. ¿Cuántos libros hay en la biblioteca?
	indica cuántos libros hay en el array.
2. ¿Dónde está un libro?
	pregúntale el título del libro en indícale en qué posición de la lista se encuentra.
3. Quiero sacar un libro
	muestra el listado de libros con su autor acompañados de un número, pregúntale qué número de libro quiere sacar y elimínalo del array de 
	libros y autor. indícale que ha sacado el libro y muéstrale la lista de libros que aún están disponibles.
4. Quiero agregar un libro
	pregúntale el título del libro y, si no está en la lista, pregúntale el autor y agrégalo al array. Muéstrale el array resultante 
	tras añadir su libro.
5. Títulos de los libros
	crea una array que sólo contenga los títulos de los libros y muéstralo ordenado alfabéticamente de manera descendente (de la Z a la A), 
	y en una cadena separada por comas.
6. Dime los títulos más recomendados
	utiliza el array creado anteriormente y crea uno nuevo con los tres primeros títulos. Muestra dicho array.

Cada vez que termine de realizar una acción del menú, pregúntale si quiere volver al menú o si quiere salir. Si quiere volver al menú, 
limpia la pantalla y muéstrale el menú de nuevo. Si quiere salir, muestra el mensaje: “Gracias por utilizar nuestro servicio de Biblioteca”.
*/

var libros = [];
var titulos = [];

libros.push(["Canción de la Noche", "Carlos Ruiz"]);
libros.push(["Susurros en la Niebla", "Elena Martínez"]);
libros.push(["Reflejos Perdidos", "Javier Sánchez"]);
libros.push(["Laberinto de Sueños", "Marta González"]);
libros.push(["Canción de las Estrellas", "Carlos Ruiz"]);
libros.push(["Sombras en la Niebla", "Elena Martínez"]);
libros.push(["Amanecer Dorado", "Marta González"]);
libros.push(["Bajo la Luna de Octubre", "Carlos Ruiz"]);
libros.push(["Cenizas del Pasado", "Javier Sánchez"]);
libros.push(["Mariposas en el Jardín", "Elena Martínez"]);

function cuantos_libros() 
{
	document.getElementById("consola").innerHTML = `Hay ${libros.length} libros.`;
}

function donde_libro() 
{
	let libro = prompt("Introduce el nombre de un libro para obtener su posición.");
	
	if(libro != null)
	{
		let encontrado = false;
		let posicion;

		for (let i = 0; i < libros.length; i++) 
			if (libros[i][0] == libro)
			{
				encontrado = true;
				posicion = i+1;
				break;
			}

		if (encontrado) 
			document.getElementById("consola").innerHTML = `El libro con el título (${libros[posicion-1][0]}) se encuentra en la posición (${posicion}).`;
		else
			document.getElementById("consola").innerHTML = `No existe ningún libro con dicho título.`;
	}
	else
		document.getElementById("consola").innerHTML = `No se ha introducido la posición de ninǵun de libro.`;
}

function sacar_libro() 
{
	let cadena = '';

	for (let i = 0; i < libros.length; i++) 
		cadena += `(${i+1}) ${libros[i][0]} - ${libros[i][1]}\n`;

	let posicion = prompt(cadena);

	if(posicion != null)
	{
		document.getElementById("consola").innerHTML = `Ha sacado el libro con el título (${libros[posicion-1][0]})<br/><br/>`;
		libros.splice(posicion-1,1);
		
		cadena = '';

		for (let i = 0; i < libros.length; i++) 
			cadena += `${libros[i][0]} - ${libros[i][1]}<br/>`;

		document.getElementById("consola").innerHTML += `Los siguientes libros siguen disponibles.<br/><br/>${cadena}\n`;

	}
	else
		document.getElementById("consola").innerHTML = `No se ha introducido la posición de ningún libro`;
}

function agregar_libro() 
{
	let libro = prompt("Introduce el título de un libro para comprobar si es agregable.");
	
	if(libro != null)
	{
		let encontrado = false;
		let posicion;

		for (let i = 0; i < libros.length; i++) 
			if (libros[i][0] == libro)
			{
				encontrado = true;
				posicion = i+1;
				break;
			}

		if (encontrado) 
			document.getElementById("consola").innerHTML = `El libro con el título (${libros[posicion-1][0]}) se encuentra en la posición (${posicion}).`;
		else
		{
			let autor = prompt("El libro con dicho título no existe todavía.\nEscribe su autor para agregarlo.");

			if(autor != null)
			{
				libros.push([libro, autor]);
				let cadena = '';

				for (let i = 0; i < libros.length; i++) 
					cadena += `${libros[i][0]} - ${libros[i][1]}<br/>`;

				document.getElementById("consola").innerHTML = `Se ha agregado un nuevo libro.<br/><br/>${cadena}\n`;
			}
				
			else
			document.getElementById("consola").innerHTML = `No se ha introducido un nombre de autor válido.`;
		}
	}
	else
		document.getElementById("consola").innerHTML = `No se ha introducido el título de ningún libro.`;
}

function titulos_libros() 
{
	titulos = [];
	let cadena = '';

	for (let i = 0; i < libros.length; i++) 
		titulos.push(libros[i][0]);		

	titulos.sort().reverse();
	cadena = titulos.join(",<br/>");

	document.getElementById("consola").innerHTML = cadena;
}

function recomendados() 
{

	titulos = [];
	let recomendados = [];
	let cadena = '';

	for (let i = 0; i < libros.length; i++) 
		titulos.push(libros[i][0]);		

	titulos.sort().reverse();

	for (let i = 0; i < titulos.length && i < 3; i++) 	
		recomendados.push(titulos[i])

	cadena = recomendados.join(",<br/>");

	document.getElementById("consola").innerHTML = cadena;
}
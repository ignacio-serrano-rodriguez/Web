/*
Llevas a cabo un sistema de gestión para una biblioteca. Realiza las acciones siguientes utilizando los métodos de arrays adecuados:
Registro inicial de libros:
Inicia el sistema con un array vacío llamado libros.

Agrega 10 nuevos libros:
Cada libro debe ser un array con dos elementos: el título del libro y el autor.

Muestra el siguiente menú al usuario (sólo la parte en negrita) y realiza las acciones que se describen:

* 1. ¿Cuántos libros hay en la biblioteca?
	indica cuántos libros hay en el array.
* 2. ¿Dónde está un libro?
	pregúntale el título del libro en indícale en qué posición de la lista se encuentra.
* 3. Quiero sacar un libro
	muestra el listado de libros con su autor acompañados de un número, pregúntale qué número de libro quiere sacar y elimínalo del array de 
	libros y autor. indícale que ha sacado el libro y muéstrale la lista de libros que aún están disponibles.
* 4. Quiero agregar un libro
	pregúntale el título del libro y, si no está en la lista, pregúntale el autor y agrégalo al array. Muéstrale el array resultante 
	tras añadir su libro.
* 5. Títulos de los libros
	crea una array que sólo contenga los títulos de los libros y muéstralo ordenado alfabéticamente de manera descendente (de la Z a la A), 
	y en una cadena separada por comas.
* 6. Dime los títulos más recomendados
	utiliza el array creado anteriormente y crea uno nuevo con los tres primeros títulos. Muestra dicho array.

Cada vez que termine de realizar una acción del menú, pregúntale si quiere volver al menú o si quiere salir. Si quiere volver al menú, 
limpia la pantalla y muéstrale el menú de nuevo. Si quiere salir, muestra el mensaje: “Gracias por utilizar nuestro servicio de Biblioteca”.
*/

let libros = [];
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

let opcion;

do 
{
	switch (opcion) 
	{
		case '1':
			console.log("uno");
			break;

		case '2':
			console.log("dos");
			break;

		case '3':
			console.log("tres");
			break;

		case '4':
			console.log("cuatro");
			break;

		case '5':
			console.log("cinco");
			break;

		case '6':
			console.log("seis");
			break;

		case '7':
			console.log("seis");
			break;

		default:
			break;
	}
	
} while (opcion != '7');
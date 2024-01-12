/*
Ejercicio 1

Elabora una página web en HTML que, al pulsar el botón “Recorrer nodos”, muestre la siguiente salida:

Elemento 1: BODY
Elemento 2: H1
Contenido H1: Estamos en enero
Elemento 3: P
Contenido P: Voy a aprobar este examen
Elemento 4: H2
Contenido H2: Y haré la FCT y el proyecto este curso
Elemento 5: DIV
Elemento 6: BUTTON
Contenido BUTTON: Recorrer nodos
*/

function recorrer_nodos() 
{
	// Se declara e inicializa una variable con el objeto que representa a la etiqueta <body> del HTML.
	let body = document.body;
	// Se obtiene un array con los hijos del <body>.
	let hijosBody = body.children;
	// Se declara e inicializa un contador que usaremos para numerar los elementos a mostrar.
	let contador = 1;

	// Se muestra el nombre del elemento body e incrementamos el contador
	console.log(`Elemento ${contador}: ${body.tagName}`);
	contador++;

	// Recorremos los hijos del body para mostrar el nombre de sus etiquetas y su contenido si es que lo tienen.
	for (let i = 0; i < hijosBody.length-1; i++) 
	{
		let nombreEtiqueta =  hijosBody[i].tagName;
		console.log(`Elemento ${contador}: ${nombreEtiqueta}`);
		contador++;

		if (nombreEtiqueta != "DIV") 
			console.log(`Contenido: ${hijosBody[i].innerHTML}`);
		
		else
			for (const hijo of hijosBody[i].children) 
			{
				console.log(`Elemento 6: ${hijo.tagName}`);
				console.log(`Contenido: ${hijo.innerHTML}`);
			}
	}
}
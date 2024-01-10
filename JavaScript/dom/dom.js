// Fichero
console.log(document);
/* !DOCTYPE */
console.log(document.childNodes[0]);
// Nodo (html)
console.log(document.documentElement);
// Nodo (head)
console.log(document.head);
// Nodo (body)
console.log(document.body);
// Nodo activo
console.log(document.activeElement);
// Array de nodos (formularios)
console.log(document.forms);
// Array de nodos (imágenes)
console.log(document.images);
// Array de nodos (links)	
console.log(document.links);

// Array de nodos que cumplen el selector
let elementosListas = document.querySelectorAll("li");

// FORMAS DE RECORRER UN ARRAY DE NODOS

	// FOR
	for (let i = 0; i < elementosListas.length; i++) 
		elementosListas[i].style.fontFamily="arial";

	// FOR-OF
	for (let elemento of elementosListas) 
		elemento.style.fontSize = "30px";

	// FOR-EACH (tiene que ser un array)
	elementosListas.forEach(elemento => 
	{
		elemento.style.color="green";	
	});

// Nodo con tal ID
let elementoLista = document.getElementById("elementoLista_3");

if (elementoLista) 
elementoLista.style.color = "red";
else
	alert("No existe un elemento de la lista con tal ID");

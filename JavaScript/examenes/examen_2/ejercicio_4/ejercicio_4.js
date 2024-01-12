/*
Crea una página web en HTML que, mediante un input, solicite introducir un color en inglés y, al pulsar
sobre un botón cuyo texto sea “Cambiar fondo", cambie el color de fondo de la página al color indicado.
*/

// Simplemente obtenemos a partir del id, el color del fondo y este se lo introducimos como atributo al nodo que hace referencia al body

function cambiar_fondo() 
{
	if(document.getElementById("color").value.trim() != "")
		document.body.style = `background-color: ${document.getElementById("color").value}`;
}
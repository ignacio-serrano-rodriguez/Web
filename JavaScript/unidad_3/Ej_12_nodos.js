/*
Crea un programa en JavaScript que recorra y muestre todos los nodos del árbol HTML que se adjunta. 
Debes utilizar la recursión para explorar el árbol de nodos y mostrar información sobre cada nodo, 
como el tipo de nodo y su contenido (texto o atributos)
*/

// En este caso sera la etiqueta <body>
const nodoInicial = document.body;

function recorrerNodos(node) 
{
	// Nodo de tipo NORMAL (1)
	if (node.nodeType === 1) 
	{
		if(node.nodeName != "SCRIPT")
		{
			console.log(`Elemento: ${node.nodeName}`);
		}
	} 
	// Nodo de tipo TEXTO (3) 
	else if (node.nodeType === 3) 
	{
		// Trim elimina todos los espacios
		if(node.nodeValue.trim() != "")
		{
			console.log(`Texto: ${node.nodeValue}`);
		}
	}

	// Recorre los nodos hijos del nodo usado como parámetro
	for (let i = 0; i < node.childNodes.length; i++) 
	{
		recorrerNodos(node.childNodes[i]);
	}
}

recorrerNodos(nodoInicial);
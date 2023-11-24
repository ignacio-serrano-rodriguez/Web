/*
Crea una página web que solicite el valor de una cookie llamada “usuario” a través de 1 input y que, 
al pulsar un botón de color azul con texto “Guarda cookie”, la guarde. 
Debajo, incluye otro botón, de color verde, con texto “Leer cookie” que tenga al lado el texto “No hay cookies que mostrar”. 
Al pulsarlo debe leer el valor de la cookie llamada “usuario” y mostrarlo en el texto que se encuentre al lado del botón, que diga 
“El valor de la cookie usuario es:  valor”.
Debajo, crea otro botón con texto “Eliminar cookie” de color rojo. Al pulsarlo, la cookie debe eliminarse y el texto 
“El valor de la cookie usuario es:  valor” debe cambiar de nuevo a “No hay cookies que mostrar”. No cambies el texto directamente, 
sino que dicha funcionalidad la debe realizar la función del botón que lee la cookie y mostrar ese valor cuando no encuentra 
ninguna cookie con el nombre recibido.
NOTA: Cada funcionalidad de cada botón debe estar implementada en una función distinta.
*/

let nombre = "usuario";

function guardar_cookie() 
{
	let valor = document.getElementById("valorCookie").value;
	let caducidad;

	let diasCaducidad = 2;
	let fechaCaducidad = new Date();

	fechaCaducidad.setTime(fechaCaducidad.getTime() + (diasCaducidad * 24 * 60 * 60 * 1000));
	caducidad = `expires=${fechaCaducidad.toUTCString()}`;

	document.cookie = `${nombre}=${valor}; ${caducidad}; path=/`;
}

function leer_cookie() 
{
	let cookies = document.cookie.split(';');
	let galleta;
	let valor;

	for (let i = 0; i < cookies.length; i++) 
	{
		galleta = cookies[i].trim();

		if (galleta.startsWith(nombre + '=')) 
		{
			valor = galleta.substring(nombre.length + 1);

			if (valor == "")
				document.getElementById("mostrarCookie").innerHTML = "No hay cookies que mostrar";
			else
				document.getElementById("mostrarCookie").innerHTML = "la cookie usuario tiene el valor: "+ valor;

			break;
		}
	}
}

function eliminar_cookie() 
{
	let valor = '';
	let caducidad = -1;

	document.cookie = `${nombre}=${valor}; ${caducidad}; path=/`;
}


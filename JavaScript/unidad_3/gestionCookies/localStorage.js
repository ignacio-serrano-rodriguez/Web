/*
Script que hace uso del local storage del navegador.
Simula una máquina expendedora que almacena varios productos en formato clave-valor
en el local storage.
*/

// Se hace uso de una consola para ir mostrando la información al usuario
document.getElementById("consola").innerHTML = "¡Bienvenid@ a la máquina expendedora!";

// Inicializamos las variables que vamos a utilizar a lo largo del script
	let cantidadManzana = localStorage.getItem("manzana");
	let cantidadNaranja = localStorage.getItem("naranja");
	let cantidadUva = localStorage.getItem("uva");
	// Variable que usaremos para almacenar el código del producto a obtener de la máquina
	let codigoIntroducido = "";
	// Variable de control que usaremos para indicar cuando limpiar la consola
	let limpiarConsola = true;

/* Comprobamos si se han inicializado los valores en el local storage, si esto no fuera así,
se inicializarian en el local storage para su posterior uso en el script*/
if(cantidadManzana == null || cantidadNaranja == null || cantidadUva == null)
{
	localStorage.setItem("manzana", "5");
	localStorage.setItem("naranja", "5");
	localStorage.setItem("uva", "5");

	// Mostramos la cantidad 0 para cada uno, indicando que todavía no se ha actualizado
	document.getElementById("manzana").innerHTML = "🍏 (11) x0";
	document.getElementById("naranja").innerHTML = "🍊 (22) x0";
	document.getElementById("uva").innerHTML = "🍇 (33) x0";

	// Indicamos al usuario que pulse F5 o refresque la página para reiniciar las cantidades
	document.getElementById("consola").innerHTML = "Recarga la página para actualizar cantidades";
}
else
{
	/* En el caso de que estén cargados los datos en el local storage, se obtienen sus valores
	y se integran en el HTML */
	document.getElementById("manzana").innerHTML = "🍏 (11) x" + cantidadManzana;
	document.getElementById("naranja").innerHTML = "🍊 (22) x" + cantidadNaranja;
	document.getElementById("uva").innerHTML = "🍇 (33) x" + cantidadUva;
}

// Función que obtiene los números introducidos por teclado
function numeros(numero) 
{
	// En el caso de que la variable de control sea true, se vacía la consola 
	if(limpiarConsola)
	{
		codigoIntroducido = "";
		document.getElementById("consola").innerHTML = codigoIntroducido;
		limpiarConsola = false;
	}

	// Agrega el número indicado por teclado pasado como parámetro a la función
	codigoIntroducido += numero;
	// Muestra los números introducidos por el teclado en la consola
	document.getElementById("consola").innerHTML = codigoIntroducido;
}

// Sustituye el contenido de la consola y del código, por sus valores predeterminados
function cancelar() 
{
	document.getElementById("consola").innerHTML = "¡Bienvenid@ a la máquina expendedora!";
	codigoIntroducido = "";
	limpiarConsola = true;
}

/* En función del código intoducido, realiza una acción u otra. En el caso de que sea correcto
y la cantidad sea superior a 0, muestra el producto obtenido y resta en uno la cantidad del local
storage. En el caso de que la cantidad sea inferior, muestra que no hay. En el caso de que el 
código sea incorrecto, muestra un error.
*/
function aceptar() 
{
	switch (codigoIntroducido) 
	{
		case "11":

			if(cantidadManzana > 0)
			{
				document.getElementById("consola").innerHTML = "Tome su manzana 🍏";
				localStorage.setItem("manzana", --cantidadManzana);
				document.getElementById("manzana").innerHTML = "🍏 (11) x" + cantidadManzana;
			}
			else
				document.getElementById("consola").innerHTML = "No quedan manzanas 🙁";
			
			limpiarConsola = true;
			codigoIntroducido = "";
			break;
			

		case "22":

			if(cantidadNaranja > 0)
			{
				document.getElementById("consola").innerHTML = "Tome su naranja 🍊";
				localStorage.setItem("naranja", --cantidadNaranja);
				document.getElementById("naranja").innerHTML = "🍊 (22) x" + cantidadNaranja;
			}
			else
				document.getElementById("consola").innerHTML = "No quedan naranjas 🙁";
			
			limpiarConsola = true;
			codigoIntroducido = "";
			break;

		case "33":

			if(cantidadUva > 0)
			{
				document.getElementById("consola").innerHTML = "Tome su uva 🍇";
				localStorage.setItem("uva", --cantidadUva);
				document.getElementById("uva").innerHTML = "🍇 (33) x" + cantidadUva;
			}
			else
				document.getElementById("consola").innerHTML = "No quedan uvas 🙁";
			
			limpiarConsola = true;
			codigoIntroducido = "";
			break;
	
		default:
			document.getElementById("consola").innerHTML = "Código introducido no válido 🚫";
			limpiarConsola = true;
			codigoIntroducido = "";
			break;
	}
}
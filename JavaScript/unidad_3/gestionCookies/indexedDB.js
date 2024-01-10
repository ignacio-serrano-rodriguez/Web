var bd;

iniciar_base_datos();

function iniciar_base_datos() 
{
	var solicitud = indexedDB.open("maquinaExpendedora");

	solicitud.addEventListener("error", mostrar_error);
	solicitud.addEventListener("success", comenzar);
	solicitud.addEventListener("upgradeneeded", crear_almacen);
}

function mostrar_error(evento) 
{
	console.log("error: " + evento.code + " " + evento.message);
}

function comenzar(evento) 
{
	console.log("iniciar conexión");
	bd = evento.target.result;
	inicializar();
}

function inicializar() 
{
	console.log("inicializar");
	var transaccion = bd.transaction(["Productos"],"readwrite");
	var almacen = transaccion.objectStore("Productos");

	almacen.add({
		nombre: "manzana",
		cantidad: 5
	});

	almacen.add({
		nombre: "naranja",
		cantidad: 5
	});

	almacen.add({
		nombre: "uva",
		cantidad: 5
	});
}

function crear_almacen(evento) 
{
	console.log("crear base de datos");
	var basedatos = evento.target.result;
	var almacen = basedatos.createObjectStore("Productos", {keyPath: "nombre"});
	almacen.createIndex("cantidad", "cantidad", {unique: false});
}

// Se hace uso de una consola para ir mostrando la información al usuario
document.getElementById("consola").innerHTML = "¡Bienvenid@ a la máquina expendedora!";


	let cantidadManzana = 5;
	let cantidadNaranja = 5;
	let cantidadUva = 5;
	// Variable que usaremos para almacenar el código del producto a obtener de la máquina
	let codigoIntroducido = "";
	// Variable de control que usaremos para indicar cuando limpiar la consola
	let limpiarConsola = true;


if(cantidadManzana == null || cantidadNaranja == null || cantidadUva == null)
{
/*
	localStorage.setItem("manzana", "5");
	localStorage.setItem("naranja", "5");
	localStorage.setItem("uva", "5");
*/

	// Mostramos la cantidad 0 para cada uno, indicando que todavía no se ha actualizado
	document.getElementById("manzana").innerHTML = "🍏 (11) x0";
	document.getElementById("naranja").innerHTML = "🍊 (22) x0";
	document.getElementById("uva").innerHTML = "🍇 (33) x0";

	// Indicamos al usuario que pulse F5 o refresque la página para reiniciar las cantidades
	document.getElementById("consola").innerHTML = "Recarga la página para actualizar cantidades";
}
else
{
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

function aceptar() 
{
	switch (codigoIntroducido) 
	{
		case "11":

			if(cantidadManzana > 0)
			{
				document.getElementById("consola").innerHTML = "Tome su manzana 🍏";
				//localStorage.setItem("manzana", --cantidadManzana);
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
				//localStorage.setItem("naranja", --cantidadNaranja);
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
				//localStorage.setItem("uva", --cantidadUva);
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
/*
Elabora una página web en HTML que solicite, a través de un input, una cadena, que puede estar formada
por números y letras. Si contiene otro tipo de caracteres, se ignorarán. Por ejemplo: g5ER3hY5dW32f07G9d4
Cuando se pulse el botón “Extraer números”, debe mostrar debajo los números encontrados, sin repetir
ninguno, ordenados ascendentemente, separados por comas. Siguiendo el ejemplo anterior: 0,3,4,5,7,9
Debajo, se mostrarán cuatro botones: “Sumar”, “Multiplicar”, “Dividir” y “Promedio”. Al pulsar cualquiera de
ellos, se mostrará una nueva ventana, de tamaño 300px x 300px donde aparezca (sustituir la operación
según sea el caso):

El resultado de realizar el promedio
(0+3+4+5+7+9)/6)
es de 4,67

En el caso en el que pulse Dividir, se realizará la división entre el número más alto y el número más bajo.
Debes controlar el error en el caso de que la división sea entre 0 lanzando la excepción adecuada, que se
imprimirá en la nueva ventana indicando que la división entre los número X e Y no es posible.
*/

// creamos una variable global donde almacenaremos los números que serán utilizados en cada una de las operaciones
var numerosArray = [];

function extraer_numeros() 
{
	// creamos una constante que almacena los valores enteros válidos
	const numerosValidos = [0,1,2,3,4,5,6,7,8,9]

	// transformamos en array la cadena recibida por el input
	let cadenaArray = document.getElementById("cadena").value.split("");
	
	// comprobamos para cada uno de los elementos del array si este se encuentra en los numeros validos, si es así lo añadiremos
	// al array donde almacenamos los números para operar
	for (let i = 0; i < cadenaArray.length; i++) 
	{
		// es necesario transforma a entero para comprobar con include
		if(numerosValidos.includes(parseInt(cadenaArray[i])))
		{
			// push simplemente añade al final del array el elemento pasado como parámetro
			numerosArray.push(cadenaArray[i]);
		}
	}

	// ordenamos los números del array de menor a mayor como indica el enunciado
	numerosArray.sort();
	// unimos todos los números del array en una cadena separada por el caracter , como indica el enunciado
	numeros = numerosArray.join(",");

	// agregamos los números obtenidos al html
	document.getElementById("numerosEncontrados_y_cuatroBotones").innerHTML =`<p>${numeros}</p>`;

	// generamos los botones y sus respectivas llamadas a funciones que usaremos posteriormente
	document.getElementById("numerosEncontrados_y_cuatroBotones").innerHTML +=`
		<input type="button" value="Sumar" onclick="sumar()"/>
		<input type="button" value="Multiplicar" onclick="multiplicar()"/>
		<input type="button" value="Dividir" onclick="dividir()"/>
		<input type="button" value="Promedio" onclick="promedio()"/>
	`;
}

function sumar() 
{
	// variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	let cadenaResultado = "El resultado de realizar la suma\n\n(";

	// recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
	for (let i = 0; i < numerosArray.length; i++) 
	{
		resultado += parseInt(numerosArray[i]);

		if(i==numerosArray.length-1)
		{
			cadenaResultado+= `${numerosArray[i]}`;
		}
		else
		{
			cadenaResultado+= `${numerosArray[i]}+`;
		}
	}

	// mostramos el resultado obtenido en una ventana nueva en el navegador
	cadenaResultado += `)\n\nes de ${resultado}`;
	alert(cadenaResultado);
}

function multiplicar() 
{
	// variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=1;
	let cadenaResultado = "El resultado de realizar la multiplicación\n\n(";

	// recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
	for (let i = 0; i < numerosArray.length; i++) 
	{
		resultado *= parseInt(numerosArray[i]);

		if(i==numerosArray.length-1)
		{
			cadenaResultado+= `${numerosArray[i]}`;
		}
		else
		{
			cadenaResultado+= `${numerosArray[i]}*`;
		}
	}

	// mostramos el resultado obtenido en una ventana nueva en el navegador
	cadenaResultado += `)\n\nes de ${resultado}`;
	alert(cadenaResultado);
}

function dividir() 
{
	// variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	// obtenemos directamente el numero mayor y menor del array, ya que están ordenados de menor a mayor por haber usado sort
	let numeroMasBajo = parseInt(numerosArray[0]);
	let numeroMasAlto = parseInt(numerosArray[numerosArray.length-1]);
	let cadenaResultado = `El resultado de realizar la división\n\n(${numeroMasAlto}/${numeroMasBajo})\n\n`;

	// Comprobamos que los dos números son distintos de 0 para poder lanzar las excepción de que la operacion de división
	// no es realizable si el divisor es 0
	if(numeroMasAlto == 0 || numeroMasBajo == 0)
	{
		// indicamos que la división no es posible realizarla directamente
		alert(`La division entre ${numeroMasAlto} y ${numeroMasBajo} es imposible`)
	}
	else
	{
		// calculamos la operación y la mostramos por pantalla
		resultado = numeroMasAlto / numeroMasBajo;
		cadenaResultado += `es de ${resultado}`;
		alert(cadenaResultado);
	}
}

function promedio() 
{
	// variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	let cadenaResultado = "El resultado de realizar el promedio\n\n(";

	// recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
	for (let i = 0; i < numerosArray.length; i++) 
	{
		resultado += parseInt(numerosArray[i]);

		if(i==numerosArray.length-1)
		{
			cadenaResultado+= `${numerosArray[i]}`;
		}
		else
		{
			cadenaResultado+= `${numerosArray[i]}+`;
		}
	}

	// mostramos el resultado obtenido en una ventana nueva en el navegador
	// usaremos toFixed(2) para redondear al segundo decimal
	cadenaResultado += `/${numerosArray.length})\n\nes de ${(resultado/numerosArray.length).toFixed(2)}`;
	alert(cadenaResultado);
}
/*
Elabora una página web en HTML que solicite, a través de un input, una cadena, que puede estar formada
por números y letras. Si contiene otro tipo de caracteres, se ignorarán. Por ejemplo: 

g5ER3hY5dW32f07G9d4

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

// Declaramos una variable global donde almacenaremos los números utilizados en las operaciones
var numerosArray;

function extraer_numeros() 
{
	// Inicializamos el array a 0 en caso de que introduzca una nueva serie de caracteres
	numerosArray = [];

	// Creamos una constante que almacena un array con los valores enteros válidos
	const numerosValidos = [0,1,2,3,4,5,6,7,8,9]

	// Transformamos en array la cadena recibida por el input
	let cadenaArray = document.getElementById("cadena").value.split("");
	
	/* Comprobamos para cada uno de los elementos del array si este se encuentra en los numeros validos, si es así lo añadiremos
		al array donde almacenamos los números para operar */
	for (let i = 0; i < cadenaArray.length; i++) 
	{
		// Es necesario parsear a entero para comprobar con include si es un entero válido
		if(numerosValidos.includes(parseInt(cadenaArray[i])))
		{
			// Posteriormente comprobamos que el número no se repite
			if(!numerosArray.includes(cadenaArray[i]))
				numerosArray.push(cadenaArray[i]);
		}
	}

	// Ordenamos los números del array de forma ascendente (de menor a mayor)
	numerosArray.sort();
	// Transformamos el array en una cadena mediante el caracter (,) para mostrar por pantalla
	numeros = numerosArray.join(",");

	// Agregamos los números obtenidos al html
	document.getElementById("numerosEncontrados_y_cuatroBotones").innerHTML =`<p>${numeros}</p>`;

	// Generamos los botones y sus respectivas llamadas a funciones que usaremos posteriormente
	document.getElementById("numerosEncontrados_y_cuatroBotones").innerHTML +=`
		<input type="button" value="Sumar" onclick="sumar()"/>
		<input type="button" value="Multiplicar" onclick="multiplicar()"/>
		<input type="button" value="Dividir" onclick="dividir()"/>
		<input type="button" value="Promedio" onclick="promedio()"/>
	`;
}

function sumar() 
{
	// Variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	let cadenaResultado = "El resultado de realizar la suma<br/><br/>(";

	// Recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
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

	// Mostramos el resultado obtenido en una ventana nueva en el navegador
	cadenaResultado += `)<br/><br/>es de ${resultado}`;

	mostrar_ventana(cadenaResultado);
}

function multiplicar() 
{
	// Variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=1;
	let cadenaResultado = "El resultado de realizar la multiplicación<br/><br/>(";

	// Recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
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

	// Mostramos el resultado obtenido en una ventana nueva en el navegador
	cadenaResultado += `)<br/><br/>es de ${resultado}`;

	mostrar_ventana(cadenaResultado);
}

function dividir() 
{
	// Variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	let cadenaResultado;
	// Obtenemos directamente el numero mayor y menor del array, ya que están ordenados de menor a mayor por haber usado sort
	let numeroMasBajo = parseInt(numerosArray[0]);
	let numeroMasAlto = parseInt(numerosArray[numerosArray.length-1]);

	try 
	{
		if(numeroMasBajo == 0)
			throw `La division entre ${numeroMasAlto} y ${numeroMasBajo} no es posible porque el divisor es nulo`;

		else
		{
			resultado = numeroMasAlto / numeroMasBajo;
			cadenaResultado = `El resultado de realizar la división (${numeroMasAlto}/${numeroMasBajo})<br/><br/>es de ${resultado}`;
		}
	} 
	catch (error)
	{
		cadenaResultado = error;
	}

	mostrar_ventana(cadenaResultado);
}

function promedio() 
{
	// Variables que utilizaremos para mostrar por pantalla el resultado
	let resultado=0;
	let cadenaResultado = "El resultado de realizar el promedio<br/><br/>(";

	// Recorremos el array de numeros obtenidos y realizamos las operaciones pertinentes según el botón
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

	// Mostramos el resultado obtenido en una ventana nueva en el navegador
	// Usaremos toFixed(2) para redondear al segundo decimal
	cadenaResultado += `/${numerosArray.length})<br/><br/>es de ${(resultado/numerosArray.length).toFixed(2)}`;

	mostrar_ventana(cadenaResultado);
}

function mostrar_ventana(cadenaResultado) 
{
	let ventana = window.open("about:blank", "_blank", "width=300px,height=300px");
	ventana.document.write(cadenaResultado);
}
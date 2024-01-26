function findPairs(numero1, numero2) 
{
	// Declaramos e inicializamos una variable que usaremos como consola para mostrar errores.
	let consola = document.getElementById("consola");

	// Comprobamos que ambos argumentos formales de la función son números y mostramos errores en consecuencia.
	if (isNaN(numero1) || numero1 == "") 
		consola.innerHTML = `El número 1 (${numero1}) no es un número o es una cadena vacia.`;
	else if (isNaN(numero2) || numero2 == "")
		consola.innerHTML = `El número 2 (${numero2}) no es un número o es una cadena vacia.`;
	else
	{
		// Transformamos los números decimales a enteros.
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);

		// Comprobamos que se cumplen las condiciones del enunciado.
		if (numero1 > numero2)
			consola.innerHTML = `El número 1 (${numero1}) no es inferior al número 2 (${numero2}).`;
		else if (numero1 < 1)
			consola.innerHTML = `El número 1 (${numero1}) no es mayor o igual a 1.`;
		else if (numero2 > 100)
			consola.innerHTML = `El número 2 (${numero2}) ha de ser menor o igual a 100.`;
		else
		{
			// Incializamos una array vacio donde almacenaremos los números pares.
			let numerosPares = [];

			// Creamos un for donde recorremos el rango entre los números introducidos sin incluir los extremos.
			for (let i = (numero1+1); i < numero2; i++)
				// Mediante el operador módulo comprobamos que el resto de la división entre 2 sea 0 (esto significa que es par).
				if(i%2 == 0)
					// Añadimos los enteros que cumplen esa función al array.
					numerosPares.push(i);

			// Declaramos e inicializamos una variable donde mostraremos el resultado.
			let resultado = document.getElementById("resultado");

			// Comprobamos que el array obtenido tenga al menos 1 elemento y mostramos un resultado u otro en función de esto.
			if(numerosPares.length == 0)
				// Si el array no tiene ningún elemento, es que no existen números pares en el rango.
				resultado.innerHTML = `<strong>No existen números pares entre ${numero1} y ${numero2}.</strong>`;
			else
				// Se muestran los números pares haciendo uso de la función join.
				resultado.innerHTML = `<strong>Los números pares entre ${numero1} y ${numero2} son: ${numerosPares.join()}.</strong>`;
		}
	}
}

function calcularNumerosPares() 
{
	// Obtenemos los valores de los input de tipo text en el HTML.
	let numero1 = document.getElementById("numero1").value.trim();
	let numero2 = document.getElementById("numero2").value.trim();
	// LLamamos a la función con los números obtenidos.
	findPairs(numero1, numero2);
}
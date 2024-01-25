//Resuelve las siguientes actividades. Utiliza la función flecha siempre que puedas:

/* 7.1
Escribe una función que reciba una contraseña como argumento y devuelva true si cumple que tiene al menos 8 
caracteres, una letra mayúscula y un número, y false en caso contrario. */
function comprobar_contrasenia(contrasenia) 
{
	comprobacionMayuscula = false;
	comprobacionNumero = false;
	comprobacionLetra = false;
	comprobacionLongitud = false;
	contraseniaArray = contrasenia.split("");

	// COMPROBACIÓN LONGITUD
	if(contrasenia.length >= 8)
		comprobacionLongitud = true;

	const numeros = ['0','1','2','3','4','5','6','7','8','9'];
	const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	// COMPROBACIÓN NÚMERO
	for (let i = 0; i < contraseniaArray.length; i++) 
		if (numeros.includes(contraseniaArray[i])) 
		{
			comprobacionNumero = true;
			break;	
		}

	// COMPROBACIÓN LETRA
	for (let i = 0; i < contraseniaArray.length; i++) 
		if (abecedario.includes(contraseniaArray[i].toUpperCase())) 
		{
			comprobacionLetra = true;
			break;	
		}
	

	// COMPROBACIÓN MAYÚSCULA
	for (let i = 0; i < contraseniaArray.length; i++) 
	if (numeros.includes(contraseniaArray[i])) 
	{
		contraseniaArray.splice(i,1);
		i=-1;
	}

	let contraseniaAux = contraseniaArray.join("");
	let contraseniaMayusculaArray = contraseniaAux.toUpperCase().split("");
	for (let i = 0; i < contraseniaArray.length; i++) 
	if (contraseniaMayusculaArray.includes(contraseniaArray[i])) 
	{
		comprobacionMayuscula = true;
		break;	
	}
	
	if(comprobacionMayuscula && comprobacionNumero && comprobacionLetra && comprobacionLongitud)
		return true;
	else
		return false;
}

let contrasenia = "1234567A";

if(comprobar_contrasenia(contrasenia))
	console.log("La contraseña es correcta.");
else
	console.log("La contraseña es incorrecta.");

/* 7.2
Implementa una función que reciba una cadena de texto como entrada y cuente la cantidad de palabras que contiene. */
function cantidad_palabras(cadena) 
{
	return cadena.split(" ").length;
}

let cadena = "hola me llamo Nacho";
console.log(`La cadena introducida tiene ${cantidad_palabras(cadena)} palabras.`);

/* 7.3
Crea una función que genere una contraseña aleatoria de una longitud dada, utilizando únicamente letras y números. */
function contrasenia_aleatoria(longitud) 
{
	let contrasenia = [];
	const numeros = ['0','1','2','3','4','5','6','7','8','9'];
	const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	for (let i = 0; i < longitud; i++) 
	{
		if(Math.random() <= 0.5)
			contrasenia.push(numeros[Math.floor(Math.random()*numeros.length)]);
		else
			if(Math.random() <= 0.5)
				contrasenia.push(letras[Math.floor(Math.random()*letras.length)]);
			else
				contrasenia.push(letras[Math.floor(Math.random()*letras.length)].toLowerCase());
	}

	return(contrasenia.join(''));
}

let longitud = 10;
console.log(`Contraseña aleatoria generada: ${contrasenia_aleatoria(longitud)}`);

/* 7.4
Escribe una función que reciba un número como entrada y devuelva la suma de sus dígitos. */
function suma_digitos(numero) 
{
	let digitos = (numero+'').split('');
	let suma = 0;

	for (let i = 0; i < digitos.length; i++) 
		suma += parseInt(digitos[i]);

	return suma;
}

let numero = 1234
console.log(`La suma de sus dígitos es: ${suma_digitos(numero)}`);

/* 7.5
Desarrolla un juego simple en el que el programa elige un número aleatorio y el jugador tiene que adivinarlo. La función debe 
proporcionar pistas sobre si el número es mayor o menor al que introdujo el jugador por última vez. */

var numeroAleatorio = Math.floor(Math.random()*10+1);

function numero_aleatorio() 
{
	let numeroIntroducido = parseInt(document.getElementById("numeroIntroducido").value.trim());

	if(!Number.isInteger(numeroIntroducido))
		document.getElementById("consola").innerHTML = "Introduce un número.";
	else
	{
		if(numeroIntroducido == numeroAleatorio)
		{
			document.getElementById("consola").innerHTML = `Has acertado el número (${numeroAleatorio})`;
			document.getElementById("numeroIntroducido").disabled = true;
			document.getElementById("comprobarNumero").disabled = true;	
		}
		else
			if(numeroAleatorio < numeroIntroducido)
				document.getElementById("consola").innerHTML = `El número es menor que (${numeroIntroducido}).`;
			else
				document.getElementById("consola").innerHTML = `El número es mayor que (${numeroIntroducido}).`;
	}
}
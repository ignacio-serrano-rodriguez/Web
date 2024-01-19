/*
(includes)
Crea un juego en el que el usuario tenga que adivinar una cadena que se ha pasado a array. 
el juego acaba cuando el usuario termina de adivinar la cadena hecha array o cuando se acaban los 3 intentos.
"no funciona si la cadena tiene caracteres que se repiten, como por ejemplo: JavaScript"
*/

let cadena = "hola";
let cadenaArray = cadena.split("");
let intentos = 3;
let cadenaUsuario = [];
let caracter;

console.log("cadena: " + cadenaArray);
console.log("longitud: " + cadenaArray.length);
console.log("intentos: " + intentos);
console.log();

while (intentos > 0 && cadenaArray.length > 0) 
{
	caracter = prompt("Introduce una letra");

	if(cadenaArray.includes(caracter))
	{
		cadenaArray.splice(cadenaArray.indexOf(caracter), 1);

		console.log("cadena: " + cadenaArray);
		console.log("longitud: " + cadenaArray.length);
		console.log("intentos: " + intentos);
		console.log();

		alert("caracter correcto ");
		
	}
	else
	{
		intentos--;				

		console.log("cadena: " + cadenaArray);
		console.log("longitud: " + cadenaArray.length);
		console.log("intentos: " + intentos);
		console.log();

		alert("caracter incorrecto");
	}
}

if(intentos == 0)
{
	alert("Se te acabaron los intentos. Perdiste.");
}

if(cadenaArray.length == 0)
{
	alert("Acertaste la palabra. Ganaste.");
}
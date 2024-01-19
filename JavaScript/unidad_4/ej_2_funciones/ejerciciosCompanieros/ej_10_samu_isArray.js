/*
(isArray)
Dado el siguiente código, encuentra el error y demuestra con el método correspondiente por qué da ese error.
*/

let array = ["Lidia", "Samuel", "Nacho", "Ale"];
let nombre = array.pop();
console.log(nombre);

if(Array.isArray(nombre))
{
	nombre.push("Apellido");
}
else
{
	console.log("No es un array");
}
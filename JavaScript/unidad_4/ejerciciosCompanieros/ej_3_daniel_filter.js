/*
(filter) "NO modifica el array"
Ya que estamos sobre los estropicios que hizo ese primer becario, pues no que le pedimos un array con la edad de nuestros empleados y 
nos lo da desordenado, 
ay que gente, ¿nos ayudas a sacar los menores de edad? que por lo visto es ilegal o algo así
let edades = [12, 18, 24, 25, 14, 14, 16, 17, 13, 18];
*/

function sacar_menor_edad(edades) 
{
	let subequipo = edades.filter(menores_de_edad);
	return subequipo;
}

function menores_de_edad(edad) 
{
	return (edad <= 18);
}

let edades = [12, 18, 24, 25, 14, 14, 16, 17, 13, 18];
console.log(edades);

console.log(sacar_menor_edad(edades));
let frutas = ["manzana", "uva", "cereza", "kiwi"];
let enteros = [23,87,12,34];
let cadena = '';

// FOREACH
// Se tiene que ver en terminal porque con QUOKKA no funciona
frutas.forEach((element) => console.log(element));

// MATH (max, min, pow)
// Es necesario usar el operador spread (...)
console.log(Math.max(...enteros));
console.log(Math.min(...enteros));

// MAP
let longitudes = frutas.map(function (fruta) 
{
	return fruta.length;
});

console.log(longitudes);
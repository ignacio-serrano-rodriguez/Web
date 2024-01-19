let frutas = ["manzana", "uva", "cereza", "kiwi"];
let enteros = [23,87,12,34];
let cadena = '';

// 4.1 FOREACH
// Se tiene que ver en terminal porque con QUOKKA no funciona
frutas.forEach((element) => console.log(element));

// 4.2 MATH (max, min, pow)
// Es necesario usar el operador spread (...)
console.log(Math.max(...enteros));
console.log(Math.min(...enteros));

// 4.3 MAP
let longitudes = frutas.map(function (fruta) 
{
	return fruta.length;
});

console.log(longitudes);
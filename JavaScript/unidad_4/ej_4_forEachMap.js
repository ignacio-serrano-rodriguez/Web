// 4.1 FOREACH
let frutas = ["manzana", "uva", "cereza", "kiwi"];
// Se tiene que ver en terminal porque con QUOKKA no funciona
frutas.forEach((element) => console.log(element));

// 4.2 MATH (max, min, pow)
// Es necesario usar el operador spread (...)
let enteros = [23,87,12,34];
console.log(Math.max(...enteros));
console.log(Math.min(...enteros));

// 4.3 MAP
let longitudes = frutas.map(function (fruta) 
{
	return fruta.length;
});

console.log(longitudes);
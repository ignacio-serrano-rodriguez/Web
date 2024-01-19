/*
6.1
Crea una función flecha que se llame cuadrado y calcule el cuadrado de un número pasado por parámetro. 
Luego, llama a dicha función con el argumento 6.
*/
let cuadrado = x => x*x;
console.log(cuadrado(6));

/*
6.2
4.3 pero usando función flecha
*/
let frutas = ["manzana", "uva", "cereza", "kiwi"];

let longitudes = frutas.map(function (fruta) 
{
	return fruta.length;
});

console.log(longitudes);
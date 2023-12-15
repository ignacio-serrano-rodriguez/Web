/*
(length)
Se quiere saber la cantidad de dinero recaudado para el sorteo de una cesta de navidad teniendo en cuenta que 
cada participante aporta 1.50 para conseguir un boleto. Sabiendo que el número de participantes estaba 
limitado a cuarenta, ¿cuánto dinero se ha recaudado? Indica si ha tenido buena acogida 
o no (si han vendido más de la mitad es buena acogida).
array de ejemplo: ["Julián García", "Pedro Martínez", "Lara Sánchez", "Lucía Díaz"]
*/
arrayEjemplo = ["Julián García", "Pedro Martínez", "Lara Sánchez", "Lucía Díaz"];
console.log(arrayEjemplo);

if(arrayEjemplo.length > 20)
	console.log("buena acogida");
else
	console.log("no tiene buena acogida");

console.log(`Se han recaudado ${1.5*arrayEjemplo.length}€`);
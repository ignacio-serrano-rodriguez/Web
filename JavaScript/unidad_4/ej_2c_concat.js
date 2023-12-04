// pregunta: Si tengo dos equipos con pocos integrantes, ¿Cómo puedo hacer para tener uno nuevo formado por ambos?
// solución: usar el método (concat)

// Comprueba si se ha alcanzado el límite de jugadores en un equipo
function juntar_equipos(equipo_1, equipo_2) 
{
	let equipo_3 = equipo_1.concat(equipo_2);
	return (equipo_3);
}

let equipo_1 = ["carlos", "samu", "nacho"];
let equipo_2 = ["diego", "ale"];
let equipo_3 = [];

console.log(equipo_1);
console.log(equipo_2);
console.log(equipo_3);

console.log(equipo_3 = juntar_equipos(equipo_1,equipo_2));

// pregunta: Si tengo un equipo, ¿Cómo puedo saber si ya tiene el máximo de jugadores que es 5? 
// solución: usar el atributo (length)
	
// Comprueba si se ha alcanzado el límite de jugadores en un equipo
function maximo_jugadores_equipo(equipo) 
{
	let maximoJugadores;

	if(equipo.length < 5)
		maximoJugadores = `Al tener el equipo menos de 5 jugadores, se pueden añadir más jugadores`;		
	else
		maximoJugadores = `Al tener el equipo 5 jugadores, se ha alcanzado el máximo de jugadores`;

	return (maximoJugadores);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
let equipo_2 = ["diego", "ale", "alberto", "alban"];

console.log(equipo_1);
console.log(equipo_2);

console.log(maximo_jugadores_equipo(equipo_1));
console.log(maximo_jugadores_equipo(equipo_2));
// pregunta: Si tengo un equipo, ¿Cómo puedo saber si puedo introducir nuevos jugadores?
// solución: usar el método (isArray)

// Introduce un jugador al equipo en el caso de que este sea un array
function aniadir_jugador_equipo(equipo, jugador) 
{
	let aniadible;

	if(Array.isArray(equipo))
	{
		equipo.push(jugador);
		aniadible = `Se puede añadir al jugador (${jugador})`;
	}
	else
		aniadible = `No se pueden añadir jugadores`;

	return (aniadible);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia"];

console.log(equipo_1);

console.log(aniadir_jugador_equipo(equipo_1, "manuel"));

console.log(equipo_1);
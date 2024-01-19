// pregunta: Si tengo un equipo ganador, ¿Cómo puedo mostrar todos los jugadores que han ganado premio?
// solución: usar el método (join)
	
function han_ganado_premio(equipo) 
{
	let jugadores = equipo.join(", ");
	return (`${jugadores} han ganado premios`);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];

console.log(han_ganado_premio(equipo_1));
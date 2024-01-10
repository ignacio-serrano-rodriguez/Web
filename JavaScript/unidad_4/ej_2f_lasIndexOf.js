/* pregunta: Resulta que he introducido varias veces al mismo jugador en un equipo, y quiero saber
cual es el último número asignado que tiene, sabiendo que estos se asignan por orden de insercción
¿Cómo puedo saber el número de un jugador en concreto de un equipo si están númerados
por orden de llegada? */
// solución: usar el método (lastIndexOf)
	
function numero_del_jugador_definitivo(equipo, nombreJugador) 
{
	return (`el jugador ${nombreJugador} tiene el número 
	${equipo.lastIndexOf(nombreJugador)+1} de forma definitiva`);
}

let equipo_1 = ["carlos", "samu", "nacho", "samu", "nacho", "lidia", "manuel", "samu", "nacho"];

console.log(numero_del_jugador_definitivo(equipo_1, "samu"));
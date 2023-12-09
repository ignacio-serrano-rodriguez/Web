/* pregunta: ¿Cómo puedo saber el número de un jugador en concreto de un equipo si están númerados
por orden de llegada? */
// solución: usar el método (indexOf)
	
function numero_del_jugador(equipo, nombreJugador) 
{
	return (`el jugador ${nombreJugador} tiene el número ${equipo.indexOf(nombreJugador)+1}`);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];

console.log(numero_del_jugador(equipo_1, "manuel"));
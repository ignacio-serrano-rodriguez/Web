/* pregunta: Necesito saber si 'x' jugador se encuentra en el equipo o no
¿Cómo lo podemos hacer? */
// solución: usar el método (toString)
	
function jugador_en_equipo(equipo, jugador) 
{
	if(equipo.includes(jugador))
		return (`${jugador} SÍ está en el equipo`);
	else
		return (`${jugador} NO está en el equipo`);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];

console.log(jugador_en_equipo(equipo_1, "juan"));
console.log(jugador_en_equipo(equipo_1, "manuel"));
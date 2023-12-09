/* pregunta: Necesito obtener de forma explicita, una cadena con los nombres de los jugadores
¿Cómo lo podemos hacer? */
// solución: usar el método (toString)
	
function cadena_explicita_nombres_jugadores(equipo) 
{
	return (equipo.toString());
}


let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
console.log(equipo_1);

console.log(cadena_explicita_nombres_jugadores(equipo_1));
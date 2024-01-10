/* pregunta: Resulta que los dos jugadores más nuevos del equipo no están rindiendo como deberían
¿Quiénes son? */
// solución: usar el método (slice)
	
function dos_jugadores_mas_nuevos(equipo) 
{
	return (equipo.slice(-2));
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];

console.log(dos_jugadores_mas_nuevos(equipo_1));
/* pregunta: Resulta que los dos jugadores más antiguos del equipo no están rindiendo como deberían
¿Cómo los puedo quitar del equipo? */
// solución: usar el método (splice)
	
function quitar_dos_jugadores_mas_antiguos(equipo) 
{
	equipo.splice(0,2);
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
console.log(equipo_1);

quitar_dos_jugadores_mas_antiguos(equipo_1);

console.log(equipo_1);
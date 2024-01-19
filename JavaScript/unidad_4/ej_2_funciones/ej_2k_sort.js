/* pregunta: Necesito establecer los números de los jugadores de forma alfabética
¿Cómo lo podemos hacer? */
// solución: usar el método (sort)
	
function numeracion_alfabetica(equipo) 
{
	equipo.sort();
}


let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
console.log(equipo_1);

numeracion_alfabetica(equipo_1);
console.log(equipo_1);
/* pregunta: Es hora de cambiar la organización de la plantilla. Invirtamos el orden.
¿Cómo lo podemos hacer? */
// solución: usar el método (reverse)
	
function invertir_plantilla(equipo) 
{
	equipo.reverse();
}

let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
console.log(equipo_1);

invertir_plantilla(equipo_1);

console.log(equipo_1);
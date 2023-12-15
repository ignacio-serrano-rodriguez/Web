/* pregunta: Necesito saber del equipo quien tiene el caracter 'm' en su nombre
¿Cómo lo podemos hacer? */
// solución: usar el método (filter)
	
function quien_tiene_esta_cadena(equipo) 
{
	let subequipo = equipo.filter(tiene_cadena);
	return subequipo;
}

function tiene_cadena(jugador) 
{
	return (jugador.includes("m"));
}


let equipo_1 = ["carlos", "samu", "nacho", "lidia", "manuel"];
console.log(equipo_1);

console.log(quien_tiene_esta_cadena(equipo_1));
/*
(lastIndexOf)
Dime el último alumno de la lista que tenga 18 años
Lista de alumnos y sus edades: alumno1 y 18, alumno2 y 17, alumno3 y 16, alumno4 y 18.
*/

let cadena = "alumno1 y 18, alumno2 y 17, alumno3 y 16, alumno4 y 18";
console.log(cadena);

for (let alumno of cadena.split(",")) 
{
	if(alumno.split("y")[1] == 18)
	{
		console.log(alumno.split("y")[0]);
	}	
}
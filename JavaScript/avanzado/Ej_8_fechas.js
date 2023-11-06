/*
Crea un programa en JavaScript que realice las siguientes operaciones con fechas:
1. Muestra la fecha y hora actual.
2. Convierte el día de hoy en formato de cadena en un objeto de fecha. Utiliza algo similar a esto: 
let fechaCadena = new Date().toISOString();
let fechaObjeto = new Date(fechaCadena); 
3. Obtén el día de la semana de tu fecha de nacimiento y muéstralo.
4. Obtén el año actual y muéstralo.
5. Añade 3 días a la fecha actual y muestra la nueva fecha.
6. Establece el mes en "Abril" en la fecha actual y muestra la fecha resultante.
7. Establece la hora en "15:30:00" en la fecha actual y muestra la fecha y hora resultante.
8. Establece el año en 2024 en la fecha actual y muestra la fecha resultante.
*/

let fecha = new Date();
let fechaCadena = fecha.toDateString();
let fechaObjecto = new Date(fechaCadena);
let fechaNacimiento = new Date("2000-03-24");

console.log("1. Muestra la fecha y hora actual: " + fechaCadena + " " + fecha.getHours());
console.log("2. Convierte el día de hoy en formato de cadena en un objeto de fecha: " + fechaObjecto);
console.log("3. Obtén el día de la semana de tu fecha de nacimiento y muéstralo: " + fechaNacimiento.getDay());
console.log("4. Obtén el año actual y muéstralo: " + fecha.getFullYear());

fecha.setDate(fecha.getDate() + 3);
console.log("5. Añade 3 días a la fecha actual y muestra la nueva fecha: " + fecha);

fecha = new Date();
fecha.setMonth(3);
console.log("6. Establece el mes en \"Abril\" en la fecha actual y muestra la fecha resultante: " + fecha);

fecha = new Date();
fecha.setHours(15);
fecha.setMinutes(30);
console.log("7. Establece la hora en \"15:30:00\" en la fecha actual y muestra la fecha y hora resultante: " + fecha);

fecha = new Date();
fecha.setFullYear(2024);
console.log("8. Establece el año en 2024 en la fecha actual y muestra la fecha resultante: " + fecha);
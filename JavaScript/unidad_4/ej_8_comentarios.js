// Declara e inicializa un array con edades.
let edades = [22, 35, 18, 27, 30];
// Genera una condición mediante la función flecha que obtiene la edad que sea mayor o igual a 30.
let condicion = edad => edad >= 30;
// Declara e inicializa una variable con el primero valor del array que cumple la condición descrita.
let indice = edades.findIndex(condicion);
// Muestra el valor de la variable generada.
console.log("El indice del primer elemento mayor o igual a 30 es: " + indice);
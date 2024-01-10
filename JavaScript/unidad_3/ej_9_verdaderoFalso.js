let cadena_1;
let cadena_2;
let resultado = 0;

// PREGUNTA 1. Las comillas simples y dobles funcionan de la misma manera en JavaScript.
// Verdadero, se usan igual.
console.log('hola mundo (comilla simple)');
console.log('hola mundo (comilla doble)');

// PREGUNTA 2. Para crear una cadena multilínea en JavaScript, se utilizan comillas simples. 
// Falso, se utilizan comillas inversas "backsticks" (`) para multiples líneas e introducir parámetros.
cadena_1 = `este
es
el número
${resultado}`;
console.log(cadena_1);

// PREGUNTA 3. La función toUpperCase() convierte una cadena a minúsculas.
// Falso, la convierte a mayúsuculas; toLowerCase() es para convertir a minúsculas.
cadena_1 = "hOlA mUnDo";
console.log(cadena_1);
console.log(cadena_1.toUpperCase() + "\n");
console.log(cadena_1.toLocaleLowerCase() + "\n");

// PREGUNTA 4. El método substring en JavaScript permite especificar una posición negativa como argumento.
// Falso, contaría como si fuera 0 y los dos parámetros no los permite. 
console.log(cadena_1);
// la posición 4 ya no la muestra, la que corresponde al indice 3
console.log(cadena_1.substring(0,3));
console.log(cadena_1.substring(-2));
console.log("error:" + cadena_1.substring(-2, -4));

/* PREGUNTA 5. El método localeCompare se utiliza para comparar cadenas en JavaScript y tiene en cuenta 
las reglas del idioma. */
// Verdadero, pero respecto al idioma del navegador, no del atributo "lang" del html.
cadena_1 = "a";
cadena_2 = "b";
resultado = cadena_1.localeCompare(cadena_2);
console.log(resultado);

/* PREGUNTA 6. El método includes verifica si una cadena contiene otra cadena, pero es sensible a 
mayúsculas y minúsculas. */
// Verdadero, porque es "case sensitive".
cadena_1 = "hola mundo";
cadena_2 = "MUNDO";
resultado = cadena_1.includes(cadena_2);
console.log(resultado);
cadena_2 = "mundo";
resultado = cadena_1.includes(cadena_2);
console.log(resultado);

// PREGUNTA 7. El método slice no permite argumentos negativos.
// Verdadero, contando desde el final de la cadena.
console.log(cadena_1);
console.log(cadena_1.slice(0,3));
console.log(cadena_1.slice(1));
console.log(cadena_1.slice(-2));
console.log(cadena_1.slice(1, 6));
console.log(cadena_1.slice(-4, cadena_1.length));

// PREGUNTA 8. El método trim se utiliza para agregar espacios al comienzo y al final de una cadena.
// Falso, elimina todos los espacios al principio y final de la cadena
cadena_1 = "       Hello World!        ";
console.log(cadena_1);
// Habría que mostrarlo en el terminal para comprobarlo porque quokka no tiene en cuenta los espacios
console.log(cadena_1.trim());

// PREGUNTA 9. El método codePointAt devuelve el código de carácter en una posición dada de la cadena.
// Verdadero.
cadena_1 = "hola mundo";
console.log(cadena_1.codePointAt(0));

// PREGUNTA 10. Para obtener el valor numérico de la cadena "$50", se puede utilizar parseInt("$50").
// Falso, porque devuelve NaN. Devuelve int hasta que encuentra un caracter no numerico.
console.log(parseInt("10$50"));
console.log(parseInt("50$10"));
console.log(parseInt("€50"));
console.log(parseInt("50€"));
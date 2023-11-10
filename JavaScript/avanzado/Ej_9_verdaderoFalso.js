let cadena_1;
let cadena_2;
let resultado;

/* 1. Las comillas simples y dobles funcionan de la misma manera en JavaScript. */
// Verdadero, porque se usan para lo mismo.
console.log("PREGUNTA 1");
console.log('hola mundo 2\n');

/* 2. Para crear una cadena multilínea en JavaScript, se utilizan comillas simples. */
// Falso, porque se utiliza ` para multiples líneas.
console.log("PREGUNTA 2");
cadena_1 = `hola
me
llamo
nacho\n`;
console.log(cadena_1);

/* 3. La función toUpperCase() convierte una cadena a minúsculas.  */
// Falso, porque la convierte a mayúsuculas.
console.log("PREGUNTA 3");
cadena_1 = "hola mundo";
console.log(cadena_1);
console.log(cadena_1.toUpperCase() + "\n");

/* 4. El método substring en JavaScript permite especificar una posición negativa como argumento. */
// Falso, no lo permite. 
console.log("PREGUNTA 4");
console.log(cadena_1);
console.log(cadena_1.substring(0,3));
console.log(cadena_1.substring(-2));
console.log("error:" + cadena_1.substring(-2, -4)+ "\n");

/* 5. El método localeCompare se utiliza para comparar cadenas en JavaScript y tiene en cuenta las reglas del idioma. */
// Verdadero, pero respecto al idioma del navegador, no del html.
console.log("PREGUNTA 5");
cadena_1 = "a";
cadena_2 = "b";
resultado = cadena_1.localeCompare(cadena_2);
console.log(resultado + "\n");

/* 6. El método includes verifica si una cadena contiene otra cadena, pero es sensible a mayúsculas y minúsculas. */
// Verdadero, porque es "case sensitive".
console.log("PREGUNTA 6");
cadena_1 = "hola mundo";
cadena_2 = "MUNDO";
resultado = cadena_1.includes(cadena_2);
console.log(resultado + "\n");

/* 7. El método slice no permite argumentos negativos. */
// Verdadero, se cuenta al revés.
console.log("PREGUNTA 7");
console.log(cadena_1);
console.log(cadena_1.slice(0,3));
console.log(cadena_1.slice(1));
console.log(cadena_1.slice(-2));
console.log(cadena_1.slice(-2, -4));

/* 8. El método trim se utiliza para agregar espacios al comienzo y al final de una cadena. */
// Falso, porque elimina los espacios de forma predeterminada.
console.log("PREGUNTA 8");
cadena_1 = "       Hello World!        ";
console.log(cadena_1);
console.log(cadena_1.trim() + "\n");

/* 9. El método codePointAt devuelve el código de carácter en una posición dada de la cadena. */
// Verdadero.
console.log("PREGUNTA 9");
cadena_1 = "hola mundo";
console.log(cadena_1.codePointAt(0) + "\n");

/* 10. Para obtener el valor numérico de la cadena "$50", se puede utilizar parseInt("$50"). */
// Falso, porque devuelve NaN. Devuelve int hasta que encuentra un caracter no numerico.
console.log("PREGUNTA 10");
console.log(parseInt("$50"));
console.log(parseInt("50$"));
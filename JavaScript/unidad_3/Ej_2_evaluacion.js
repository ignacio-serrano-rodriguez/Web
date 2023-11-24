/*
Ejercicio: Conversión y evaluación de datos
Escribe una función llamada evaluarDato que reciba un valor y determine qué tipo de dato es.
La función debe realizar lo siguiente (siendo X el número recibido):
Si el valor es un número finito, imprime "X es un número finito.".
Si el valor es no es un número, imprime "X no es un número".
Si el valor es una cadena que representa un número entero, imprime "X es un número entero.".
Si el valor es una cadena que representa un número decimal, imprime "X es un número decimal.".
Si ninguna de las condiciones anteriores se cumple, imprime "X es un tipo de dato desconocido."
*/

function evaluarDato(num) 
{   
    let resultado;

    if (typeof num == "boolean")
        resultado = "es de tipo booleano.";

    else if (num == parseInt(num))
        resultado = "es un número entero.";
    
    else if (num == parseFloat(num))
        resultado = "es un número decimal.";

    else if (typeof num == "string")
    resultado = "es una cadena.";

    else if (isNaN(num))
        resultado = "es Nan.";

    else
        resultado = "es de tipo desconocido";

    return resultado;
}

console.log(evaluarDato(42));       // es un número entero.
console.log(evaluarDato(NaN));      // es NaN.
console.log(evaluarDato("123"));    // es un número entero.
console.log(evaluarDato("3.14"));   // es un número decimal.
console.log(evaluarDato(true));     // es de tipo desconocido.
console.log(evaluarDato("hola"));   // es una cadena.
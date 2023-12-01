/*
Ejercicio: Conversión y evaluación de datos
Escribe una función llamada evaluarDato que reciba un valor y determine qué tipo de dato es.
La función debe realizar lo siguiente (siendo X el número recibido):
Si el valor es de tipo booleano, imprime "X es de tipo booleano.".
Si el valor es no es un número, imprime "X no es un número".
Si el valor es una cadena que representa un número entero, imprime "X es un número entero.".
Si el valor es una cadena que representa un número decimal, imprime "X es un número decimal.".
Si ninguna de las condiciones anteriores se cumple, imprime "X es un tipo de dato desconocido."
*/

function evaluarDato(num) 
{   
    let resultado;

    if (num == parseInt(num))
        resultado = `(${num}) es un número entero.`;
    
    else if (num == parseFloat(num))
        resultado = `(${num}) es un número decimal.`;

    else if (typeof num == "boolean")
        resultado = `(${num}) es de tipo booleano.`;    

    else if (typeof num == "string")
    resultado = `(${num}) es una cadena.`;

    else if (isNaN(num))
        resultado = `(${num}) no es número.`;

    else
        resultado = `(${num}) es de tipo desconocido`;

    return resultado;
}

// es un número entero.
console.log(evaluarDato(42));
// es NaN.    
console.log(evaluarDato(NaN));
// es un número entero.     
console.log(evaluarDato("123"));
// es un número decimal.  
console.log(evaluarDato("3.14"));
// es de tipo desconocido.
console.log(evaluarDato(true));
// es una cadena.   
console.log(evaluarDato("hola"));
/*
Calcular la suma de dos números y manejar situaciones especiales.
Escribe una función llamada calcularSuma que reciba dos argumentos, num1 y num2, que representan números. 
La función debe realizar la siguiente lógica:
Si tanto num1 como num2 son números válidos, suma los dos números y devuelve el resultado.
Si alguno de los dos números no es válido, la función debe devolver el mensaje de error: "Uno de los 
números no es válido."
Si ambos números son null, la función debe devolver el mensaje de error: "Ambos números son nulos."
Si ambos números son undefined, la función debe devolver el mensaje de error: "Ambos números son indefinidos."
*/

function calcularSuma(num1, num2) 
{   
    let resultado;

    if (num1 === undefined && num2 === undefined)
        resultado = "Ambos números son indefinidos.";
    
    else if (num1 === null && num2 === null)
        resultado = "Ambos números son nulos."; 
    
    else if (isNaN(parseInt(num1)) || isNaN(parseInt(num2)))
        resultado = "Uno de los números no es válido.";
    
    else
        resultado = num1+num2;

    return resultado;
}

console.log(calcularSuma(5,3));                 // 8
console.log(calcularSuma(10,null));             // Uno de los números no es válido.
console.log(calcularSuma(undefined,undefined)); // Ambos números son indefinidos.
console.log(calcularSuma(null,null));           // Ambos números son nulos.


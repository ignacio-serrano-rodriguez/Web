/*
Escribe una función llamada dividirNumeros que reciba dos parámetros, numero1 y numero2. 
La función deberá realizar la división de numero1 entre numero2 y devolver el resultado. 
Debes manejar posibles errores que puedan ocurrir durante la operación y devolver un mensaje 
de error específico para cada tipo de error. Las condiciones para manejar cada tipo de error son:
Si numero2 es igual a 0, la función deberá lanzar un RangeError con el mensaje "La división por 
cero no está permitida."
Si numero2 no es un número (por ejemplo, es una cadena de texto), la función deberá lanzar un 
TypeError con el mensaje "El segundo parámetro no es un número válido."
Si numero1 o numero2 no son proporcionados como argumentos cuando se llama a la función, la 
función deberá lanzar un ReferenceError con el mensaje "Ambos números son necesarios para realizar 
la división."
Si no se produce ningún error, la función deberá devolver el resultado de la división.
Utiliza try-catch para capturar los errores.
*/

function dividirNumeros(numero1, numero2) 
{   
    let resultado = numero1 / numero2;

    if(numero2 == 0)
    {
        throw new RangeError("La división por cero no está permitida. (RangeError)");
    }
    
    else if (numero1 === undefined || numero2 === undefined)
    {
        throw new ReferenceError("Ambos números son necesarios para realizar la división. (TypeError)");
    }
    else
    {
        resultado = numero1 / numero2;
    }

    return resultado;
}
    

try 
{
    console.log(dividirNumeros(10, 2));         // 5
    console.log(dividirNumeros(5, 0));          // RangeError.
    console.log(dividirNumeros("cadena", 3));   // TypeError.
    console.log(dividirNumeros(8));             // ReferenceError.
} 
catch (error) 
{
    console.log(error.message);
}
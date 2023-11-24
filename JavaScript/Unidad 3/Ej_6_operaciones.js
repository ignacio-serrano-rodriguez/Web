/*
Ejercicio: Operaciones matemáticas y de conversión
Crea una función llamada operacionesMatematicas que realice varias operaciones matemáticas en números enteros. 
La función debe aceptar 3 números enteros como argumentos y realizar las siguientes tareas:

1. Sumar los tres números.
2. Restar el tercer número del resultado de la suma.
3. Calcular el valor absoluto del resultado anterior.
4. Redondear el resultado a un número entero.
5. Truncar el resultado a un número entero.
6. Calcular el valor máximo entre el resultado de la suma truncado y 10.
7. Calcular el valor mínimo entre el resultado de la suma truncado y 100.
8. Convertir el resultado de la suma a una cadena de texto.

La función debe mostrar por consola cada resultado.
*/

function operacionesMatematicas(entero_1, entero_2, entero_3) 
{
    let resultado;
    let truncado;
    let redondeado;
    let cadena = "";

    resultado =  entero_1 + entero_2 + entero_3;
    console.log("1. Sumar los tres números: " + resultado);

    resultado -= entero_3;
    console.log("2. Restar el tercer número del resultado de la suma: " + resultado);

    if(resultado < 0)
        resultado *= -1;
        console.log("3. Calcular el valor absoluto del resultado anterior: " + resultado);
    
    redondeado = Math.round(resultado);
    console.log("4. Redondear el resultado a un número entero: " + redondeado);

    truncado = Math.trunc(resultado);
    console.log("5. Truncar el resultado a un número entero: " + truncado);

    resultado = 10 - truncado;
    if(resultado < 0)
        resultado *= -1;
    console.log("6. Calcular el valor máximo entre el resultado de la suma truncado y 10: " + resultado);

    resultado = 100 - truncado;
    if(resultado < 0)
        resultado *= -1;
    console.log("7. Calcular el valor mínimo entre el resultado de la suma truncado y 100: " + resultado);

    cadena += resultado;
    console.log("8. Convertir el resultado de la suma a una cadena de texto: " + cadena);

    return (1);
}

operacionesMatematicas(1,2,3);

operacionesMatematicas(1,2,3);
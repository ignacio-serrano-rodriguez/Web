/*
Ejercicio: Operaciones matemáticas y de conversión
Crea una función llamada operacionesMatematicas que realice varias operaciones matemáticas en 
números enteros. 
La función debe aceptar 3 números enteros como argumentos y realizar las siguientes tareas:

1. Sumar los tres números.
2. Restar el tercer número del resultado de la suma.
3. Calcular el valor absoluto del resultado anterior.
4. Redondear el resultado a un número entero.
5. Truncar el resultado a un número entero.
6. Calcular el valor máximo entre el resultado de la suma truncado y 10.
7. Calcular el valor mínimo entre el resultado de la suma truncado y 100.
8. Convertir el resultado de la suma a una cadena de texto.

La función debe mostrar por consola cada resultado (comprobar lo console.log dentro de la función)
*/

function operacionesMatematicas(entero_1, entero_2, entero_3) 
{
    // variables de tipo int o float
    let resultado, truncado, redondeado, maximo, minimo;
    // variable de tipo string
    let cadena="";

    console.log(`(1) ${entero_1} + ${entero_2} + ${entero_3} = ${resultado =  entero_1 + entero_2 + entero_3}`);
    console.log(`(2) ${resultado} - 3 = ${resultado -= entero_3}`);

    if(resultado < 0)
        resultado *= -1;
    console.log(`(3) valor absoluto del resultado: ${resultado}`);

    console.log(`(4) resultado redondeado a un número entero: ${redondeado = Math.round(resultado)}`);
    console.log(`(5). resultado truncado a un número entero: ${truncado = Math.trunc(resultado)}`);
    console.log(`(6) valor máximo entre el resultado de la suma truncado y 10: ${maximo = 10 - truncado}`);
    console.log(`(7) valor mínimo entre el resultado de la suma truncado y 100: ${minimo = 100 - truncado}`);
    console.log(`(8) ${cadena += resultado} es un dato de tipo "${typeof cadena}"`);
}

operacionesMatematicas(-5.5,-2,3);
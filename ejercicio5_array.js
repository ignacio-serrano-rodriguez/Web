/*
A partir del siguiente array, crea una página web HTML que:
var valores=[true, 5, false, "hola", "adiós", 2];

    1. Determina cuál de los dos elementos de texto es mayor (por longitud).

    2. Utilizando exclusivamente los dos valores booleanos del array, determina los operadores 
    necesarios para obtener un resultado true y otro resultado false.

    3. Determina el resultado de las cinco operaciones matemáticas realizadas con los dos 
    elementos numéricos (suma, resta, multiplicación, división y módulo).
    La página debe tener 3 botones, y mostrar por consola los resultados del apartado 1, 2 o 3 
    según se pulsen los botones.
*/

var valores = [true, 5, false, "hola", "adios", 2];

// 1. 
function part1() 
{
    if(valores[3].length > valores[4].length)
    {
        console.log(valores[3] + " es mayor que " + valores[4]);
    }
    else
    {
        console.log(valores[4] + " es mayor que " + valores[3]);
    }

    console.log();
}

// 2.
function part2() 
{
    // AND logic operator to get "true" boolean value
    console.log((valores[0] || valores[2]));
    // OR logic operator to get "true" boolean value
    console.log((valores[0] && valores[2]));

    console.log();
}

// 3.
function part3() 
{
    console.log("(suma) 5 + 2 = " + (valores[1]+valores[5]));
    console.log("(resta) 5 - 2 = " + (valores[1]-valores[5]));
    console.log("(multiplicación) 5 * 2 = " + (valores[1]*valores[5]));
    console.log("(división) 5 / 2 = " + (valores[1]/valores[5]));
    console.log("(módulo) 5 % 2 = " + (valores[1]%valores[5]));
    console.log("(elevación) 5 ** 2 = " + (valores[1]**valores[5]));

    console.log();
}

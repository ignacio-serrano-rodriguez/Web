/*
Ejercicio 3
El factorial de un número entero n (escrito como n!) es una operación matemática que consiste en multiplicar
todos los factores n x (n-1) x (n-2) x ... x 1 .
Por ejemplo, el factorial de 5 sería: 5! = 5 x 4 x 3 x 2 x 1 = 120.
Crea una página web HTML que solicite a través de un input un número y, al pulsar un botón, muestre un
pop-up con el resultado de su factorial.
*/

function factorial() 
{
    // Se obtiene el valor del input del usuario y se transforma a entero.
    let givenNumber = parseInt(document.getElementById("givenNumber").value);
    
    // Se inicializa en 1 la variable que vamos a utilizar para almacenar el resultado del factorial. 
    let result = 1;

    // Desde el número 2 hasta el número introducido por el usuario incluidos, multiplicamos al resultado, el contador i. 
    for (let i = 2; i <= givenNumber; i++) 
    {
        result *= i;
    }

    // Mostramos por pantalla el valor del factorial.
    alert(result);
}
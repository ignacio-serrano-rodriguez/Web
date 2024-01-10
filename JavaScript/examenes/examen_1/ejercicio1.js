/*
Ejercicio 1
Crea una página web HTML que pida un número y, al pulsar un botón, muestre la tabla de multiplicar de
este número desde el 0 hasta el 10, en un pop-up. El número introducido puede ser cualquiera.
El resultado debe seguir este formato (por ej., para el número 2):
*/

function multiply_table() 
{
    // Obtiene un valor del input del html por ID, lo transforma a entero y lo guarda en una variable en ámbito de bloque con let.
    let givenNumber = parseInt(document.getElementById("givenNumber").value);

    // Comprueba si el valor introducido por el usuario es un número o no, para poder gestionar errores de tipo.
    if(isNaN(givenNumber))
    {
        alert("El valor introducido no es un número.");
    }

    else
    {
        // Inicializamos una variable local de una cadena vacia donde almacenaremos el resultado.
        let resultedString = "";
    
        // Recorremos del 0 al 10 incluidos y realizamos las operaciones pertinentes almacenándolas en la variable resultedString.
        for (let i = 0; i <= 10; i++) 
        {
            resultedString += givenNumber + "x" + i + "=" + (givenNumber*i) + "\n";
        }

        // Mostramos por pantalla la cadena almacenada en la variable resultedString.
        alert(resultedString); 
    }
}
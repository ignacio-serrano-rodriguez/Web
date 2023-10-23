/*
Crea una página web HTML que pida al usuario un número al pulsar un botón muestre un pop-up 
indicando si es par o impar.
Ej: “El número 2 es par”.
*/

function even_odd()
{
    let number = parseInt(document.getElementById("number").value);
    
    if((number%2) == 0)
    {
        alert("El número " + number + " es par.");
    }
    else
    {
        alert("El número " + number +  " es impar.");
    }
}
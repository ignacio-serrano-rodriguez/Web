/*
Crea una página web HTML con un formulario que permita a los usuarios ingresar un valor en un 
campo de texto. Utiliza JavaScript para verificar el tipo de dato ingresado 
(número, cadena, booleano, etc.). Muestra por consola el tipo de dato, al pulsar un botón.
*/

function value_check()
{
    let givenValue = document.getElementById("givenValue").value;
    let dateGenerated = new Date(givenValue);
    
    if (!isNaN(givenValue))
    {
        console.log("Número.");
    }
    else if (givenValue == "true" || givenValue == 'false')
    {
        console.log("Booleano.");
    }
    else if (dateGenerated != "Invalid Date")
    {
        console.log("Fecha.");
    }
    else
    {
        console.log("Cadena.");
    }
}
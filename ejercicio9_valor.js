/*
Crea una página web HTML con un formulario que permita a los usuarios ingresar un valor en un 
campo de texto. Utiliza JavaScript para verificar el tipo de dato ingresado 
(número, cadena, booleano, etc.). Muestra por consola el tipo de dato, al pulsar un botón.
*/

function valueCheck()
{
    let givenValue = document.getElementById("givenValue").value;
    
    console.log(typeof givenValue);
}
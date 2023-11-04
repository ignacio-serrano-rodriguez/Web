/*
Crea una página web HTML que reciba una cadena de texto. Debes mostrar el resultado en un único 
por pop-up, transformando las letras a mayúsculas y un sólo carácter por línea. 
Para la resolución utiliza dos funciones: convertirAMayusculas y mostrarResultado.
No utilices prompt.
*/

function convertirAMayusculas(givenString) 
{
    return(givenString.toUpperCase());
}

function mostrarResultado() 
{
    let givenString = document.getElementById("givenString").value;
    resultedString = convertirAMayusculas(givenString).replaceAll(' ','').split("").join("\n");
    alert(resultedString);
}
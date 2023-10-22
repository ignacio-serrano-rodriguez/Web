/*
Crea una página web HTML que determine si una cadena de texto solicitada al usuario es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
Muestra el resultado en un pop-up.
*/

function check()
{
    // Store the given string in a local variable.
    let characters = document.getElementById("characters").value;

    // Transform the string to lowercase and Delete all blanck spaces in the string.
    characters = characters.toLowerCase().replaceAll(' ','');

    // Transform the string in array, reverse it and transform it again in string
    charactersInversed = characters.split("").reverse().join("");

    if(characters == charactersInversed)
    {
        alert("Es un palíndromo.");
    }
    else
    {
        alert("No es un palíndromo.");
    }
}
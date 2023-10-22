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
        alert("No es un palíndromo");
    }
}
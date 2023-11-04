/*
Crea una página web HTML que pida una frase y cambie todas las letras "e" a "E" mayúsculas. 
El resto debe dejarlas tal cual están.
Muestra la frase resultado en un div como este:
<p id="resultado"></p>
*/

function transform() 
{
    let givenSentence = document.getElementById("givenSentence").value;
    givenSentence = givenSentence.replaceAll('e','E');
    document.getElementById("resultado").innerHTML = givenSentence;
}
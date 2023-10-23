/*
Crea una página web HTML que solicite 3 palabras y forme una nueva palabra con la primera letra 
de cada una de las anteriores, ordenándolas ascendentemente según el alfabeto. Utiliza la función 
propia de las cadenas para la ordenación.
*/

function new_word() 
{
    let givenWord_1 = document.getElementById("givenWord_1").value;
    let givenWord_2 = document.getElementById("givenWord_2").value;
    let givenWord_3 = document.getElementById("givenWord_3").value;
    let newWord = [];

    newWord.push(givenWord_1.toLowerCase().replaceAll(' ','').split("")[0]);
    newWord.push(givenWord_2.toLowerCase().replaceAll(' ','').split("")[0]);
    newWord.push(givenWord_3.toLowerCase().replaceAll(' ','').split("")[0]);

    newWord = newWord.sort().join("");
    
    alert(newWord);        
}
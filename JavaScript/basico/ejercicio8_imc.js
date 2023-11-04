/*
Crea una página web HTML que permita a los usuarios calcular su Índice de Masa Corporal (IMC). 
Debe incluir un formulario que solicite al usuario su peso (en kg) y altura (en metros). 
Utiliza JavaScript para calcular el IMC y mostrar el resultado. Utiliza estructuras de control 
para determinar si el IMC es bajo (<18,5), normal (entre 18,5 y 24,9) o alto (>=25). 
Muestra el resultado en un pop-up.
imc = kg / m²
*/

function imc_calculator()
{
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    
    let imc = weight / height**2;

    if(imc < 18.5)
    {
        alert("El IMC es bajo.");
    }
    else if(imc >= 25)
    {
        alert("El IMC es alto.");
    }
    else
    {
        alert ("El IMC es normal.");
    }
}
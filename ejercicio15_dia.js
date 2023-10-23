/*
Crea una página web HTML que solicite el día de la semana y pulse un botón que devuelva un 
pop-up que muestre “Es lectivo” si ha introducido de lunes a viernes, “No es lectivo” si 
ha introducido sábado o domingo, y “Día incorrecto” si introduce otra palabra. 
Utiliza la estructura switch para resolverlo.
*/

function day_type() 
{
    let givenDay = document.getElementById("givenDay").value;

    switch (givenDay) 
    {
        case "lunes": case "martes": case "miércoles": case "jueves": case "viernes":
            alert("Es lectivo.");
            break;

        case "sábado": case "domingo":
            alert("No es lectivo.");
            break;
    
        default:
            alert("Día introducido inexistente.");
            break;
    }
}
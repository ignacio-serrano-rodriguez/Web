/*
Haz una segunda versión del ejercicio anterior, esta vez sin preguntar la hora. 
En  su lugar, tendrás que obtenerla desde el código con un objeto de JavaScript. 
*/

function greet() 
{
    let userName = document.getElementById("userName").value;

    // It creates a new object Date, use the method getHours and store it in a variable.
    let hourTime = new Date().getHours();

    console.log("hourTime: " + hourTime);

    if (hourTime >= 0 && hourTime <= 12)
    {
        alert("¡Buenos días " + userName + "!");
    }
    else if (hourTime >= 13 && hourTime <= 20)
    {
        alert("¡Buenas tardes " + userName + "!");
    }
    else if (hourTime >= 21 && hourTime <= 23)
    {
        alert("¡Buenas noches " + userName + "!");
    }
    else
    {
        alert(userName + ", la hora introducida es incorrecta.");
    }
}
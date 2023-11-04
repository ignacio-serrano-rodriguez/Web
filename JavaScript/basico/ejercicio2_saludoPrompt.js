/*
Realiza una página web HTML que solicite el nombre del usuario y le pregunte qué hora es 
(sin minutos ni segundos) y un botón que diga “Salúdame”. Al pulsarlo, debe mostrar un pop-up 
con un saludo distinguiendo según la hora del día para saber si es por la mañana 
(entre las 0 y las 12), por la tarde (entre las 13 y las 20) 
o por la noche (resto de casos). 

Ej: 	¡Buenos días María!
	    ¡Buenas tardes Maria!
	    ¡Buenas noches María!

Versión Prompt.
*/

let userName = prompt("Introduce tu nombre");
let hourTime = parseInt(prompt("Introduce la hora"));

function greet() 
{
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
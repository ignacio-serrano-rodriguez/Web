let userName = prompt("Introduce tu nombre");
let hourTime = parseInt(prompt("Que hora es"));

function greet() 
{
    let day;

    if(hourTime >= 0 && hourTime <= 12)
    {
        day = "días";
    }
    else if(hourTime >= 13 && hourTime <= 20)
    {
        day = "tardes";
    }
    else
    {
        day = "noches";
    }


    alert("¡Buenos " + day + " " + userName + "!");
}
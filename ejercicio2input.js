function greet() 
{
    let userName = document.getElementById("userName").value;
    let hourTime = parseInt(document.getElementById("hourTime").value);

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
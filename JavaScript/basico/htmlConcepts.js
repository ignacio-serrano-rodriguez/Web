function funcion_1() 
{
    let userInput = document.getElementById("userInput").value;

    let date = new Date();
    console.log("hora actual: " + date.getHours());

    document.getElementById("p1").innerHTML = "userInput: " + userInput;
}

function funcion_2()
{
    let optionSelected = document.getElementById("optionSelected").value;

    document.getElementById("p2").innerHTML = "optionSelected: " + optionSelected;
}
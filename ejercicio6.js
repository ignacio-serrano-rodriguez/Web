function parImpar()
{
    let number = parseInt(document.getElementById("number").value);
    
    if((number%2) == 0)
    {
        alert("El número " + number + " es par.");
    }
    else
    {
        alert("El número " + number +  " es impar.");
    }
}


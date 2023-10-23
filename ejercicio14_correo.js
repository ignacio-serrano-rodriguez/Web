/*
Crea una página web HTML que solicite el nombre, apellido 1 y apellido 2 en el mismo input, y que, 
al pulsar el botón “Generar correo”, devuelva en un pop-up el correo electrónico de la persona, 
que será la inicial de su nombre, las tres primeras letras del primer apellido y las tres 
últimas letras del segundo apellido, seguido del dominio @dwec.es. En el input debe aparecer 
un nombre y apellidos de ejemplo (usa placeholder).
Por ejemplo, para Ana Ruiz Martínez será:
aruinez@dwec.es
*/

function new_mail() 
{
    let givenInput = document.getElementById("givenInput").value;
    givenInput = givenInput.toLowerCase().split(" ");
    let name = givenInput[0].split("");
    let surname_1 = givenInput[1].split("");
    let surname_2 = givenInput[2].split("");
    let mail = [];
    mail.push(name[0])
    mail.push(surname_1[0])
    mail.push(surname_1[1])
    mail.push(surname_1[2])
    mail.push(surname_2[surname_2.length-3])
    mail.push(surname_2[surname_2.length-2])
    mail.push(surname_2[surname_2.length-1])
    mail.push("@dwec.es")
    mail = mail.join("");
    alert(mail);
}
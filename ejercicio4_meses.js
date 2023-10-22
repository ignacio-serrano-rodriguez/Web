/*
Crea un array llamado “meses” y que almacene el nombre de los doce meses del año. 
Realiza una página web HTML que al cargarse muestre por pantalla los doce nombres 
(cada uno en una ventana distinta) utilizando la función alert().
*/

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (i in months)
{
    alert(months[i]);
}
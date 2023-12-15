<?php
/*
Escribe un script que obtenga el mes actual y luego imprima la estación a la que pertenece usando 
if else y elseif. No te preocupes por la fecha exacta en la que se produce el cambio de estación. 
Hazlo teniendo en cuenta que junio, julio y agosto es verano; septiembre, octubre y noviembre es otoño; 
diciembre, enero y febrero es invierno y marzo, abril y mayo es primavera. En la pantalla debe aparecer 
tanto el mes actual con su nombre y la estación a la que pertenece. Por ejemplo: “Actualmente estamos en 
el mes de Octubre, mes de otoño.”
*/

$mes = "julio";

if ($mes == "septiembre" || $mes == "octubre" || $mes == "noviembre") 
{
    echo "Actualmente estamos en el mes de $mes, mes de otoño.";
}
else if ($mes == "diciembre" || $mes == "enero" || $mes == "febrero") 
{
    echo "Actualmente estamos en el mes de $mes, mes de invierno.";
}
else if ($mes == "junio" || $mes == "julio" || $mes == "agosto")
{
    echo "Actualmente estamos en el mes de $mes, mes de verano.";
}
else if ($mes == "marzo" || $mes == "abril" || $mes == "mayo")
{
    echo "Actualmente estamos en el mes de $mes, mes de primavera.";
}
else
{
    echo "Mes introducido incorrecto.";
}
?>
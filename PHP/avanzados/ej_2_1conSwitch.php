<?php
/*
Crea un nuevo script que responda al mismo caso anterior pero con una estructura basada en switch. 
Utilizad los mismos animales.
*/

$animalIntroducido = "gaviota";

switch ($animalIntroducido) 
{
    case 'aguila': case 'paloma': case 'gaviota':
        echo "$animalIntroducido es un ave";
        break;

    case 'persona': case 'perro': case 'gato':
        echo "$animalIntroducido es un mamífero";
        break;

    case 'hormiga': case 'escarabajo':
        echo "$animalIntroducido es un insecto";
        break;

    case 'serpiente': case 'iguana': case 'lagarto':
        echo "$animalIntroducido es un reptil";
        break;

    default:
        echo "$animalIntroducido no pertenece a ningún tipo";
        break;
}
?>
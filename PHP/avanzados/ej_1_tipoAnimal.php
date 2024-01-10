<?php
/*
Crear un script que utilice ifelse encadenados para comprobar si una variable cuyo valor es un texto 
con un animal, es un mamífero, insecto u otro. Si no encuentra el tipo de animal, que muestre un mensaje 
parecido a “No se ha encontrado el tipo de animal: “persona””, si precisamente “persona” era el contenido 
de la variable. El script debe funcionar para reconocer al menos 10 animales.
Los grupos de animales en los que se puede clasificar los podéis consultar de la 
Wikipedia(https://es.wikipedia.org/wiki/Animalia)
*/

$animalIntroducido = "gato";

// USANDO ESTRUCTURA IF-ELSE

if($animalIntroducido == "aguila")
{
    echo "$animalIntroducido es un ave";
}
else if($animalIntroducido == "paloma")
{
    echo "$animalIntroducido es un ave";
}
else if($animalIntroducido == "gaviota")
{
    echo "$animalIntroducido es un ave";
}
else if($animalIntroducido == "persona")
{
    echo "$animalIntroducido es un mamífero";
}
else if($animalIntroducido == "perro")
{
    echo "$animalIntroducido es un mamífero";
}
else if($animalIntroducido == "gato")
{
    echo "$animalIntroducido es un mamífero";
}
else if($animalIntroducido == "hormiga")
{
    echo "$animalIntroducido es un insecto";
}
else if($animalIntroducido == "escarabajo")
{
    echo "$animalIntroducido es un insecto";
}
else if($animalIntroducido == "serpiente")
{
    echo "$animalIntroducido es un reptil";
}
else if($animalIntroducido == "iguana")
{
    echo "$animalIntroducido es un reptil";
}
else if($animalIntroducido == "lagarto")
{
    echo "$animalIntroducido es un reptil";
}
else
{
    echo "$animalIntroducido no pertenece a ningún tipo";
}


//USANDO ARRAY DE DOS DIMENSIONES
/*
$tipoAnimales = array 
("ave" => array ("aguila", "paloma", "gaviota"), 
"mamífero" => array ("persona", "perro", "gato"), 
"anfibio" => array ("rana", "sapo"), 
"reptil" => array ("serpiente", "iguana", "lagarto"), 
"pez" => array ("atún", "salmón", "dorada"), 
"insecto" => array ("cucaracha", "hormiga", "mosca"), 
"arácnido" => array ("araña"), 
"crustáceo" => array ("cangrejo"), 
"bivalvo" => array ("mejillón", "almeja")
);


$animalEncontrado = false;

foreach ($tipoAnimales as $tipo=>$animales) 
{
    foreach ($animales as $animal) 
    {
        if($animalIntroducido == $animal)
        {
            echo "$animalIntroducido es un $tipo";
            $animalEncontrado = true;
            break;
        }
    }
}

if($animalEncontrado == false)
{
    echo "$animalIntroducido no pertenece a ningún tipo";
}
*/

?>
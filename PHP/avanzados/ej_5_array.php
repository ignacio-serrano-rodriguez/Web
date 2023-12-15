<?php
/*
En primer lugar crea un array que contenga las siguientes ciudades:
Tokio, Ciudad de México, Nueva York , Mumbai, Seúl, Shangai, Madrid, Buenos Aires, Cairo y Londres.
Imprime las ciudades en el navegador separadas por comas usando un bucle para iterar sobre el array. 
Ordena el array y luego imprime los valores al navegador usando de nuevo un bucle.
A continuación agrega las siguientes ciudades al array:
Los Ángeles, Calcuta, Osaka y Beijing
Luego, ordena los valores nuevamente e imprímelos usando un bucle for.
*/
    
$ciudades = array("Tokio", "Ciudad de México", "Nueva York", "Mumbai", "Seúl", "Shangai", "Madrid", "Buenos Aires", "Cairo", "Londres");

echo "Sin ordenar: ";

for ($i=0; $i < count($ciudades); $i++) 
{ 
	echo "$ciudades[$i], ";
}

sort($ciudades);

echo "<br/><br/> Ordenado: ";

for ($i=0; $i < count($ciudades); $i++) 
{ 
	echo "$ciudades[$i], ";
}

array_push($ciudades,"Los Ángeles", "Calculta", "Osaka", "Beijing");

echo "<br/><br/> Nuevas ciudades: ";

for ($i=0; $i < count($ciudades); $i++) 
{ 
	echo "$ciudades[$i], ";
}

sort($ciudades);

echo "<br/><br/> Nuevas ciudades (ordenadas): ";

for ($i=0; $i < count($ciudades); $i++) 
{ 
	echo "$ciudades[$i], ";
}


?>


<?php
/*
En este ejercicio crearás dos archivos PHP. El primer archivos se llamará “Ej_8_formulario.php” y 
el segundo se llamará “Ej_8_saluda.php”. El primer archivo contendrá un formulario con un campo para 
que el usuario ingrese su nombre y un botón para enviar el formulario. El formulario debe utilizar 
el método POST para enviar los datos y publicará los resultados en un segundo archivo PHP. 
el segundo archivo debe procesar los datos del formulario e imprimir un saludo similar a este: 
“Hola, gracias por rellenar el formulario, Marta” si en el formulario introdujo “Marta”.
*/

echo 
    "<form action=\"Ej_8_saluda.php\" method=\"post\">

		<label for=\"nombre\"> nombre </label>
		<input type=\"text\" id=\"nombre\" name=\"nombre\"><br>

		<input type=\"submit\" value=\"Submit\">

    </form>"
;

?>
<?php
/*
Ejercicio para practicar la respuesta de un formulario en PHP. En este ejercicio usarás el script 
creado en el ejercicio anterior para calcular el área de un rectángulo y otros dos scripts más. 
El primer script se llamará “Ej_7_formulario.php” y el segundo “Ej_7_area.php”. El primer script 
debe tener un formulario con dos campos uno para el ancho y otro para la altura del rectángulo. 
El formulario debe usar el método POST y enviar los datos recopilados al segundo PHP. 
El segundo archivo PHP debe enviar un documento HTML bien formado cuyo título sea 
“Cuadrado de 47x25 (ancho x alto)”. En el body del documento HTML debe aparecer una etiqueta H1 
con el resultado del área.
*/

echo 
    "<form action=\"ej_7_area.php\" method=\"post\">

		<label for=\"ancho\"> ancho </label>
		<input type=\"text\" id=\"ancho\" name=\"ancho\"><br>

		<label for=\"altura\"> altura </label>
		<input type=\"text\" id=\"altura\" name=\"altura\"><br><br>

		<input type=\"submit\" value=\"Submit\">

    </form>"
;

?>
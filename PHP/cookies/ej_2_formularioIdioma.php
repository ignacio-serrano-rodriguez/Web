<?php
/*
Crea una página web con un formulario para elegir el idioma en el que se muestra: inglés o español. 
Almacena la elección del usuario con una cookie para que la siguiente vez que el usuario se conecta 
a la página aparezca directamente en su idioma. Si es la primera vez, aparecerá en español.
*/

if(!isset($_COOKIE['idioma']))
{
	setcookie('idioma', 'spanish', time() + 3600 * 24);
	$idioma = "spanish";
}
else
{
	$idioma = $_COOKIE['idioma'];
}

if($idioma == "spanish")
{
	echo 
		"<title> Página en español </title>

		<h1> Bienvenido a esta página </h1>
		
		<form action=\"Ej_2_cookieIdioma.php\" method=\"post\">

		<select name=\"idiomaElegido\" id=\"idiomaElegido\">
			<option value=\"english\">inglés</option>
			<option value=\"spanish\" selected>español</option>
		</select>

		<input type=\"submit\" value=\"Submit\">

		</form>"
	;
}
else if($idioma == "english")
{
	echo 
		"<title> Page in English </title>
		
		<h1> Welcome to this page </h1>
		
		<form action=\"Ej_2_cookieIdioma.php\" method=\"post\">

		<select name=\"idiomaElegido\" id=\"idiomaElegido\">
			<option value=\"english\" selected>English</option>
			<option value=\"spanish\">Spanish</option>
		</select>

		<input type=\"submit\" value=\"Submit\">

		</form>"
	;
}
?>
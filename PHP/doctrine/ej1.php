<?php
/*
Ejercicio 1: Crea una aplicación que reciba el código de un equipo y muestre todos sus datos. 
Si el equipo no existe mostrar un mensaje apropiado para el usuario.
*/
require_once "bootstrap.php";
require_once './src/Equipo.php';
echo"
	<input type='text' placeholder='Introduce un ID'/>
	<input type='button' value='Obtener equipo'/>
";


<?php

$idiomaElegido = $_POST["idiomaElegido"];
setcookie('idioma', $idiomaElegido, time() + 3600 * 24);
header('Location: Ej_2_formularioIdioma.php');
?>
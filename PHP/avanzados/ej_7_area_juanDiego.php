<?php
include "../ejer6.php";

$alto = $_POST["alto"];
$ancho = $_POST["ancho"];

$resultado = areaRectangulo($alto, $ancho);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Cuadrado de <?php echo "${ancho}x${alto}" ?> (ancho x alto)</title>
</head>
<body>
    <?php echo "$resultado" ?>
</body>
</html>
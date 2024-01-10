<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <title> Prácticas PHP </title>
        
    </head>

    <body>

        <?php

            // Array asociativos

            $navegadores = array("navegador1" => "Chrome", "navegador2" => "Firefox", "navegador3" => "Safari");
            $datos = array("nombre" => "Nacho", "edad" => 23, "profesor" => false, 3 => 100);

            echo "Navegador 3: " .  $navegadores["navegador3"];
            echo "<br/><br/>";

            echo "Nombre: " . $datos["nombre"] . "<br/>";
            echo "dato 3: " . $datos[3];

            echo "<br/> <br/>";     

            var_dump($navegadores);

            echo "<br/> <br/>";     

            var_dump($datos);


        ?>

    </body>

</html>
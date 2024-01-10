<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <title> Prácticas PHP </title>
        
    </head>

    <body>

        <?php

            // Arrays

            $dias = array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
            $numeros = array(10, 20, 30, 40);
            $nombres = array(10); # reserva 10 espacios
            $datos = array(); # no reserva ningún espacio
            $valores = [10,20,30,40];

            echo $dias[3];

            echo "<br/>";

            var_dump($dias);

            echo "<br/><br/>";

            var_dump($numeros);
        ?>

    </body>

</html>
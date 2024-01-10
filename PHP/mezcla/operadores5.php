<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <title> Prácticas PHP </title>
        
    </head>

    <body>

        <?php

            // Operadores lógicos

            $num1 = 5;
            $num2 = 10;
            $num3 = 5;
            $activo1 = true;
            $activo2 = false;

            if($num1 == 5 and $num1 == $num3)
            {
                echo "dentro del primer if";
            }

            echo "<br/>";

            if($num1 == 5 or $num1 == $num2)
            {
                echo "dentro del segundo if";
            }

            echo "<br/>";

            if($num1 == 5 xor $num1 == $num2)
            {
                echo "dentro del tercer if";
            }

            echo "<br/>";

            if($activo1)
            {
                echo "dentro del cuarto if";
            }
            else
            {
                echo "no está dentro del cuarto if";
            }

        ?>

    </body>

</html>
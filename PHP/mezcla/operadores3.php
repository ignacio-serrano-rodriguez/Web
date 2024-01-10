<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <title> Prácticas PHP </title>
        
    </head>

    <body>

        <?php

            $num1 = 5;
            $num2 = 10;
            $num3 = 5;
            $valor1 = "5";

            // Operadores de comparación

            if($num1 != $num2)
            {
                echo "num1 y num2 no son iguales" . "<br/>";
            }
            else
            {
                echo "son iguales" . "<br/>";
            }

            if($num1 !== $valor1)
            {
                echo "num1 y valor1 no son identicos";
            }
            else
            {
                echo "son idénticos";
            }

        ?>

    </body>

</html>
<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <title> Prácticas PHP </title>
        
    </head>

    <body>

        <?php

            $valor1 = 10;
            $valor2 = 5;

            function prueba()
            {
                global $valor1, $valor2;
                $valor3 = $valor1 + $valor2;
                echo $valor3;
            }
            
            prueba();

        ?>

    </body>

</html>
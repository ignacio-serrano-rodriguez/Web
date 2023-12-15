<?php
/*
Escribe una función llamada calcularPromedio que tome un array de números como argumento y 
devuelva el promedio de esos números. Luego, llama a la función con un array de números y 
muestra el resultado.
*/
echo "<title> ej 7 - funciones </title>";

    $numeros = array(1, 2, 3, 4, 5); 

    function calcularPromedio($numeros) 
    {
        $promedio = 0;

        foreach ($numeros as &$numero) 
        {
            $promedio += $numero;
        }

        $promedio = $promedio / count($numeros);
        return $promedio;
    }

    $resultado = calcularPromedio($numeros);
    echo "resultado: $resultado";
    
?>
<?php

    $array = [
        "111A" => "Juan Vera Ochoa",
        "112A" => "Maria Mesa Camilla",
        "113A" => "Ana Puertas Abierta",
    ];

    foreach ($array as $key => $value) 
    {
        echo $value . "</br>";
    }

    echo "<br/>";

    foreach ($array as $key => $value) 
    {
        echo "código " . $key . " nombre: ". $value . "</br>";
    }

?>
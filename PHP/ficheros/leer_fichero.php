<?php

    $ficheroRuta = "fichero.txt";

    if(file_exists($ficheroRuta))
    {
        echo "($ficheroRuta) existe<br/>";
        $ficheroTamanio = filesize($ficheroRuta);

        /*
            Existen los modos de apertura: r, r+, w, w+, a, a+
            (w)rite -> sobreescribe
            (a)dd -> añade
        */
        $fichero = fopen($ficheroRuta, "r");

        $ficheroContenido = fread($fichero, $ficheroTamanio);

        echo "ficheroContenido: $ficheroContenido<br/>";

        fclose($fichero);

    }
    else
    {
        echo "($ficheroRuta) no existe<br/>";
    }

?>
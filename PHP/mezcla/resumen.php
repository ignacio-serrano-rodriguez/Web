<?php

    // DECLARACIÓN DE CLASE

        class Persona 
        {
            // Atributos
            public $nombre;
            public $dni;

            // Métodos

                // Constructor
                public function __construct($nombre, $dni) 
                {
                    $this->nombre = $nombre;
                    $this->dni = $dni;
                }

            // Imprimir objeto
            public function print() 
            {
                return "{Persona} (nombre) $this->nombre (dni) $this->dni";
            }
        }

    // TIPOS DE DATOS Y VARIABLES
        /* String */            $cadena = "Nacho";
        /* Integer */           $entero = 20 /* + 10 + */ + 3;
        /* Float */             $decimal = 9.5;
        /* Boolean (true) */    $verdadero = true;
        /* Boolean (false) */   $falso = false;
        /* Array */             $vector = array ("azul", "naranja", "verde", "amarillo", "rojo");
        /* Object */            $persona_1 = new Persona("Maria", "1");
        /* Object */            $persona_2 = new Persona("Juan", "2");
        /* Null */              $nulo = null;

    // IMPRESIÓN DE OBJETOS
        echo $persona_1->print() . "<br/>";
        echo $persona_2->print() . "<br/><br/>";

    // MOSTRAR INFORMACIÓN DE VARIABLES (tipos de datos, valor, longitud)
    echo "\$cadena -> ";
    echo var_dump($cadena) . "<br/>";
    echo "\$entero -> ";
    echo var_dump($entero) . "<br/>";
    echo "\$decimal -> ";
    echo var_dump($decimal) . "<br/>";
    echo "\$verdadero -> ";
    echo var_dump($verdadero) . "<br/>";
    echo "\$falso -> ";
    echo var_dump($falso) . "<br/>";
    echo "\$vector -> ";
    echo var_dump($vector) . "<br/>";
    echo "\$objeto -> ";
    echo var_dump($persona_1) . "<br/>";
    echo "\$nulo -> ";
    echo var_dump($nulo) . "<br/>";
?>
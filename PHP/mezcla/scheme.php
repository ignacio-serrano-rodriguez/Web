<h1>Begin <?php echo "PHP"?> </h1>

<?php

    // in line comment
    # comment as UNIX
    /*
        multiline comment
    */

    $nombre = "Nacho";  
    $a = 1;
    $b = 2;

    echo "My name is $nombre<br/><br/>a: $a<br/>b: $b <br/><br/>";

    function Suma()
    {
        global $a; 
        $b = 3;
        
        echo "FUNCION SUMA</br>a (global): $a<br/>b: $b<br/>";

        $c = $a + $b;
        echo "c: $c"  . "<br/><br/>";
    }

    Suma();

    echo "b: $b<br/>";
?>

<?php $expresion = false; ?>

<?php if ($expresion == true):  ?>

    <p> it is true </p>

<?php else: ?>

    <p> it is false </p>

<?php endif; ?>
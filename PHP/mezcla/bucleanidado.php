
<?php

    $n = 10;
    $m = 5;
    
    for ($i = 0; $i < $n+1; $i++) 
    {
        
        for($j = 0; $j < $m+1; $j++)
        {

            if($j==3)
            {
               continue;
            }

            echo "i: " . $i . " j: " . $j . "<br/>";

        }

        echo "<br/>";
    }

?>

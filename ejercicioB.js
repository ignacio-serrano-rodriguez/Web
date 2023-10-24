var x = 1;

function funcion1 ( z ) {
    var k = z + 1;
    c = 1;

    function funcion2 ( a ) {
        k = k * a + x;
        c = c + 10 * k;
        if ( c < 100 ) {
            var d = 1;
        }
        else {
            var d = 0;
        }
        return c + d;
        // funcion2
    }

    funcion2( 2 );
    x = 5 + funcion2( 2 );
    return x * 10;
    // funcion 1
}

var c;
console.log("Consola 2: ", c);

/* 
¿Qué saldrá por consola?
A.) Consola 2: 1
B.) Consola 2: 0
C.) Consola 2: undefined
D.) Un error

C.) Se mostrará undefined, ya que la variable 'c' no ha sido inicializada.
*/
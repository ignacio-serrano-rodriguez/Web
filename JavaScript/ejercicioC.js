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

var y = funcion1 ( 4 );
console.log("Consola 3: ", c);

/* 
¿Qué saldrá por consola?
A.) Consola 3: 341
B.) Consola 3: -128
C.) Consola 3: undefined
D.) Un error

A.) Porque no hay ningún error y todas las operaciones realizadas dan un número > 0
*/
var x = 1;

function funcion1 ( z ) {
    var k = z + 1;
    c = 1; // 1

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

t = c;
console.log("Consola 6: ", t);

/* 
¿Qué saldrá por consola?
A.) Consola 6: 1
B.) Consola 6: 0
C.) Consola 6: undefined
D.) Un error

D.) Lanzará el error (ReferenceError: c is not defined), ya que 'c' no está declarada en ese ámbito, 
sino que se se encuentra en el de la funcion1().
*/
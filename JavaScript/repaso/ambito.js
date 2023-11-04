/* No se puede modificar su valor, saltaría un error
Es de ámbito local como 'let'*/
const CONSTANTEAMBITOLOCAL = 2;

function funcion_1 (parametroLocal) 
{
    ambitoGlobal = 3;
    console.log("CONSTANTEAMBITOLOCAL: ", CONSTANTEAMBITOLOCAL);

    // Los parámetros solo tienen ámbito de funcion
    console.log("parametroLocal: ", parametroLocal);
    
    {
        var ambitoFuncion = 0;

        // Si no se inicializa variable, tiene valor 'undefined'
        // 'let' no se puede volver a declarar / redeclarar
        let ambitoBloque;
        // 0 (nada) !== null (nulo) !== undefined (no definido)
        console.log("ambitoBloque: ", ambitoBloque);

        {
            // Son variables distintas.
            let ambitoBloque = 1;
            console.log("ambitoBloque(dif): ", ambitoBloque);
        }

        // Hace referencia a la variable anterior.
        console.log("ambitoBloque: ", ambitoBloque);
    }

    // Se puede usar en toda la función, pero no fuera
    console.log("ambitoFuncion: ", ambitoFuncion);

    // Error porque 'let' tiene ambito de bloque
    //console.log("ambitoBloque: ", ambitoBloque);
}

funcion_1(null);

// Error porque tanto 'var' como parámetros, ambitos de función.
//console.log("ambitoFuncion(2): ", ambitoFuncion);
//console.log("parametroLocal: ", parametroLocal);

/* Si se declara, es accesible desde todo el código
NO RECOMENDABLE */
console.log("ambitoGlobal: ", ambitoGlobal);
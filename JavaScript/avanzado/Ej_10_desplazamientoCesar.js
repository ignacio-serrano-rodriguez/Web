/*
El cifrado César es una técnica de cifrado muy simple que se utiliza para ocultar texto al cambiar cada letra por una letra con un 
desplazamiento fijo en el alfabeto. Crea una función en JavaScript que realice un cifrado César. Para ello:

1. ✅ Crea una función llamada cifrarCesar que reciba dos argumentos: una cadena de texto y un número entero que representará el 
desplazamiento en el cifrado. 
2. ✅ La función debe cifrar la cadena de texto moviendo cada letra en el alfabeto hacia adelante en la posición según el número de 
desplazamiento. Por ejemplo, si el desplazamiento es 3, "A" se convierte en "D", "B" se convierte en "E", y así sucesivamente. 
Asegúrate de mantener la misma capitalización (mayúsculas y minúsculas).
3. ✅ La función debe ignorar los caracteres que no son letras y mantenerlos sin cambios.
4. ✅ Si se llega al final del alfabeto, el desplazamiento debe continuar desde el principio. Por ejemplo, si el desplazamiento es 3 y 
la letra es "Z", se convierte en "C".
5. ✅ La función debe devolver la cadena cifrada.
*/

let desplazamiento = 3;
let cadena = "hOlA 123345ñ6789 mUnDo ZyXw";

function cifrarCesar(cadena, desplazamiento) 
{
    const abecedario = "abcdefghijklmnopqrstuvwxyz".split('');
    let cadenaCifrada = "";
    let caracter;
    let caracterMinuscula;
    let caracterCifrado;
    let indiceAuxiliar;

    for (let i = 0; i < cadena.length; i++) 
    {
        caracter = cadena.charAt(i);
        caracterMinuscula = cadena.charAt(i).toLowerCase();

        if(abecedario.includes(caracterMinuscula))
        {
            if(abecedario.indexOf(caracterMinuscula)+desplazamiento >= abecedario.length)
            {
                indiceAuxiliar =  abecedario.indexOf(caracterMinuscula) + desplazamiento - abecedario.length;
                caracterCifrado = abecedario[indiceAuxiliar];
            }
            else
            {
                caracterCifrado = abecedario[abecedario.indexOf(caracterMinuscula)+desplazamiento];
            }

            if(caracter != caracterMinuscula)
            {
                caracterCifrado = caracterCifrado.toUpperCase();
            }

            cadenaCifrada += caracterCifrado;
        }
        else
        {
            cadenaCifrada += caracter;
        }
    }

    return (cadenaCifrada);
}

console.log(cifrarCesar(cadena, desplazamiento));
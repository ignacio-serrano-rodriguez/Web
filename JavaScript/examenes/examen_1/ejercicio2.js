/*
Ejercicio 2
Crea una pagina web HTML que recoja de un único input una serie de números, separados por “;” (punto y
coma) del 1 al 26 y, cuando se pulse un botón, modifique cada número por la letra del alfabeto en
mayúsculas correspondiente, para devolver una palabra.
Si alguno de los número introducidos no está entre el 1 y el 26, debe tenerlo en cuenta para el mensaje
final.
Debe mostrar el resultado en un pop-up, siguiendo el siguiente formato (por ejemplo, para la sentencia de
número 8;65;94;15;47;12;1):
La palabra cifrada es: HOLA
Se han introducido 3 números no válidos.
Puedes probar qué devuelve la sentencia 1;16;18;65;15;2;1;38;4;15
*/

// declaramos un array como constante con todas las mayúsculas del abecedario.
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]

function transform() 
{
    // Transformamos en array mediante la función split con el separador ';' , los números introducidos por el usuario.
    let givenNumbers = document.getElementById("givenNumbers").value.split(";");

    // Inicializamos las variables que vamos a usar a lo largo del código.
    let notValidNumbers = 0;
    let secretWord = "";
    let resultedString = "";

    // Recorremos el array generado con el input del usuario.
    for(i in givenNumbers)
    {
        // Comprobamos si cada uno de los números introducidos por el usuario están dentro de la longitud del array abc.
        if(abc[givenNumbers[i]-1] == undefined)
        {
            // Si no está, aumentamos en uno el número de elementos no validos.
            notValidNumbers++;
        }
        else
        {
            // Si se encuentra, añadimos el caracter correspondiende a la palabra secreta.
            secretWord += abc[givenNumbers[i]-1];
        }
        
    }
    
    // Generamos la cadena que vamos a mostrar por pantalla.
    resultedString += "La palabra cifrada es: " + secretWord + "\n\n" + "Se han introducido " + notValidNumbers + " números no válidos.";
    
    // Mostramos por pantalla la cadena creada.
    alert(resultedString);
}
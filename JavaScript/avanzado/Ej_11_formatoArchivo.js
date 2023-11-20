/*
Crea un script que reciba el nombre de la imagen que desea adjuntar a una supuesta URL.
El script debe:
Comprobar si el nombre proporcionado incluye una extensión.
Si la incluye, debe verificar si es válida para el sistema (considera que son válidas .png y .jpg). 
Si es válida, debe mostrarle un mensaje diciendo ¡Sí se puede adjuntar!. En caso contrario, 
debe mostrarle un mensaje diciendo que la extensión no es válida, y que debe adjuntar un archivo 
llamado nombreImagen.png o nombreImagen.jpg, donde nombreImagen será el nombre de la imagen que 
haya introducido el usuario.
Comprueba por consola que funciona, probando estos argumentos: foto.png, foto.pdf y foto.jpg
*/

function comprobar_extension_imagen(nombreImagenCompleto) 
{
    const extensionesValidas = [".png", ".jpg"];
    let extensionImagen = nombreImagenCompleto.slice(nombreImagenCompleto.indexOf("."));   
    console.log(extensionImagen);

    if(extensionesValidas.includes(extensionImagen))
    {
        console.log("¡Sí se puede adjuntar!.");
    }
    else
    {   
        let nombreImagen = nombreImagenCompleto.slice(0, nombreImagenCompleto.indexOf("."));
        console.log(nombreImagen);
        console.log("La extensión no es valida. Debe adjuntar un archivo llamado " 
        + nombreImagen + extensionesValidas[0] + " o " + nombreImagen + extensionesValidas[1]);
    }
}

comprobar_extension_imagen("foto_1.png");
comprobar_extension_imagen("foto_2.pdf");
comprobar_extension_imagen("foto_3.jpg");
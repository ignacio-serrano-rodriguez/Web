/*
Calcular la hipotenusa de un triángulo rectángulo
Escribe una función llamada calcularHipotenusa que reciba la longitud de los dos catetos de un 
triángulo rectángulo y devuelva la longitud de la hipotenusa. 
Comprueba que los datos recibidos sean los adecuados.
*/

function calcularHipotenusa(cateto_1, cateto_2) 
{
    let cadenaResultado;

    if(cateto_1 > 0 && !isNaN(cateto_1) && cateto_2 > 0 && !isNaN(cateto_2))
    {
        let hipotenusa = Math.sqrt(cateto_1 * cateto_1 + cateto_2 * cateto_2);
		hipotenusa = hipotenusa.toFixed(2);
        
		cadenaResultado = `la longitud de la hipotenusa es (${hipotenusa})`;
    }
    else
    {
        cadenaResultado = "Al menos uno de los catetos introducidos no es válido.";
    }

	return (cadenaResultado);
    
}

console.log(calcularHipotenusa(4, 3));
console.log(calcularHipotenusa(0, 0));
console.log(calcularHipotenusa(0, 4));
console.log(calcularHipotenusa("texto"));
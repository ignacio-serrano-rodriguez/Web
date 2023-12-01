/*
Calcular el área de un círculo
Escribe una función llamada calcularAreaCirculo que reciba el radio de un círculo como argumento 
y devuelva el área del círculo.
Comprueba que los datos recibidos sean los adecuados.

Prueba la función con los siguientes radios: 5, 0, -2 y “texto”.
*/

function calcularAreaCirculo(radio) 
{
    let cadenaResultado = "área del circulo: ";

    if(!isNaN(radio) && radio > 0)
    {
        let resultado = Math.PI * radio * radio;
		resultado = resultado.toFixed(2); // toFixed redondea al número de decimales indicado
		cadenaResultado += resultado;
    }
    else
    {
        cadenaResultado = "El radio introducido no es válido.";
    }

	return (cadenaResultado);
    
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(0));
console.log(calcularAreaCirculo(-2));
console.log(calcularAreaCirculo("texto"));
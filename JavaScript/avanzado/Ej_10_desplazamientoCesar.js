/*
El cifrado César es una técnica de cifrado muy simple que se utiliza para ocultar texto al cambiar cada letra por una letra con un 
desplazamiento fijo en el alfabeto. Crea una función en JavaScript que realice un cifrado César. Para ello:
Crea una función llamada cifrarCesar que reciba dos argumentos: una cadena de texto y un número entero que representará el 
desplazamiento en el cifrado.
La función debe cifrar la cadena de texto moviendo cada letra en el alfabeto hacia adelante en la posición según el número de 
desplazamiento. Por ejemplo, si el desplazamiento es 3, "A" se convierte en "D", "B" se convierte en "E", y así sucesivamente. 
Asegúrate de mantener la misma capitalización (mayúsculas y minúsculas).
La función debe ignorar los caracteres que no son letras y mantenerlos sin cambios.
Si se llega al final del alfabeto, el desplazamiento debe continuar desde el principio. Por ejemplo, si el desplazamiento es 3 y 
la letra es "Z", se convierte en "C".
La función debe devolver la cadena cifrada.
*/

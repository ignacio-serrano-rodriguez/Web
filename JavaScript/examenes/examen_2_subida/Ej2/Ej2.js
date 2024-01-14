/*
Ejercicio 2 (lo realiza quien haya aprobado las cookies)

Crea una página web en HTML que tenga 2 partes.

La primera parte tendrá como título (utiliza un H1) “Solicitar datos”, y consiste solicitar el nombre de
una persona y su color preferido, mediante dos input. Al lado, debe haber un botón que indique “Mostrar
frase en HTML”, y otro que ponga “Mostrar frase en nueva ventana”.
En la segunda parte (no tendrá título):

	● Si se pulsa sobre el primer botón, debe mostrarse en un H3 debajo de esta primera parte una
frase del estilo siguiente. “El color azul es el preferido de Juan”. Si no se ha indicado el nombre
y/o el color, el mensaje que debes mostrar es: “Debes rellenar nombre y color”.

	● Si se pulsa sobre el segundo botón, deberás mostrar el mensaje adecuado, según se ha explicado
en el apartado anterior, en una nueva ventana del navegador, la cual deberá tener un tamaño de
400px x 400px y deberá estar centrada en la pantalla.
*/

function mostrar_en_html() 
{
	// Obtenemos los dos valores que se encuentran en el HTML eliminando espacios en blanco.
	let nombrePersona = document.getElementById("nombrePersona").value.trim();
	let colorPreferido = document.getElementById("colorPreferido").value.trim();

	// Obtenemos el elemento <h3> donde introduciremos el mensaje.
	let h3 = document.createElement("h3");
	
	// Comprobamos que ninguno de los dos valores obtenidos es una cadena vacía, para almacenar un mensaje u otro.
	if(nombrePersona == "" || colorPreferido == "")
		h3.innerHTML = "Debes rellenar nombre y color";
	else
		h3.innerHTML = `El color ${colorPreferido} es el preferido de ${nombrePersona}`;

	// Introducimos el mensaje en el elemento <h3>
	document.getElementById("mostrar").innerHTML = h3.innerHTML;
}

function mostrar_en_ventana() 
{
	// Obtenemos los dos valores que se encuentran en el HTML eliminando espacios en blanco.
	let nombrePersona = document.getElementById("nombrePersona").value.trim();
	let colorPreferido = document.getElementById("colorPreferido").value.trim();

	// Declaramos una variable mensaje donde almacenaremos el mensaje a mostrar en la ventana.
	let mensaje;

	// Comprobamos que ninguno de los dos valores obtenidos es una cadena vacía, para almacenar un mensaje u otro.
	if(nombrePersona == "" || colorPreferido == "")
		mensaje = "Debes rellenar nombre y color";
	else
		mensaje = `El color ${colorPreferido} es el preferido de ${nombrePersona}`;

	// Creamos una ventana en una nueva instancia con las dimensiones anchura 400px y altura 400px.
	let ventana = window.open('url: undefined','target:_blank','width= 400px, height= 400px');
	// Introducimos en la ventana el mensaje a mostrar.
	ventana.document.write(mensaje);
}
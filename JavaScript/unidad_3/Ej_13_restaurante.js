/*
Crea una página web en HTML donde se gestionen las mesas de un restaurante. 
Debes realizar una tabla con los mismos formatos que muestra la tabla de la siguiente diapositiva. 
En la primera columna se encuentran las mesas del restaurante. En la segunda debes crear un checkbox 
(uno para cada celda de la columna). Al seleccionar un checkbox, se preguntará a través de un prompt el 
nombre de la persona que se hace la reserva y, al pulsar Intro, se modificará el contenido de dicha celda 
para incluir el nombre de la persona y, además, el color de fondo de toda la fila será #FF0033. 
Cuando se desactive un checkbox que esté activo, el color de fondo de toda la fila debe volver a ser blanco 
y la celda de la persona debe quedar de nuevo vacía. 
*/

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
let personaReserva;

checkboxes.forEach(function(checkbox) 
{
	checkbox.addEventListener('change', function() 
	{
		let mesa = checkbox.parentNode.parentNode;

		if (checkbox.checked) 
		{
			personaReserva = prompt("Nombre de la reserva");

			if(personaReserva != null && personaReserva != "" && personaReserva != undefined)
			{
				mesa.childNodes[5].innerHTML = personaReserva;
				mesa.classList.add('reservada')
			}
			else
			{
				checkbox.checked = false;
			}
		} 
		else 
		{
			mesa.childNodes[5].innerHTML = "";
			mesa.classList.remove('reservada')
		}
	});

});
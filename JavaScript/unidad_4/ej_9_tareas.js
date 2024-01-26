/*
Estás desarrollando una aplicación de gestión de tareas pendientes. Necesitas implementar funcionalidad para que 
los usuarios puedan agregar, modificar y eliminar tareas de su lista. Cada tarea tiene un identificador único, una
descripción y un estado (pendiente o completada). Conforme vayas añadiendo tareas, se mostrarán en la lista junto
a su ID y estado. Debes diseñar funciones para: buscar una tarea por su identificador, eliminar una tarea específica
y mostrar un listado de todas las tareas de la lista. Además, las funciones deben ser eficientes y proporcionar una
experiencia fácil de usar para los usuarios. Crea una página web de interfaz con diseño amigable que cumpla lo 
anterior.
*/

var tareas = [];
var IDs = [];
var estados = [];
var contador = 1;


function crearTarea() 
{
	let nombreTarea = document.getElementById("entrada").value.trim();
	tareas.push(nombreTarea);
	IDs.push(contador);
	estados.push("🟨");
	contador++;

	actualizarTareas();
	document.getElementById("consola").innerHTML=`Tarea con ID (${contador-1}) creada.`;

	document.getElementById("entrada").value = "";
	document.getElementById("entrada_2").value = "";
}

function actualizarTareas() 
{
	document.getElementById("tareas").innerHTML = "";

	for (let i = 0; i < tareas.length; i++) 
	{
		document.getElementById("tareas").innerHTML+=`
			<li>
				${IDs[i]} - ${tareas[i]} - <input type="button" onclick="cambiarEstado(${IDs[i]})" value="${estados[i]}"/>
				<input type="button" onclick="eliminarTarea(${IDs[i]})" value="❌"/>
			</li>
		`
	}
}

function eliminarTarea(ID)
{
	for (let i = 0; i < IDs.length; i++) 
	{
		if(IDs[i] == ID)
		{
			tareas.splice(i,1);
			IDs.splice(i,1);
			estados.splice(i,1);
			break;
		}
	}

	actualizarTareas();
	document.getElementById("consola").innerHTML=`Tarea con ID (${ID}) eliminada.`;
}

function cambiarEstado(ID) 
{
	for (let i = 0; i < IDs.length; i++) 
	{
		if(IDs[i] == ID)
		{
			if (estados[i] == "🟨") 
			{
				estados[i] = "🟩"
				document.getElementById("consola").innerHTML=`Tarea con ID (${ID}) ha cambiado a estado completado (🟩).`;
			}
			else
			{
				estados[i] = "🟨"
				document.getElementById("consola").innerHTML=`Tarea con ID (${ID}) ha cambiado a estado pendiente (🟨).`;
			}
		}
	}

	actualizarTareas();
	
}

function buscarTarea() 
{
	let tareaEncontrada = false;
	let ID = document.getElementById("entrada_2").value.trim();

	for (let i = 0; i < IDs.length; i++) 
	{
		if(IDs[i] == ID)
		{
			document.getElementById("consola").innerHTML=`Tarea encontrada -> ${IDs[i]} - ${tareas[i]} - <input type="button" onclick="cambiarEstado(${IDs[i]})" value="${estados[i]}"/> <input type="button" onclick="eliminarTarea(${IDs[i]})" value="❌"/>`;
			tareaEncontrada = true;
			break;
		}
	}

	if(tareaEncontrada == false)
	{
		document.getElementById("consola").innerHTML=`No existe tarea con ID (${ID}).`;
	}	

	document.getElementById("entrada").value = "";
	document.getElementById("entrada_2").value = "";
}
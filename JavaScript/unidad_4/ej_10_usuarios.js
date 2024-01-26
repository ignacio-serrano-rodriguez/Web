/*
Necesitas realizar un sistema de gestión de usuarios para una plataforma online. Cada usuario tiene un identificador
único, nombre, correo electrónico, edad, color preferido, si tiene o no mascota, ciudad de origen y nivel de acceso
(normal o administrador). Debes implementar funciones para eliminar usuarios por su identificador, iterar sobre las
propiedades de un usuario (según su identificador) y comprobar si un usuario tiene ciertas propiedades (según su id). 
Crea una página web de interfaz con diseño amigable que cumpla lo anterior.
*/

var IDs = [];
var nombres = [];
var mails = [];
var edades = [];
var colores = [];
var mascotas = [];
var ciudades = [];
var niveles = [];
var contador = 1;

function crearUsuario() 
{
	let nombre = document.getElementById("nombre").value.trim();
	let mail = document.getElementById("mail").value.trim();
	let edad = document.getElementById("edad").value.trim();
	let color = document.getElementById("color").value.trim();
	let mascota = document.getElementById("mail").value.trim();
	let ciudad = document.getElementById("ciudad").value.trim();
	let nivel = document.getElementById("nivel").value.trim();

	IDs.push(contador);
	nombres.push(nombre);
	mails.push(mail);
	edades.push(edad);
	colores.push(color);
	mascotas.push(mascota);
	ciudades.push(ciudad);
	niveles.push(nivel);
	
	contador++;

	document.getElementById("nombre").value = "";
	document.getElementById("mail").value = "";
	document.getElementById("edad").value = "";
	document.getElementById("color").value = "";

	document.getElementById("consola").innerHTML=`Usuario con ID (${contador-1}) creado.`;
	document.getElementById("consolaBusqueda").innerHTML = "";
	document.getElementById("busqueda").value = "";
}

function eliminarUsuario(i)
{
	IDs.splice(i,1);
	nombres.splice(i,1);
	mails.splice(i,1);
	edades.splice(i,1);
	colores.splice(i,1);
	mascotas.splice(i,1);
	ciudades.splice(i,1);
	niveles.splice(i,1);

	document.getElementById("consola").innerHTML=`Usuario eliminado.`;
	document.getElementById("consolaBusqueda").innerHTML = "";
	document.getElementById("busqueda").value = "";
}

function buscarUsuario() 
{
	let usuarioEncontrado = false;
	let ID = document.getElementById("busqueda").value.trim();
	document.getElementById("consolaBusqueda").innerHTML = "";
	document.getElementById("consola").innerHTML = "";
	document.getElementById("busqueda").value = "";

	for (let i = 0; i < IDs.length; i++) 
	{
		if(IDs[i] == ID)
		{
			document.getElementById("consolaBusqueda").innerHTML=`
			
				Usuario encontrado con ID (${ID}).<br/><br/>
				Nombre -> ${IDs[i]}<br/>
				Mail -> ${mails[i]}<br/>
				Edad -> ${edades[i]}<br/>
				Color -> ${colores[i]}<br/>
				Mascota -> ${mascotas[i]}<br/>
				Ciudad de origen -> ${ciudades[i]}<br/>
				Nivel de acceso -> ${niveles[i]}<br/><br/>
				<input type="button" onclick="eliminarUsuario(${i})" value="Eliminar usuario"/>
			`;

			usuarioEncontrado = true;
			break;
		}
	}

	if(usuarioEncontrado == false)
		document.getElementById("consola").innerHTML=`No existe usuario con ID (${ID}).`;

}
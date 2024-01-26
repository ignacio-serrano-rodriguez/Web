/*
Estás trabajando en una aplicación de lista de compras en la que los usuarios pueden crear y combinar sus propias 
listas con los nombres de los productos. Cada lista tiene un nombre y un conjunto de productos. Necesitas 
implementar funciones que permitan copiar una lista existente en otra y para unir varias listas. La capacidad de 
los usuarios para organizar y combinar fácilmente sus listas es esencial para la usabilidad de la aplicación.
Crea una página web de interfaz con diseño amigable que cumpla lo anterior.
*/

var listas = [];

function crearLista() 
{
	let nombreLista = document.getElementById("nombreLista").value.trim();
	document.getElementById("nombreLista").value = "";
	let listaExistente = false;

	for (let i = 0; i < listas.length; i++) 
	{
		if(nombreLista == listas[i][0])
		{
			listaExistente = true;
			document.getElementById("consola").innerHTML = `La lista (${nombreLista}) ya existe.`;
			break;
		}
	}

	if(listaExistente == false)
	{
		listas.push([nombreLista]);
		document.getElementById("consola").innerHTML = `Lista (${nombreLista}) creada.`;
	}
		
	console.log(listas);
	actualizacionListas();
}

function actualizacionListas() 
{
	document.getElementById("listas").innerHTML="";
	document.getElementById("productos").innerHTML=`<select id="lista">`;

	for (let i = 0; i < listas.length; i++) 
	{
		// Productos
		document.getElementById("productos").innerHTML+=`
			<option value="${listas[i][0]}">${listas[i][0]}</option>
		`;
		
		// Listas
		document.getElementById("listas").innerHTML+=`
			<p>${listas[i][0]}</p>
			<ul>
		`;
			for (let j = 1; j < listas[i].length; j++) 
			{
				document.getElementById("listas").innerHTML+=`
					<li>${listas[i][j]}</li>
				`;
			}
		document.getElementById("listas").innerHTML+=`
			<ul/>
		`
	}
}
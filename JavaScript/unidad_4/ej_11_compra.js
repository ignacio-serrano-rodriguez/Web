/*
Estás trabajando en una aplicación de lista de compras en la que los usuarios pueden crear y combinar sus 
propias listas con los nombres de los productos. Cada lista tiene un nombre y un conjunto de productos. 
Necesitas implementar funciones que permitan copiar una lista existente en otra y para unir varias listas.
La capacidad de los usuarios para organizar y combinar fácilmente sus listas es esencial para la usabilidad 
de la aplicación. Crea una página web de interfaz con diseño amigable que cumpla lo anterior.
*/

document.getElementById("nombreProducto").disabled = true;
document.getElementById("botonAniadir").disabled = true;

var listas = [];

function crearLista() 
{
	let nombreLista = document.getElementById("nombreLista").value.trim();
	document.getElementById("nombreLista").value = "";
	let listaExistente = false;

	if(nombreLista == '')
		document.getElementById("consola").innerHTML = `No puedes introducir una cadena vacia.`;
	else
	{
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
			document.getElementById("nombreProducto").disabled = false;
			document.getElementById("botonAniadir").disabled = false;
		}
			
		console.log(listas);
		actualizacionListas();
	}
}


function actualizacionListas() 
{
	let divListas = document.getElementById("listas");
	let divListasProductos = document.getElementById("listasProductos");
	divListas.innerHTML = "";
	divListasProductos.innerHTML = "";
	let select = document.createElement("select");
	select.id = "selectProductos";

	for (let i = 0; i < listas.length; i++) 
	{
		let p = document.createElement("p");
		p.innerHTML = `${listas[i][0]}`;
		divListas.append(p);

		let option = document.createElement("option");
		option.value = `${listas[i][0]}`
		option.textContent = `${listas[i][0]}`;;
		select.append(option);

		let ul = document.createElement("ul");
		for (let j = 1; j < listas[i].length; j++) 
		{
			let li = document.createElement("li");
			li.innerHTML = `${listas[i][j]}`;
			ul.append(li);
		}

		divListas.append(ul);		
	}

	divListasProductos.append(select);
}

function aniadirProducto() 
{
	let nombreProducto = document.getElementById("nombreProducto").value.trim();
	let nombreLista = document.getElementById("selectProductos").value.trim();

	for (let i = 0; i < listas.length; i++) 
	{
		if(nombreLista == listas[i][0])
		{
			console.log(listas[i]);
			listas[i].push(nombreProducto);
			break;
		}	
	}

	nombreProducto = document.getElementById("nombreProducto").value = "";

	actualizacionListas();
}
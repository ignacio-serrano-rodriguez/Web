/*
un vector por cada (productos y precios)
mostrar precio en una ventana. Si no existe, también
añadir producto también muestra ventana y actualiza la lista.
*/

var productos = ["Plátanos", "Servilletas", "Leche", "Huevos", "Detergente", "Aceitunas", "Zumo"];
var precios = [1,2,3,4,5,6,7];

for (let i = 0; i < productos.length; i++) 
	document.getElementById("listaCompra").innerHTML += `<li>${productos[i]}</li>`

function mostrar_precio() 
{
	let producto = document.getElementById("producto").value;
	let encontrado = false;
	

	for (let i = 0; i < productos.length; i++) 
	{
		if (producto == productos[i]) 
		{
			alert(`${producto} = ${precios[i]} €`);
			encontrado = true;
			break;
		}
	}

	if (!encontrado) 
	{
		alert("Ese producto no existe.");
	}
}

function aniadir_producto() 
{
	let nuevoProducto = document.getElementById("nuevoProducto").value.trim();
	let precio = document.getElementById("precio").value.trim();

	if(nuevoProducto != "" && precio != "")
	{
		if (productos.includes(nuevoProducto)) 
			alert("El producto introducido ya se encuentra en la lista.");
		else
		{
			productos.push(nuevoProducto);
			precios.push(precio);
			document.getElementById("listaCompra").innerHTML += `<li>${nuevoProducto}</li>`;
		}
	}
	else
	{
		alert("Los datos introducidos no son correctos");
	}
	
	
}
		
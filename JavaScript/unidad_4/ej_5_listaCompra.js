/*
un vector por cada (productos y precios)
mostrar precio en una ventana. Si no existe, también
añadir producto también muestra ventana y actualiza la lista.
*/

let productos = ["Plátanos", "Servilletas", "Leche", "Huevos", "Detergente", "Aceitunas", "Zumo"];
let precios = [1,2,3,4,5,6,7];

let listaCompra = document.getElementById("listaCompra").value;
console.log(listaCompra);

function mostrar_precio() 
{
	let producto = document.getElementById("producto").value;
	let encontrado = false;

	for (let i = 0; i < productos.length; i++) 
	{
		if (producto == productos[i]) 
		{
			console.log(producto + " precio: " + precios[i]);
			encontrado = true;
			break;
		}
	}

	if (!encontrado) 
	{
		console.log("ese producto no existe");
	}
}

function aniadir_producto() 
{
	let nuevoProducto = document.getElementById("nuevoProducto").value;
	let precio = document.getElementById("precio").value;

	if(nuevoProducto != "" && precio != "")
	{
		if (productos.includes(nuevoProducto)) 
		{
			console.log("El producto introducido ya se encuentra en la lista");
		}
		else
		{
			console.log("producto: " + nuevoProducto + " precio: " + precio);
		}
	}
	else
	{
		console.log("los datos introducidos no son correctos");
	}
	
}
		
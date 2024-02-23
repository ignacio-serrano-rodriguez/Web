const API = "http://localhost"; 

async function mostrar_productos() 
{ 
	document.getElementById("contenido").innerHTML = '';
	document.getElementById("consola").innerHTML = 'Mostrando todos.<br/><br/>';
	document.getElementById("idProductoBuscar").value = '';

	const respuesta = await fetch(`${API}/productos`); 
	const datos = await respuesta.json(); 

	for (const [key, value] of Object.entries(datos)) 
	{
		document.getElementById("contenido").innerHTML += 
		`
			<strong>ID</strong> ${value.id_producto}<br/>
			<strong>Nombre</strong> <input value="${value.nombre}"/><br/>
			<strong>Precio</strong>  <input value="${value.precio}"/><br/>
			<strong>Cantidad</strong> <input value="${value.cantidad}"/><br/>
			<strong>Tipo</strong> <input value="${value.tipo}"/><br/>
			<strong>Ventas</strong> <input value="${value.ventas}"/><br/><br/>
			<input onclick="borrar_producto()" type="button" value="❌ Eliminar"/>
			<input onclick="modificar_producto()" type="button" value="🔵 Modificar"/>
			<br/><br/><br/>
		`;
	}
} 

async function buscar_producto() 
{ 
	document.getElementById("consola").innerHTML='';

	let id = document.getElementById("idProductoBuscar").value.trim();
	if(id == '')
	{
		document.getElementById("consola"). innerHTML = `Debes de introducir un ID.<br/><br/>`;
	}
	else
	{
		const respuesta = await fetch(`${API}/productos/${id}`); 
		let datos
		try 
		{
			datos = await respuesta.json(); 

			if(Object.keys(datos).length != 6)
			{
				document.getElementById("consola"). innerHTML = `Producto no encontrado.<br/><br/>`;
			}
			else
			{
				document.getElementById("consola"). innerHTML = `Producto encontrado.<br/><br/>`;

				document.getElementById("contenido").innerHTML = 
				`
					<strong>ID</strong> ${datos.id_producto}<br/>
					<strong>Nombre</strong> <input value="${datos.nombre}"/><br/>
					<strong>Precio</strong>  <input value="${datos.precio}"/><br/>
					<strong>Cantidad</strong> <input value="${datos.cantidad}"/><br/>
					<strong>Tipo</strong> <input value="${datos.tipo}"/><br/>
					<strong>Ventas</strong> <input value="${datos.ventas}"/><br/><br/>
					<input onclick="borrar_producto()" type="button" value="❌ Eliminar"/>
					<input onclick="modificar_producto()" type="button" value="🔵 Modificar"/>
					<br/><br/><br/>
				`;
			}
		} 
		catch (error) 
		{
			document.getElementById("consola"). innerHTML = `Producto no encontrado.<br/><br/>`;
		}
	}
}

async function borrar_producto() 
{ 
	console.log("función borrar producto");
}

async function modificar_producto() 
{ 
	console.log("función modificar producto");
}

async function aniadir_producto() 
{ 
	let nombre = document.getElementById("nombre").value.trim();
	let precio = document.getElementById("precio").value.trim();
	let cantidad = document.getElementById("cantidad").value.trim();
	let tipo = document.getElementById("tipo").value.trim();
	let ventas = document.getElementById("ventas").value.trim();

	if(nombre == '' || precio == '' || cantidad == '' || tipo == '')
	{
		document.getElementById("consolaAniadir").innerHTML = '<p>Introduce todos los datos.</p>';
	}
	else
	{
		let parametros = new URLSearchParams();
		parametros.append('nombre', nombre);
		parametros.append('precio', precio);
		parametros.append('cantidad', cantidad);
		parametros.append('tipo', tipo);
		parametros.append('ventas', ventas);

		
			const respuesta = await fetch(`${API}/productos`, 
			{
				method: 'POST', 
				headers: 
				{
				'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: parametros.toString() 
			});

			if(respuesta.status != 200 && respuesta.status != 201)
			{
				document.getElementById("consolaAniadir").innerHTML = '<p>Todos los datos han de ser correctos.</p>';
			}
			else
			{
				document.getElementById("consolaAniadir").innerHTML = '';
				document.getElementById("consolaAniadir").innerHTML = '<p>Producto creado y listado actualizado.</p>';
				mostrar_productos();
			}
	}
}


mostrar_productos();
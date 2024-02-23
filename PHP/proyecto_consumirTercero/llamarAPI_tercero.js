const API = "https://restcountries.com/v3.1"; 

async function mostrar_paises() 
{ 
	const respuesta = await fetch(`${API}/all`); 
	const datos = await respuesta.json(); 
	document.getElementById("contenido").innerHTML='<br/>';

	for (let i = 0; i < datos.length; i++) 
	{
		let nombres = `${datos[i].altSpellings[0]} - ${datos[i].altSpellings[1]} - ${datos[i].altSpellings[2]}`;
		document.getElementById("contenido").innerHTML += `<input type="button" value="${nombres}" onclick="mostrar_pais('${datos[i].altSpellings[0]}')"></input><br/>`;
	}
} 

async function mostrar_pais(nombrePais) 
{ 
	if(nombrePais == null)
	{
		nombrePais = document.getElementById("nombrePais").value.trim();
	}

	if(nombrePais == '')
	{
		document.getElementById("contenido").innerHTML = "No introducir una cadena vacía.";
	}
	else
	{
		const respuesta = await fetch(`${API}/name/${nombrePais}`); 
		const datos = await respuesta.json(); 

		if(datos.status == 404)
		{
			document.getElementById("contenido").innerHTML = "País inexistente.";
		}
		else
		{
			document.getElementById("contenido").innerHTML ='';
			document.getElementById("contenido").innerHTML += 

				`<p><strong>Nombre</strong> ${datos[0].altSpellings[0]} - ${datos[0].altSpellings[1]} - ${datos[0].altSpellings[2]}</p>
				<p><strong>Capital</strong> ${datos[0].capital[0]}</p>
				<p><strong>Población</strong> ${datos[0].population}</p>
				<strong>Idiomas</strong><br/><br/>`;

			for (const [key, value] of Object.entries(datos[0].languages)) 
			{
				document.getElementById("contenido").innerHTML += `- ${value}<br/><br/>`;
			}

			let bandera = datos[0].flags.png;
			let img = new Image();
            img.src =bandera;
            document.getElementById('contenido').appendChild(img);			
		}
	}
} 
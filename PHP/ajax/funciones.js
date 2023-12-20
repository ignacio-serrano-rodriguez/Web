 function categorias()
 {
 	var xhttp = new XMLHttpRequest();       
 	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			// crear lista
			var lista = document.createElement("ul");
			// meter los datos de la respuesta en un array
			var cats = JSON.parse(this.response);	

			// para cada elemento del array 
			for(var i = 0; i < cats.length; i++)
			{
				//se crea un elemento ul con el campo  nombre 
				var elem = document.createElement("li");		

				var enlace = document.createElement("a");
				enlace.innerHTML = cats[i]["nombre"];
				enlace.setAttribute("href","#");
				enlace.setAttribute("id",`${cats[i]["codCat"]}`);
				enlace.setAttribute("onclick",`return obtener_productos(${cats[i]["codCat"]});`);
				
				// se añade el enlace al elemento de la lista
				elem.appendChild(enlace);

				// se añade a la lista
				lista.appendChild(elem);		
			}
			var body = document.getElementById("principal");
			body.appendChild(lista);
		}
	};
	xhttp.open("GET", "datos_categorias_json.php", true);     
	xhttp.send(); 

	// para que no se siga el link que llama a esta función
	return false;
}

function obtener_productos(codCat) 
{
	var xhttp = new XMLHttpRequest();       
 	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			let enlace = document.getElementById(codCat);

			// crear lista
			var lista = document.createElement("ul");
			// meter los datos de la respuesta en un array
			var cats = JSON.parse(this.response);	

			// para cada elemento del array 
			for(var i = 0; i < cats.length; i++)
			{
				//se crea un elemento ul con el campo  nombre 
				var elem = document.createElement("li");		

				var parrafo = document.createElement("p");
				parrafo.innerHTML = cats[i]["nombre"];
				
				// se añade el enlace al elemento de la lista
				elem.appendChild(parrafo);

				// se añade a la lista
				lista.appendChild(elem);		
			}
			enlace.after(lista);
			enlace.setAttribute("onclick",`return ocultar_productos(${codCat});`);
		}
	};
	xhttp.open("GET", `productos.php?codCat=${codCat}`, true);     
	xhttp.send(); 

	// para que no se siga el link que llama a esta función
	return false;
}

function ocultar_productos(codCat) 
{
	let enlace = document.getElementById(codCat);
	enlace.nextSibling.style.display = "none";
	enlace.setAttribute("onclick",`return mostrar_productos(${codCat});`);
}

function mostrar_productos(codCat) 
{
	let enlace = document.getElementById(codCat);
	enlace.nextSibling.style.display = "block";
	enlace.setAttribute("onclick",`return ocultar_productos(${codCat});`);
}
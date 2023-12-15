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
			enlace.setAttribute("onclick","return productos();");
			
			// se añade el enlace al elemento de la lista
			elem.appendChild(enlace);

			// se añade a la lista
			lista.appendChild(elem);		
		}
		var body = document.getElementById("principal");
		// eliminar el contenido actual
		body.innerHTML = "";
		body.appendChild(lista);
		
	 }
	};
	xhttp.open("GET", "datos_categorias_json.php", true);     
	xhttp.send(); 
	// para que no se siga el link que llama a esta función
	return false;
}

function productos() 
{
	console.log("función productos");
}
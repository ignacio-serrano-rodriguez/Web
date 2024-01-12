function recorrer_nodos () 
{  
	let body = document.body;
	let hijosBody = body.children;

	console.log(body.tagName);
	
	for (let i = 0; i < hijosBody.length-1; i++) 
	{

		console.log(hijosBody[i].tagName);

		if(hijosBody[i].tagName != "DIV")
			console.log(hijosBody[i].innerHTML);
		else
		{
			let hijosDiv = hijosBody[i].children;

			for (let j = 0; j < hijosDiv.length; j++) 
			{
				if(hijosDiv[j].tagName != "UL")
				{
					console.log(hijosDiv[j].tagName);
					console.log(hijosDiv[j].innerHTML);
				}
				else
				{
					let hijosUl = hijosDiv[j].children;

					for (let z = 0; z < hijosUl.length; z++) 
					{
						console.log(hijosUl[z].tagName);
						console.log(hijosUl[z].innerHTML);
					}
				}
			}
		}
	}
}

function ampliar_nodos() 
{
	let semana = document.getElementById("semana");
	const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];

	let lista = document.createElement("ul");

	for (const dia of diasSemana) 
	{
		let elemento = document.createElement("li");
		elemento.innerHTML = dia;

		lista.appendChild(elemento);
	}

	semana.appendChild(lista);
}
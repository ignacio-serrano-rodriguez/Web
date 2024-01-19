function gestionarUsuario() 
{
	let usuarioLogin = document.getElementById("usuarioLogin").value.trim();
	let contraseniaLogin = document.getElementById("contraseniaLogin").value.trim();

	var xhttp = new XMLHttpRequest();       
 	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);	

			if(respuesta[0]["respuesta"] == "correcto")
			{
				document.getElementById("consola").innerHTML="";
				document.getElementById("contenido").innerHTML="";
				console.log(respuesta);

				// Usuario normal
				if(respuesta[8]["rol"] == 1)
				{
					document.getElementById("consola").innerHTML=`
						<h1>${usuarioLogin}</h1>
						<h2>Tu información</h2>
						<form>
							usuario: <input type=\"text\" value=\"$usuarioLogin\"  name=\"usuarioActualizacion\"/><br/>
							mail: <input type=\"text\" value=\"$mailLogin\"  name=\"mailActualizacion\"/> <br/>
							nombre: <input type=\"text\" value=\"$nombreLogin\" name=\"nombreActualizacion\"/> <br/>
							apellidos: <input type=\"text\" value=\"$apellidosLogin\" name=\"apellidosActualizacion\"/> <br/>
							edad: <input type=\"text\" value=\"$edadLogin\" name=\"edadActualizacion\"/> <br/>
							contraseña: <input type=\"password\" value=\"\" name=\"contraseniaActualizacion_1\"/> <br/>
							repite la contraseña: <input type=\"password\" value=\"\" name=\"contraseniaActualizacion_2\"/> <br/><br/>
							<input type="button" onclick="actualizarUsuario()" value="Actualizar información"><br/>
						</form>

					`
				}
				// Usuario admin
				else if(respuesta[8]["rol"] == 0)
				{
					document.getElementById("consola").innerHTML="eres admin";
				}
			}
			else
				document.getElementById("consola").innerHTML = respuesta[0]["respuesta"];
		}
	};
	xhttp.open("POST", "../php/gestionarUsuario.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`usuarioLogin=${usuarioLogin}&contraseniaLogin=${contraseniaLogin}`);
}

function actualizarUsuario() 
{
	console.log("actualizar usuario");
}
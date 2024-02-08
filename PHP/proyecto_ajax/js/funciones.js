var idLogin;
var mailLogin;
var usuarioActualizacion;
var mailActualizacion;
var nombreActualizacion;
var apellidosActualizacion;
var edadActualizacion;
var contraseniaAntigua;
var contraseniaActualizacion_1;
var contraseniaActualizacion_2;

function gestionarUsuario() 
{
	usuarioLogin = document.getElementById("usuarioLogin").value.trim();
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

				// Usuario cualquiera
				idLogin = respuesta[1]["id"];
				rolLogin = respuesta[7]["rol"];
				usuarioActualizacion = respuesta[6]["usuario"];
				mailActualizacion = respuesta[5]["mail"];
				nombreActualizacion = respuesta[2]["nombre"];
				apellidosActualizacion = respuesta[3]["apellidos"];
				edadActualizacion = respuesta[4]["edad"];

				document.getElementById("contenido").innerHTML=`
					<h1>${usuarioLogin}</h1>
					<h2>Tu información</h2>
					<form>
						<input type="hidden" value="${respuesta[1]["id"]}" id="idLogin" />
						<input type="hidden" value="${respuesta[7]["rol"]}" id="rolLogin" />
						usuario <input type="text" value="${respuesta[6]["usuario"]}"  id="usuarioActualizacion"/><br/>
						mail <input type="text" value="${respuesta[5]["mail"]}"  id="mailActualizacion"/> <br/>
						nombre <input type="text" value="${respuesta[2]["nombre"]}" id="nombreActualizacion"/> <br/>
						apellidos <input type="text" value="${respuesta[3]["apellidos"]}" id="apellidosActualizacion"/> <br/>
						edad <input type="text" value="${respuesta[4]["edad"]}" id="edadActualizacion"/> <br/>
						contraseña antigua <input type="password" value="" id="contraseniaAntigua"/> <br/>
						contraseña nueva <input type="password" value="" id="contraseniaActualizacion_1"/> <br/>
						repite la contraseña nueva <input type="password" value="" id="contraseniaActualizacion_2"/> <br/><br/>
						<input type="button" onclick="actualizarUsuario()" value="Actualizar información"><br/><br/>
						<input type="button" onclick="cerrarSesion()" value="Cerrar sesión"><br/>
					</form>
					<br/>
					<hr/>
				`
				// Usuario normal
				if(respuesta[7]["rol"] == 1)
				{
					document.getElementById("contenidoEspecifico").innerHTML="";
					document.getElementById("contenidoEspecifico").innerHTML+=`
						<h2>Tus listas</h2>
						<form>
							nombre de la lista: <input type="text" value="" id="nombreLista"/>
							<input type="button" onclick="crearLista()" value="Crear">
						</form>
						<br/>
					`
					var xhttp = new XMLHttpRequest();       
					xhttp.onreadystatechange = function() 
					{
						if (this.readyState == 4 && this.status == 200) 
						{  
							var respuesta = JSON.parse(this.response);	

							for (let i = 0; i < respuesta.length; i++) 
							{
								document.getElementById("contenidoEspecifico").innerHTML+=`<input onclick="gestionarLista(this)" type="button" value="${respuesta[i]["nombreLista"]}"/><br/>`;
							}
						}
					};
					xhttp.open("POST", "../php/mostrarListas.php", true);
					xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					idLogin = document.getElementById("idLogin").value;
					xhttp.send(`idLogin=${idLogin}`);

					document.getElementById("eliminacion").innerHTML=`
						<br/>
						<hr/>
						<br/>
						<input type="button" onclick="eliminarTuUsuario()" value="Eliminar tu usuario">
					`
				}
				// Usuario admin
				else if(respuesta[7]["rol"] == 0)
				{
					document.getElementById("contenidoEspecifico").innerHTML="";
					document.getElementById("contenidoEspecifico").innerHTML+=`<h2>Eliminar usuario</h2>`;
					document.getElementById("eliminacion").innerHTML="";

					var xhttp = new XMLHttpRequest();       
					xhttp.onreadystatechange = function() 
					{
						if (this.readyState == 4 && this.status == 200) 
						{  
							var respuesta = JSON.parse(this.response);	

							for (let i = 0; i < respuesta.length; i++) 
							{
								document.getElementById("contenidoEspecifico").innerHTML+=`${respuesta[i]["nombreUsuario"]}<br/>`;
							}

							document.getElementById("contenidoEspecifico").innerHTML+=`

								<form>
									<br/>
									<input type="text" id="usuarioIntroducido"/>
									<input type="button" onclick="eliminarUsuario()" value="Eliminar este usuario"/>
								</form>	
							`;
						}
					};
					xhttp.open("POST", "../php/mostrarUsuarios.php", true);
					xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xhttp.send();
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

function cerrarSesion() 
{
	document.getElementById("consola").innerHTML = "Sesión del usuario cerrada.";
	document.getElementById("contenidoEspecifico").innerHTML = "";
	document.getElementById("contenido").innerHTML = `
		<h1> Listas de gustos (AJAX) </h1>
		<h2> Inicio de sesión </h2>
		<form>
			<label for=usuarioLogin> usuario </label>
			<input type=text id=usuarioLogin> <br/>
			<label for="contraseniaLogin"> contraseña </label>
			<input type="password" id="contraseniaLogin"> <br/><br/>
			<input type="button" value="iniciar" onclick="gestionarUsuario()">
		</form>
		<h2> Registro de usuario </h2>
		<form>

			<label for="nombreRegistro"> nombre </label>
			<input type="text" id="nombreRegistro"> <br/>
			<label for="apellidosRegistro"> apellidos </label>
			<input type="text" id="apellidosRegistro"> <br/>
			<label for="edadRegistro"> edad </label>
			<input type="text" id="edadRegistro"> <br/>
			<label for="mailRegistro"> correo electrónico </label>
			<input type="text" id="mailRegistro"> <br/>
			<label for="usuarioRegistro"> usuario </label>
			<input type="text" id="usuarioRegistro"> <br/>
			<label for="contraseniaRegistro_1"> contraseña </label>
			<input type="password" id="contraseniaRegistro_1"> <br/>
			<label for="contraseniaRegistro_2"> repite la contraseña </label>
			<input type="password" id="contraseniaRegistro_2"> <br/><br/>
			<input type="button" value="registrarse" onclick="crearUsuario()">
		</form>
	`;
	document.getElementById("eliminacion").innerHTML="";
}

function actualizarUsuario() 
{
	idLogin = document.getElementById("idLogin").value.trim();
	usuarioLogin = document.getElementById("usuarioActualizacion").value.trim();
	mailLogin = document.getElementById("mailActualizacion").value.trim();
	usuarioActualizacion = document.getElementById("usuarioActualizacion").value.trim();
	mailActualizacion = document.getElementById("mailActualizacion").value.trim();
	nombreActualizacion = document.getElementById("nombreActualizacion").value.trim();
	apellidosActualizacion = document.getElementById("apellidosActualizacion").value.trim();
	edadActualizacion = document.getElementById("edadActualizacion").value.trim();
	contraseniaAntigua = document.getElementById("contraseniaAntigua").value.trim();
	contraseniaActualizacion_1 = document.getElementById("contraseniaActualizacion_1").value.trim();
	contraseniaActualizacion_2 = document.getElementById("contraseniaActualizacion_2").value.trim();

	var xhttp = new XMLHttpRequest();       
 	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);	

			if(respuesta[0]["respuesta"] == "correcto")
			{
				document.getElementById("consola").innerHTML = "Información del usuario actualizada.";
				document.getElementById("contenido").innerHTML=`
					<h1>${respuesta[0]["usuario"]}</h1>
					<h2>Tu información</h2>
					<form>
						<input type="hidden" value="${respuesta[0]["id"]}" id="idLogin" />
						usuario: <input type="text" value="${respuesta[0]["usuario"]}"  id="usuarioActualizacion"/><br/>
						mail <input type="text" value="${respuesta[0]["mail"]}"  id="mailActualizacion"/> <br/>
						nombre <input type="text" value="${respuesta[0]["nombre"]}" id="nombreActualizacion"/> <br/>
						apellidos <input type="text" value="${respuesta[0]["apellidos"]}" id="apellidosActualizacion"/> <br/>
						edad <input type="text" value="${respuesta[0]["edad"]}" id="edadActualizacion"/> <br/>
						contraseña antigua <input type="password" value="" id="contraseniaAntigua"/> <br/>
						contraseña nueva <input type="password" value="" id="contraseniaActualizacion_1"/> <br/>
						repite la contraseña nueva <input type="password" value="" id="contraseniaActualizacion_2"/> <br/><br/>
						<input type="button" onclick="actualizarUsuario()" value="Actualizar información"><br/><br/>
						<input type="button" onclick="cerrarSesion()" value="Cerrar sesión"><br/>
					</form>
					<br/>
					<hr/>
				`
			}
			else
			{
				document.getElementById("consola").innerHTML = respuesta[0]["respuesta"];
			}
		}
	};
	xhttp.open("POST", "../php/actualizarUsuario.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`idLogin=${idLogin}&usuarioLogin=${usuarioLogin}&mailLogin=${mailLogin}&usuarioActualizacion=${usuarioActualizacion}&mailActualizacion=${mailActualizacion}&nombreActualizacion=${nombreActualizacion}&apellidosActualizacion=${apellidosActualizacion}&edadActualizacion=${parseInt(edadActualizacion)}&contraseniaAntigua=${contraseniaAntigua}&contraseniaActualizacion_1=${contraseniaActualizacion_1}&contraseniaActualizacion_2=${contraseniaActualizacion_2}`);
}

function crearUsuario() 
{
	let nombreRegistro = document.getElementById("nombreRegistro").value.trim();
	let apellidosRegistro = document.getElementById("apellidosRegistro").value.trim();
	let edadRegistro = document.getElementById("edadRegistro").value.trim();
	let mailRegistro = document.getElementById("mailRegistro").value.trim();
	let usuarioRegistro = document.getElementById("usuarioRegistro").value.trim();
	let contraseniaRegistro_1 = document.getElementById("contraseniaRegistro_1").value.trim();
	let contraseniaRegistro_2 = document.getElementById("contraseniaRegistro_2").value.trim();

	var xhttp = new XMLHttpRequest();       
 	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);	

			if(respuesta[0]["respuesta"] == "correcto")
			{
				document.getElementById("consola").innerHTML = "Usuario creado. Inicie sesión.";
			}
			else
			{
				document.getElementById("consola").innerHTML = respuesta[0]["respuesta"];
			}
		}
	};
	xhttp.open("POST", "../php/crearUsuario.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`nombreRegistro=${nombreRegistro}&apellidosRegistro=${apellidosRegistro}&edadRegistro=${parseInt(edadRegistro)}&mailRegistro=${mailRegistro}&usuarioRegistro=${usuarioRegistro}&contraseniaRegistro_1=${contraseniaRegistro_1}&contraseniaRegistro_2=${contraseniaRegistro_2}`);
}

function eliminarUsuario() 
{
	var xhttp = new XMLHttpRequest();       
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);	
			
			if(respuesta[0]["respuesta"] == "correcto")
			{
				document.getElementById("consola").innerHTML = `Se ha eliminado al usuario (${respuesta[1]["usuarioEliminado"]})`;
				document.getElementById("contenidoEspecifico").innerHTML="";
				document.getElementById("contenidoEspecifico").innerHTML+=`<h2>Eliminar usuario</h2>`;

				var xhttp = new XMLHttpRequest();       
				xhttp.onreadystatechange = function() 
				{
					if (this.readyState == 4 && this.status == 200) 
					{  
						var respuesta = JSON.parse(this.response);	

						for (let i = 0; i < respuesta.length; i++) 
						{
							document.getElementById("contenidoEspecifico").innerHTML+=`${respuesta[i]["nombreUsuario"]}<br/>`;
						}

						document.getElementById("contenidoEspecifico").innerHTML+=`

							<form>
								<br/>
								<input type="text" id="usuarioIntroducido"/>
								<input type="button" onclick="eliminarUsuario()" value="Eliminar este usuario"/>
							</form>	
						`;
					}
				};
				xhttp.open("POST", "../php/mostrarUsuarios.php", true);
				xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp.send();
			
			}
			else
			{
				document.getElementById("consola").innerHTML = `${respuesta[0]["respuesta"]}`;
			}
		}
	};
	xhttp.open("POST", "../php/eliminarUsuario.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`usuarioIntroducido=${document.getElementById("usuarioIntroducido").value}`);
}

function crearLista() 
{
	var xhttp = new XMLHttpRequest();       
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);

			if(respuesta[0]["respuesta"] == "correcto")
			{
				document.getElementById("consola").innerHTML=`Se ha creado la lista (${respuesta[1]["nombreLista"]})`;
				document.getElementById("contenidoEspecifico").innerHTML="";
					document.getElementById("contenidoEspecifico").innerHTML+=`
						<h2>Tus listas</h2>
						<form>
							nombre de la lista: <input type="text" value="" id="nombreLista"/>
							<input type="button" onclick="crearLista()" value="Crear">
						</form>
						<br/>
					`
					var xhttp = new XMLHttpRequest();       
					xhttp.onreadystatechange = function() 
					{
						if (this.readyState == 4 && this.status == 200) 
						{  
							var respuesta = JSON.parse(this.response);	

							for (let i = 0; i < respuesta.length; i++) 
							{
								document.getElementById("contenidoEspecifico").innerHTML+=`<input onclick="gestionarLista(this)" type="button" value="${respuesta[i]["nombreLista"]}"/><br/>`;
							}
						}
					};
					xhttp.open("POST", "../php/mostrarListas.php", true);
					xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xhttp.send(`idLogin=${idLogin}`);
			}
			else
			{
				document.getElementById("consola").innerHTML=respuesta[0]["respuesta"];
			}
		}
	};
	xhttp.open("POST", "../php/crearLista.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`idLogin=${idLogin}&nombreLista=${document.getElementById("nombreLista").value.trim()}`);
}

function gestionarLista(nombreLista)
{
	document.getElementById("eliminacion").innerHTML="";
	let usuarioLogin = document.getElementById("usuarioActualizacion").value;

	var xhttp = new XMLHttpRequest();       
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{  
			var respuesta = JSON.parse(this.response);	

			document.getElementById("consola").innerHTML="";
			document.getElementById("contenido").innerHTML="";
			document.getElementById("contenidoEspecifico").innerHTML="";
			document.getElementById("contenido").innerHTML+=`
				<h1>${usuarioLogin}</h1>
				nombre de la lista: <input type="text" id="nombreLista" value="${nombreLista.value}"/><br/><br/>
				<input type="button" value="Volver al perfil" onclick="volverPerfil()"/>
				<br/><br/>
				<hr/>
				<h2>Elementos de (${nombreLista.value})</h2>
			`;
			for (let i = 0; i < respuesta.length; i+=3) 
			{	
				document.getElementById("contenido").innerHTML+=`
					nombre <input type="text" value="${respuesta[i]['elemento']}"/>
					nota <input type="text" value="${respuesta[i+1]['elemento']}"/>
					comentario <input type="text" value="${respuesta[i+2]['elemento']}"/>
					<br/>
				`;
			}
		}
	};
	xhttp.open("POST", "../php/gestionarLista.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`idLogin=${idLogin}&nombreLista=${nombreLista.value}`);
}

function volverPerfil() 
{
	document.getElementById("consola").innerHTML="";

	// Usuario cualquiera
	document.getElementById("contenido").innerHTML=`
		<h1>${usuarioLogin}</h1>
		<h2>Tu información</h2>
		<form>
			<input type="hidden" value="${idLogin}" id="idLogin" />
			<input type="hidden" value="${rolLogin}" id="rolLogin" />
			usuario <input type="text" value="${usuarioActualizacion}"  id="usuarioActualizacion"/><br/>
			mail <input type="text" value="${mailActualizacion}"  id="mailActualizacion"/> <br/>
			nombre <input type="text" value="${nombreActualizacion}" id="nombreActualizacion"/> <br/>
			apellidos <input type="text" value="${apellidosActualizacion}" id="apellidosActualizacion"/> <br/>
			edad <input type="text" value="${edadActualizacion}" id="edadActualizacion"/> <br/>
			contraseña antigua <input type="password" value="" id="contraseniaAntigua"/> <br/>
			contraseña nueva <input type="password" value="" id="contraseniaActualizacion_1"/> <br/>
			repite la contraseña nueva <input type="password" value="" id="contraseniaActualizacion_2"/> <br/><br/>
			<input type="button" onclick="actualizarUsuario()" value="Actualizar información"><br/><br/>
			<input type="button" onclick="cerrarSesion()" value="Cerrar sesión"><br/>
		</form>
		<br/>
		<hr/>
	`
	// Usuario normal
	if(rolLogin == 1)
	{
		document.getElementById("contenidoEspecifico").innerHTML="";
		document.getElementById("contenidoEspecifico").innerHTML+=`
			<h2>Tus listas</h2>
			<form>
				nombre de la lista: <input type="text" value="" id="nombreLista"/>
				<input type="button" onclick="crearLista()" value="Crear">
			</form>
			<br/>
		`
		var xhttp = new XMLHttpRequest();       
		xhttp.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{  
				var respuesta = JSON.parse(this.response);	

				for (let i = 0; i < respuesta.length; i++) 
				{
					document.getElementById("contenidoEspecifico").innerHTML+=`<input onclick="gestionarLista(this)" type="button" value="${respuesta[i]["nombreLista"]}"/><br/>`;
				}
			}
		};
		xhttp.open("POST", "../php/mostrarListas.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(`idLogin=${idLogin}`);

		document.getElementById("eliminacion").innerHTML=`
			<br/>
			<hr/>
			<br/>
			<input type="button" onclick="eliminarTuUsuario()" value="Eliminar tu usuario">
		`
	}
	// Usuario admin
	else if(rolLogin == 0)
	{
		document.getElementById("contenidoEspecifico").innerHTML="";
		document.getElementById("contenidoEspecifico").innerHTML+=`<h2>Eliminar usuario</h2>`;
		document.getElementById("eliminacion").innerHTML="";

		var xhttp = new XMLHttpRequest();       
		xhttp.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{  
				var respuesta = JSON.parse(this.response);	

				for (let i = 0; i < respuesta.length; i++) 
				{
					document.getElementById("contenidoEspecifico").innerHTML+=`${respuesta[i]["nombreUsuario"]}<br/>`;
				}

				document.getElementById("contenidoEspecifico").innerHTML+=`

					<form>
						<br/>
						<input type="text" id="usuarioIntroducido"/>
						<input type="button" onclick="eliminarUsuario()" value="Eliminar este usuario"/>
					</form>	
				`;
			}
		};
		xhttp.open("POST", "../php/mostrarUsuarios.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
}

function eliminarTuUsuario() 
{
	var xhttp = new XMLHttpRequest();       
	xhttp.onreadystatechange = function(){};
	xhttp.open("POST", "../php/eliminarTuUsuario.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`usuarioLogin=${usuarioLogin}`);

	cerrarSesion();
	document.getElementById("consola").innerHTML=`Tu usuario (${usuarioLogin}) ha sido eliminado`;
}
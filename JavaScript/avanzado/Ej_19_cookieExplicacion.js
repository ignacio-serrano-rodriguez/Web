// PRIMERA PARTE

// Crea una variable con el valor del día de mañana
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Crea dos variables con el tiempo de expiración de mañana en todo el sitio web ejemplo.com
var usuarioCookie = "usuario=ana; expires=" + tomorrow.toUTCString() + "; path=/; domain=ejemplo.com";
var rolCookie = "rol=administrador; expires=" + tomorrow.toUTCString() + "; path=/; domain=ejemplo.com";

// 
document.cookie = usuarioCookie;
document.cookie = rolCookie;

// Esto imprime:
console.log(document.cookie)

// SEGUNDA PARTE

//
var cookies = document.cookie.split(';');

// Buscar la...
for (var i = 0; i < cookies.length; i++) 
{
	var cookie = cookies[i].trim();
	// Verifica ...
	if (cookie.indexOf("usuario=") === 0) 
	{

		//
		var cookieParts = cookie.split('=');

		//
		var usuarioValue = cookieParts[1];

		//
		var expiresIndex = cookie.indexOf("expires=");
		var expiresValue = expiresIndex !== -1 ? cookie.substring(expiresIndex + 8).trim() : "No hay fecha de expiración especificada";

		// Esto imprime:
		console.log("Valor de la cookie usuario:", usuarioValue);
		console.log("Fecha de expiración de la cookie usuario:", expiresValue);

		//
		break;
	}
}

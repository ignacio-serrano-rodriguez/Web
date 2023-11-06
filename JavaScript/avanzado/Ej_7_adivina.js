/*
Crea una página web HTML con un botón, JUGAR, que al pulsarlo llame a una función llamada advinaPalabraEscondida, 
que realice lo siguiente:
Define una palabra secreta en una variable. Por ejemplo: const palabraSecreta = "elefante";
Pide al usuario que introduzca una letra.
Verifica si la letra introducida está en la palabra secreta.
Si la letra está en la palabra secreta, muestra un mensaje indicando que la letra es correcta y muestra el progreso 
del usuario en la palabra. Por ejemplo, si la palabra secreta es "elefante" y el usuario adivina la letra "e", mostraría: 
"_ e _ _ _ _ e".
Si la letra no está en la palabra secreta, muestra un mensaje indicando que la letra es incorrecta y lleva un registro 
de los intentos fallidos del usuario, mostrándoselo cada vez que falle.
Continúa pidiendo letras hasta que el usuario adivine la palabra completa o agote un número máximo de intentos fallidos, 
que será de 10 fallos.
Cuando el usuario adivine la palabra o se quede sin intentos, muestra un mensaje de victoria o derrota.
Proporciona la opción de jugar nuevamente si el usuario lo desea.
*/

function advinaPalabraEscondida() 
{
    const palabrasSecretas = ["elefante","kebab","chocolate","ordenador","javascript","html","css","frontend","cliente","web"]; 
	
    let palabraUsuario = "";
    let letraUsuario = "";
	let letrasFalladas = "";
	let tipoIntento = "";
	let usuarioQuiereJugar = "";
    let letraEncontrada = false;
	let letraFalladaEncontrada = false;
	let jugarDeNuevo = false;
	let numeroPartidas = 1;
	let palabraAcertada;
	let palabraUsuarioArray;
	let palabraSecreta; 
    let palabraSecretaArray;
	let intentosFallidos;
	let letrasFalladasArray;

	do 
	{    
		palabraSecreta = palabrasSecretas[numeroPartidas-1];
		palabraSecretaArray = palabraSecreta.split("");
		palabraUsuarioArray = [];
		letrasFalladasArray = [];
		intentosFallidos = 0;
		palabraAcertada = false;

		for (let i=0; i<palabraSecretaArray.length; i++)
		{
			palabraUsuarioArray.push(" _ ");
		}

		do 
		{
			letraEncontrada = false;
			letraFalladaEncontrada = false;
			letraUsuario = prompt("Partida " + numeroPartidas + "/10\n\nIntroduce una letra");

			for (let i=0; i<palabraSecretaArray.length; i++)
			{
				if (letraUsuario == palabraSecretaArray[i])
				{
					palabraUsuarioArray[i] = letraUsuario;
					letraEncontrada = true;
				}  
			}

			if(letraEncontrada == true)
			{
				tipoIntento = "correcta";
			}
			else
			{
				tipoIntento = "incorrecta";
				intentosFallidos++;

				for (let i=0; i < letrasFalladasArray.length; i++) 
				{
					if(letrasFalladasArray[i] == letraUsuario)
					{
							letraFalladaEncontrada = true;
							break;
					}
				}

				if(letraFalladaEncontrada == false)
				{
					letrasFalladasArray.push(letraUsuario);
				}
				
				letrasFalladas = letrasFalladasArray.join(" ");
			}

			palabraUsuario = palabraUsuarioArray.join("");
			
			alert("Partida " + numeroPartidas + "/10\n\n" + "La letra es " + tipoIntento + "\n\n" + palabraUsuario+ "\n\nFallos: " + intentosFallidos + "/10\n\n" + "Letras falladas: " + letrasFalladas);

			if(palabraSecreta === palabraUsuario)
			{
				palabraAcertada = true;
			}
		}
		while (intentosFallidos < 10 && palabraAcertada == false);

		if(palabraAcertada == true)
		{
			alert("Victoria");
		}
		else
		{
			alert("Derrota\n\nLa palabra secreta era " + palabraSecreta);
		}

		usuarioQuiereJugar = prompt("¿Quieres jugar de nuevo? (s/n)");

		if(usuarioQuiereJugar == "s" && numeroPartidas < 10)
		{
			jugarDeNuevo = true;
			numeroPartidas++;
		}
		else 
		{
			jugarDeNuevo = false;
			alert("¡Nos vemos!");
		}

		if(numeroPartidas >= 10 && jugarDeNuevo == true)
		{
			alert("Búsquese una vida y deje de jugar a esto por favor.");
		}

	} 
	while (jugarDeNuevo == true && numeroPartidas < 10);
}
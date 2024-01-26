// Declaramos la clase Jugador.
class Jugador
{
	// Método constructor para instanciar objetos de la clase.
	constructor(nombre, apellidos)
	{
		// Atributos parametrizados.
		this.nombre = nombre;
		this.apellidos = apellidos;

		// Atributos por defecto al instanciar el objeto.
		this.nivel = 1;
		this.puntuacion = 0;
	}

	// Método que devuelve la información del jugador según su nivel y puntuación.
	// Se llama tras usar los otros dos métodos de la clase.
	actualizar()
	{
		// Supuesto en el que el jugador sube de nivel al superar los 10 puntos.
		if(this.puntuacion > 10)
		{
			console.log(`${this.nombre} de nivel ${this.nivel} y con >${this.puntuacion-1} de puntuación, sube de nivel. :D`);
			this.nivel++;
			this.puntuacion = 0;
		}
		// Supuesto donde al ser la puntuación inferior a 0, tenemos dos vertientes.
		else if(this.puntuacion < 0)
		{
			this.nivel--;

			// Si el nivel es 0, el jugador baja de nivel y pierda la partida.
			if(this.nivel == 0)
			{
				console.log(`${this.nombre} de nivel ${this.nivel} y con ${this.puntuacion+1} de puntuación, baja de nivel y pierde la partida. D:`);
			}
			// En caso contrario, el jugador baja al siguiente nivel.
			else
			{
				console.log(`${this.nombre} de nivel ${this.nivel} y con ${this.puntuacion+1} de puntuación, baja de nivel. :(`);
				this.puntuacion = 0;
			}
		}
	
	}

	// El jugador suma 1 en el atributo de puntuación.
	sumarPuntuacion()
	{
		console.log(`(${this.nombre}) de nivel ${this.nivel} y con ${this.puntuacion} de puntuación ha matado un mostruo. (+1).`);
		this.puntuacion++;
		this.actualizar();
	}

	// El jugador resta 1 en el atributo de puntuación.
	restarPuntuacion()
	{
		console.log(`(${this.nombre}) de nivel ${this.nivel} y con ${this.puntuacion} de puntuación le ha alcanzado un mostruo. (-1).`);
		this.puntuacion--;
		this.actualizar();
	}
}
// Declaramos e inicializamos un array de jugadores vacio.
let jugadores = [];
// Instanciamos un par de objetos de la clase jugador.
let jugador1 = new Jugador("Clara", "Muñoz Bueno");
let jugador2 = new Jugador("Fernando", "Gallego Luján");
// Introducimos los objetos en el array.
jugadores.push(jugador1);
jugadores.push(jugador2);

// Llamamos a los objetos del array con el fin de que se muestren todas las casuísticas de los métodos implementados.
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
jugadores[0].sumarPuntuacion();
console.log(jugadores[0]);

jugadores[1].restarPuntuacion();
console.log(jugadores[1]);





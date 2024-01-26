class Personaje 
{
	name;
	type;
	lifes;
	energy;

	constructor()
	{
		this.name;
		this.type = "player"
		this.lifes = 5;
		this.energy = 10;
		console.log(this.name);
	}
}

const personaje = new Personaje();
console.log(personaje);
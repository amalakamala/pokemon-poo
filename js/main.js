function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre
	this.color = color
	this.nivelDeAmistad = 0
	this.vida = 100 
  	this.poderDeAtaque = poderDeAtaque
  
	this.mostrarPokemon = function(){
		return("hola, soy: " + this.nombre + " y soy de color : " + this.color)
	}
	this.aumentarAmistad = function(valor){
		return(this.nivelDeAmistad = this.nivelDeAmistad + valor)
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon ("Pikachu","amarillo",100)
const Charmander = new Pokemon("Charmander","rojo",20)
const Squirtle = new Pokemon("Squirtle","rojo",70)

Pikachu.atacar(Charmander)
console.log(Charmander.vida)
console.log(Charmander.mostrarPokemon())
console.log(Pikachu.nivelDeAmistad)
console.log(Squirtle.aumentarAmistad(20))
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
		return pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

//Array para los pokemos creados anteriormente. El push ingresa sus valores
var arr = [];

const Pikachu = new Pokemon ("Pikachu","amarillo",100)
arr.push(Pikachu)
const Charmander = new Pokemon("Charmander","rojo",20)
arr.push(Charmander)
const Squirtle = new Pokemon("Squirtle","rojo",70)
arr.push(Squirtle)


//Selecciono id desde html y creo las opciones para los select
var selectorUno = document.getElementById('elegir-pokemon');
arr.forEach(function(p){return ( selectorUno.innerHTML += '<option>' + p.nombre + '</option>')});

var selectorDos = document.getElementById('elegir-pokemon-dos');
arr.forEach(function(po){return ( selectorDos.innerHTML += '<option>' + po.nombre + '</option>')});


/*Funcion de la Pelea, 
Retorno concatenacion de los valores elegidos (pokemon)
como son un array de objeto estos estan enlazados a los valores de vida y poderDeAtaque
Esto nos ayudara a saber resultado de las peleas
*/
function peleaPokemon(){

	var resultado = 0;
	
	//Condicion segun nivel de ataque del pokemon
	if(selectorUno.value == selectorDos.value){
		alert("No puedes hacer Pelear dos pokemones Iguales")
		return;
	}else if( selectorUno.value == "Charmander" && selectorDos.value == "Pikachu"){
		resultado = Charmander.atacar(Pikachu);
	}else if(selectorUno.value == "Charmander" && selectorDos.value == "Squirtle"){
		resultado = Charmander.atacar(Squirtle);
	}else if(selectorUno.value == "Squirtle" && selectorDos.value == "Pikachu"){
		resultado = Squirtle.atacar(Pikachu);
	}else{
		resultado = 0;
	}


	var etiquetaResultado = document.getElementById("resultado");
	var textoResultado = selectorUno.value + " atacó a " + selectorDos.value + " <br> " +  selectorDos.value + " tiene una vida de : " + resultado;	

	etiquetaResultado.innerHTML = textoResultado;
}


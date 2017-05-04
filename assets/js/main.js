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


const Pikachu = new Pokemon ("Pikachu","amarillo",100)
const Charmander = new Pokemon("Charmander","rojo",20)
const Squirtle = new Pokemon("Squirtle","rojo",70)

Pikachu.atacar(Charmander);
console.log(Charmander.vida)


function peleaPokemon(){
	var selectUno = document.getElementById("elegir-pokemon").value;
	var selectDos = document.getElementById("elegir-pokemon-dos").value;

	if(selectUno == selectDos){
		alert("No puedes hacer Pelear dos pokemones Iguales")
		return;
	}


	var ataqueUno = parseInt(pedirCampo("Ingresa poder de ataque del primer Pokemon \nEl valor debe ser menor de 100"));
	var ataqueDos = parseInt(pedirCampo("Ingresa poder de ataque del segundo Pokemon \nEl valor debe ser menor de 100"));
	

	var pimerPoke = new Pokemon (selectUno,"amarillo",ataqueUno)
	var segundoPoke = new Pokemon (selectDos,"rojo",ataqueDos)


	var etiquetaResultado = document.getElementById("resultado");
	var textoResultado = selectUno + " atacó a " + selectDos + " <br> " +  selectDos + " tiene una vida de : " + pimerPoke.atacar(segundoPoke);	

	etiquetaResultado.innerHTML = textoResultado;
}


function pedirCampo(nombreCampo){
	var campo = "";
	do{
		campo = prompt("Ingrese " + nombreCampo);
	}while(campo=="")
	return campo;
}


/*
De esta manera me falta crear atributos a traves de 'setAttribute'

function crearOptionUno(elPoke){
var optionUno = document.getElementById("elegir-pokemon");
var optionAux = document.createElement("option");
var namePokemon = document.createTextNode(elPoke.nombre);
optionAux.appendChild(namePokemon);
optionUno.appendChild(optionAux);
}

function crearOptionDos(elPoke){
var optionUno = document.getElementById("elegir-pokemon-dos");
var optionAux = document.createElement("option");
var namePokemon = document.createTextNode(elPoke.nombre);
optionAux.appendChild(namePokemon);
optionUno.appendChild(optionAux);
}

crearOptionUno(Pikachu);
crearOptionUno(Charmander);
crearOptionUno(Squirtle);

crearOptionDos(Pikachu);
crearOptionDos(Charmander);
crearOptionDos(Squirtle);


function peleaPokemon(){
	return ( algo + " ataco a " + algo  + " y " +  algo  + " tiene una vida de : " + vida)
}
*/

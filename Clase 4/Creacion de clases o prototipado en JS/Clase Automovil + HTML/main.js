function Automovil() {
	var img = document.createElement('img');
	img.src = "taxi-cab.png";

	this.element = img;


	var velocidad = 10;
	var distancia = 0;
	var intervalId;

	this.avanzar = function() {
		console.log('avanzar');

		intervalId = setInterval(avanzar_start, 100);
		// setInterval | setTimeout
	}

	// función privada. No accesible en la instancia
	function avanzar_start() {
		distancia += velocidad;
		img.style.marginLeft = distancia + 'px';
	}

	this.detener = function() {
		clearInterval(intervalId);
		// clearInterval | clearTimeout
	}

}

// Elemento en mi HTML donde agregaré el Auto creado
var automoviles = document.querySelector('#automoviles');


var auto1 = new Automovil();
console.log(auto1);

automoviles.appendChild(auto1.element);


var btnAvanzar = document.querySelector("#btn-avanzar");
btnAvanzar.addEventListener('click', function(){
	auto1.avanzar();
});

var btnDetener = document.querySelector("#btn-detener");
btnDetener.addEventListener('click', function(){
	auto1.detener();
});

var imgAuto = document.querySelector("#auto1");
var btnAvanzar = document.querySelector("#btn-avanzar");

var velocidad = 10;
var distancia = 0;

btnAvanzar.addEventListener('click', function(){
	distancia += velocidad;
	imgAuto.style.marginLeft = distancia + 'px';
});
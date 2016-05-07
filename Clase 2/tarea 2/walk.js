var x = 0;
var ancho = 102;

var personaje = document.querySelector('.walking'); // DIV

var btnCaminar = document.querySelector('#caminar'); // A
btnCaminar.addEventListener('click', btnCaminar_click);

function btnCaminar_click(event) {
	event.preventDefault();

	//x += 102
	x += ancho;

	console.log('click', '-' + x + 'px');

	personaje.style.backgroundPositionX = '-' + x + 'px';
}
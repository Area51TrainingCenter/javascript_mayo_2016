var segundosElement = document.querySelector('#segundos');
var fechaTiempo1;

function temporizador() {
	var fechaTiempo2 = new Date();
	var milisegundos = fechaTiempo2.getTime() - fechaTiempo1.getTime();
	
	var segundosQueHanPasado = Math.round(milisegundos / 1000);

	segundosElement.innerHTML = segundosQueHanPasado;
}

fechaTiempo1 = new Date();
setInterval(temporizador, 1000);
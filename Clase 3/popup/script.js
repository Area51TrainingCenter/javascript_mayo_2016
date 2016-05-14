console.log("script2");

var miPopup = document.querySelector("#popupMensaje");
var btnMostrar = document.querySelector("#btn-mostrar");
var btnCerrar = document.querySelector("#btn-cerrar");

btnMostrar.addEventListener('click', function(evento){
	evento.preventDefault();

	miPopup.style.display = "block";
});

btnCerrar.addEventListener('click', function(e){
	e.preventDefault();

	miPopup.style.display = "none";
});



function mensaje1() {
	var mi_div = document.createElement('div');
	mi_div.innerHTML = 'Página 1';
	document.body.appendChild(mi_div);
}
mensaje1();

function mensaje2(parametro1) {
	var mi_div = document.createElement('div');
	mi_div.innerHTML = parametro1;
	document.body.appendChild(mi_div);
}
mensaje2('Página 1');


function mensaje3(parametro1) {
	var mi_div = document.createElement('div');
	mi_div.innerHTML = 'Página ' + parametro1;
	document.body.appendChild(mi_div);
}
mensaje3( 50 );
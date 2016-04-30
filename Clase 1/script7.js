function accion1() {
	console.log('soy funcion accion 1');
}
accion1();


var accion2 = function () {
	console.log('soy funcion accion 2');
}
accion2();



function mifuncion1(parametro1) {
	console.log('mifuncion1 parametro1:', parametro1);
}
mifuncion1('ana');



function mifuncion2(parametro1, parametro2) {
	console.log('mifuncion2:', parametro1, parametro2);
}
mifuncion1('Pedro', 'Gomez');



function crearTablaDeMultiplicar(parametro1) {
	for (var i=1; i<=12; i++) {
		console.log(i + ' x ' + parametro1 + ' = ' + (i * parametro1));
	}
}

crearTablaDeMultiplicar(12);
crearTablaDeMultiplicar(5);
crearTablaDeMultiplicar(3);
crearTablaDeMultiplicar(7);
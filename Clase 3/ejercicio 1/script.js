console.log( "ok" );

// 5
// 5 * 5 * 5

function multiplicar3(numero) {
	console.log("multiplicar3", numero);

	var resultado;
	resultado = numero * numero * numero;

	return resultado;
}

var recibe = multiplicar3(5);
console.log("valor recibir", recibe);
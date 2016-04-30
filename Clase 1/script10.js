function sumar(numero1, numero2) {
	var n = numero1 + numero2;

	return n;
}

var resultado = sumar(5, 6);
console.log(resultado);


function crearColumna(texto) {
	var c = document.createElement('td');
	c.innerHTML = texto;

	return c;
}

var resultado2 = crearColumna('columna 1');
console.log(resultado2);
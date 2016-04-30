function crearColumna(texto) {
	var c = document.createElement('td');
	c.innerHTML = texto;

	return c;
}

function crearTabla() {
	var miTablita = document.createElement('table');
	var cuerpoDeMiTabla = document.createElement('tbody');
	var filaDeTabla = document.createElement('tr');

	var columnaDeTabla1;
	for (var i = 1; i <= 4; i++) {
		columnaDeTabla1 = crearColumna('Columna ' + i);
		filaDeTabla.appendChild(columnaDeTabla1);
	}

	cuerpoDeMiTabla.appendChild(filaDeTabla);

	miTablita.appendChild(cuerpoDeMiTabla);

	document.body.appendChild(miTablita);
}

crearTabla();
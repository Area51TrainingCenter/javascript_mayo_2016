function crearColumna(texto) {
	var c = document.createElement('td');
	c.innerHTML = texto;

	return c;
}

function crearTabla() {
	var miTablita = document.createElement('table');
	var cuerpoDeMiTabla = document.createElement('tbody');
	var filaDeTabla = document.createElement('tr');

	var columnaDeTabla1 = crearColumna('Columna 1');
	filaDeTabla.appendChild(columnaDeTabla1);

	var columnaDeTabla2 = crearColumna('Columna 2');
	filaDeTabla.appendChild(columnaDeTabla2);

	var columnaDeTabla3 = crearColumna('Columna 3');
	filaDeTabla.appendChild(columnaDeTabla3);

	var columnaDeTabla4 = crearColumna('Columna 4');
	filaDeTabla.appendChild(columnaDeTabla4);


	cuerpoDeMiTabla.appendChild(filaDeTabla);

	miTablita.appendChild(cuerpoDeMiTabla);

	document.body.appendChild(miTablita);
}

crearTabla();
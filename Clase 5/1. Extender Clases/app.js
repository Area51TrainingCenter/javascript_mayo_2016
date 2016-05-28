
// = PaginaBase =================================================================

// Clase Base la cual extenderemos.
// Esta clase contiene propiedades que serán reutilizadas en otras clases.

function PaginaBase () {
	console.log('constructor de PaginaBase');
}
PaginaBase.prototype.mostrar = function() {}
PaginaBase.prototype.ocultar = function() {}



// = PaginaInicio =================================================================

/* class PaginaInicio extends PaginaBase */ // En otros lenguajes de programación
function PaginaInicio() {

	// Forma correcta: Ejecutamos el constructor de la clase que extendimos (PaginaBase)
	PaginaBase.call(this); /* super() */ // En otros lenguajes de programación

	// Luego el resto de código en nuestro contructor de esta clase

	console.log('constructor de PaginaInicio');

}

// Extenderemos la clase PaginaInicio a partir de la clase PaginaBase.
// Con esto conseguimos tener para PaginaInicio todas las propiedades de PaginaBase

	// Forma simple. No recomendada.
	//PaginaInicio.prototype = new PaginaBase();

	// Forma correcta.
	// Heredamos de PaginaBase sus propiedades (extends)
	PaginaInicio.prototype = Object.create(PaginaBase.prototype);

	// Corregimos el contructor porque apuntaba a PaginaBase
	PaginaInicio.prototype.constructor = PaginaInicio;


// Ahora creamos las propiedades para PaginaInicio.

PaginaInicio.prototype.playVideo = function() { }



// = PaginaNosotros =================================================================

function PaginaNosotros() {
	PaginaBase.call(this);

	console.log('constructor de PaginaNosotros');
}

// Extendemos la clase
PaginaNosotros.prototype = Object.create(PaginaBase.prototype);
PaginaNosotros.prototype.constructor = PaginaNosotros;

// Creamos las propiedades para PaginaNosotros
PaginaNosotros.prototype.mostrarMasInformacion = function() { }



// = PaginaContactenos =================================================================

function PaginaContactenos() {
	PaginaBase.call(this);

	console.log('constructor de PaginaContactenos');
}

PaginaContactenos.prototype = Object.create(PaginaBase.prototype);
PaginaContactenos.prototype.constructor = PaginaContactenos;

PaginaContactenos.prototype.enviar = function() { }



// = Instancias =================================================================

var myPaginaInicio = new PaginaInicio();
var myPaginaNosotros = new PaginaNosotros();
var myPaginaContactenos = new PaginaContactenos();

console.log('myPaginaInicio', myPaginaInicio);
console.log('myPaginaNosotros', myPaginaNosotros);
console.log('myPaginaContactenos', myPaginaContactenos);

function Libro(titulo, autor, anho, edicion) {
	this.titulo = titulo;
	this.autor = autor;
	this.anho = anho;
	this.edicion = edicion;
}

var libros = [
	new Libro('100 años de soledad', 'Gabriel García Márquez', 1967, 2),
	new Libro('Bajo la Misma Estrella', 'John Green', 2012, 1),
	new Libro('El Alquimista', 'Paulo Coehlo', 1997, 4),
	new Libro('20 poemas de amor', 'Pablo Neruda', 1989, 1),
	new Libro('La Divina Comedia', 'Dante Alighieri', 1321, 1),
];


var libroPropiedadHTML = document.getElementById('libro-propiedad-template').innerHTML;
var libroPropiedadTemplate = Handlebars.compile(libroPropiedadHTML);

var librosHTML = [];

// FOR (libros)
	librosHTML.push('<ul class="libro">');

		// FOR IN ( libros[i] )
		//librosHTML.push( libroPropiedadTemplate({propiedad:'nombre', valor:'Pepe'}) );
		//librosHTML.push( '<li><strong>' + propiedad + '</strong>: ' + valor + '</li>' );

	librosHTML.push('</ul>');

$('#libros').html( librosHTML.join('') );
//document.getElementById('libros').innerHTML = librosHTML.join('');




function Persona(nombre, edad, email) {
	this.nombre = nombre;
	this.edad = edad;
	this.email = email;
}

var p1 = new Persona('Pedro', 32, 'pepe@gmail.com');
var p2 = new Persona('Juan', 27, 'juan@outlook.com');
var p3 = new Persona('Diana', 34, 'dianita16@gmail.com');
var p4 = new Persona('Lucia', 25, 'lucyc@yahoo.com');
var p5 = new Persona('Oscar', 22, 'oscarvilla@gmail.com');

var personas = [p1, p2, p3, p4, p5];


var i;
var t = personas.length;
var fila;
var p;
var mytable = $('table tbody');

for(i=0; i<t; i++) {
	p = personas[i];

	fila = '<tr><td>' + p.nombre + '</td><td>' + p.edad + '</td><td>' + p.email + '</td></tr>';
	mytable.append( fila );
}




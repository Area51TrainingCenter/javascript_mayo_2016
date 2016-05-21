# JavaScript (Mayo 2016)

Tarea Clase 4: Caminar persona usando Clases (similar a ejemplo de Automovil).

#### Ambito de Variables
* [Ambito de Variables](http://librosweb.es/libro/javascript/capitulo_4/ambito_de_las_variables.html)
* [Ambitos y alcance en JavaScript](http://pensamientoobjetivo.blogspot.pe/2009/09/ambitos-y-alcance-en-javascript.html)


#### Funciones Closures

* [Closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
* [Closures en JavaScript: entiéndelos de una vez por todas](http://www.variablenotfound.com/2012/10/closures-en-javascript-entiendelos-de.html)

#### Lectura recomendada
* [CevicheJS](http://cevichejs.com)
* [ECMAScript 6 (ES6): What’s New In The Next Version Of JavaScript](https://www.smashingmagazine.com/2015/10/es6-whats-new-next-version-javascript/)
* [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)


## Array: Arreglos

```javascript
//var lista = new Array();
var lista = [];

lista.push( "Pepe" );
lista.push( "Lucho" );
lista.push( "Panchita" );

consola.log( lista[1] ); // muestra "Lucho"


var hijo1 = {};
hijo1.nombre = 'Pepito';
hijo1.edad = 3;

var persona = {};
persona.nombre = 'Carlos';
persona.edad = 30;
persona.hijos = [];

persona.hijos.push(hijo1);


var lista = [];
lista.push( "Renzo" );
lista.push( 23 );
lista.push( persona );

console.log( lista[0] );
console.log( lista[1] );
console.log( lista[2] );
console.log( lista[2].nombre );
```

---
Link corto a este repositorio: http://goo.gl/RMSNxK

---

**Profesor:** Renzo Castro Jurado

**Email:** renzo.vista@gmail.com

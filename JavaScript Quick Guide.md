# JavaScript: Guía Rápida

* Introducción
* Tipos de Datos
* Objetos
* Functiones
* Bucles
* Condicionales


## Introducción

JavaScript es un Lenguaje de Programación basado en ECMAScript que nos permitirá interactuar con los elementos del navegador y crear acciones.

ECMAScript es una especificación de lenguaje de programación, define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la Programación Orientada a Objetos mediante objetos basados en prototipos y pseudoclases.
Versiones


## Tipos de Datos

### Number

pendiente

### Boolean

pendiente

### String

También llamado *Cadena de Texto*. Se representan usando comillas dobles **"** o comillas simples **'**.
```javascript
var nombre = "Aldo"; // Usando comillas dobles
var apellidos = 'Ruiz Lopez'; // Usando comillas simples

console.log(nombre); //: Aldo
console.log(apellidos); //: Ruiz Lopez
```

**Concatenar:** Podemos juntar textos con el signo **+**. También podemos concatenar números directamente a cadenas de texto de la misma forma.
```javascript
// Concatenamos las anteriores variables
console.log(nombre + apellidos); //: AldoRuiz Lopez
console.log(nombre + " " + apellidos); //: Aldo Ruiz Lopez

// Concatenamos un texto directamente con un número
console.log(nombre + 21); //: Aldo21
console.log("Edad: " + 33); //: Edad: 33
```
Usando la propiedad **length** podemos saber la cantidad de caractéres en un String.
```javascript
console.log(nombre.length);	 //: 4
console.log(apellidos.length); //: 10
console.log("Vanessa".length); //: 7
```

### Objetos

Existen 2 formas de crear un objeto base:
```javascript
// Forma 1: new Object()
var persona1 = new Object();
persona1.nombre = 'Carlos';
persona1.apellidos = 'Ruiz Lujan';

// Forma 2: {}
var persona2 = {};
persona2.nombre = 'Renzo';
persona2.apellidos = 'Castro Jurado';
```
La segunda forma nos da la ventaja de asignarle directamente propiedades.
```javascript
var persona3 = { nombre: 'Renzo', apellidos: 'Castro Jurado' };
```
Y podemos separarlo en líneas para tener orden.
```javascript
var persona4 = {
    nombre: 'Vanessa',
    apellidos: 'Garcia Fernandez'
};
```

### Array: Arreglos

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

### Funciones

```javascript
function saludar(){
    alert("Hola");
}
// Para invocarla/ejecutarla/llamarla
saludar(); //: Hola
```

Con parametros:
```javascript
// Usando un parametro

function saludar(nombre){ // Aquí *nombre* es nuestro parametro
    alert("Hola " + nombre);
}
// Para invocarla/ejecutarla/llamarla
saludar('Luis'); //: Hola Luis


// Usando dos parametro

function saludar(nombre, apellidos){
    alert("Hola " + nombre + " " + apellidos);
}

// Para invocarla/ejecutarla/llamarla
saludar('Luis', 'Rojas Linares'); //: Hola Luis Rojas Linares

// Se puede usar el número de parametros que necesite usar.
```

Retornando un valor:
```javascript
function saludar(){
    return "Hola";
}
var mensaje = saludar();
alert( mensaje );

// El código anterior es equivalente a:
alert( "Hola" );
```
```javascript
function saludar(nombre){
    return "Hola " + nombre;
}
var mensaje = saludar("Luis");
alert( mensaje );

// El código anterior es equivalente a:
alert( "Hola " + "Luis" );
```
```javascript
function saludar(nombre, apellidos){
    return "Hola " + nombre + " " + apellidos;
}
var mensaje = saludar("Luis", "Ruiz Lopez");
alert( mensaje );

// Esto es equivalente a:
alert( "Hola " + "Luis" + " " + "Ruiz Lopez" );
```
```javascript
function frase(lugar, nombre, accion){
    var oracion = "En " + lugar + " vimos a " + nombre + accion + " 3 veces.";
    return oracion;
}
var mensaje = frase('el parque', 'Julio', 'saltar');
console.log( mensaje ); //: En el parque vimos a Julio saltar 3 veces
```
```javascript
function sumar(numero1, numero2){
    return numero1 + numero2;
}
alert( sumar(3, 4) ); //: 7

// Esto es equivalente a:
alert( 3 + 4 ); //: 7
```

### Bucles
#### for
```javascript
// La mejor practica es declarar antes la variable que usaremos
var i;
for(i=0; i<5; i++){
    console.log( i );
}

// Mala practica: No declarar la variable
for(n=0; n<5; n++){
    console.log( n );
}
// Mala practica: Declarar la variable en el "for"
for(var a=0; a<5; a++){
    console.log( a );
}
// Mala practica: Declarar variables DENTRO del "for"
var b;
for(b=0; b<5; b++){
    var dato = 'Número ' + b;
    console.log( dato );
}
// En este caso lo correcto sería
var b;
var dato;
for(b=0; b<5; b++){
    dato = 'Número ' + b;
    console.log( dato );
}
```
#### for .. in
Pendiente
#### while
Pendiente
#### do .. while
Pendiente

### Condicionales

Sintaxis:
```javascript
if( condicional ){
	// Si se cumple la condicional
}

if( condicional ){
	// Si se cumple la condicional
} else {
	// si no se cumple la condicional
}
```
Ejemplos:
```javascript
// Excelente	Si nota es mayor de 16
// Muy buen	Si nota es mayor de 13
// Bien		Si nota es mayor o igual a 11
// Mal		Si nota es menor o igual a 10

var nota = 12;	// Prueba cambiando el valor aquí para probar. De 10 a 20.
console.log('Nota: ' + nota);

// TEST 1
if( nota > 16 ){ // Si nota es mayor de 16
	console.log('Test 1: Excelente');
}

// TEST 2
if( nota > 16 ){ // Si nota es mayor de 16
	console.log('Test 2: Excelente');
} else { // si no
	console.log('Test 2: La nota es menor o igual a 16');
}

// TEST 3
if( nota > 16 ){ // Si nota es mayor de 16
	console.log('Test 3: Excelente');
} else if ( nota > 13 ) {  // Si nota es mayor de 13
	console.log('Test 3: Muy Bien');
} else if ( nota >= 11 ) {	// Si nota es mayor o igual a 11
	console.log('Test 3: Bien');
} else {
	// si no se cumple ninguna de las condicionales anteriores
	console.log('Test 3: Mal');
}

// TEST 4
if( nota > 16 ){ // Si nota es mayor de 16
	console.log('Test 4: Excelente');
} else {
	if ( nota > 13 ) {  // Si nota es mayor de 13
		console.log('Test 4: Muy Bien');
	} else {
		if ( nota >= 11 ) {	// Si nota es mayor o igual a 11
			console.log('Test 4: Bien');
		} else {
			// si no se cumple ninguna de las condicionales anteriores
			console.log('Test 4: Mal');
		}
	}
}
```
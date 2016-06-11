/*
√ for
while
do while
for in
√ forEach (array)
*/

// FOR
var i;
var total = 10;

for(i=0; i<total; i++) {
	console.log(i);
}
for(i=total - 1; i>=0; i--) {
	console.log(i);
}

// WHILE
// while( condicional ) { ... }

var i = 0;
var total = 10;

while(i<total) {
	console.log('i:', i);
	i++;
}

var i = 0;
var numero;
var listaNumeros = [];

while(listaNumeros.length <= 6) {
	i++;
	console.log(i);
	// numero aleatoria entre 0 y 5
	numero = Math.round(Math.random() * 5);

	if(listaNumeros.indexOf(numero) == -1) {
		listaNumeros.push(numero);
	}
}

console.log(listaNumeros);









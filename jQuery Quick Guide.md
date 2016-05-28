$( SELECTORES ) => document.querySelectorAll y mas
$( elementosHTML ) => convierte elementHMTL a variable de tipo jQuery
$( Texto HTML ) => document.createElement y mas





/*
// forma abreviada
$('.col').click(function(){
	
});

// forma base. usando ON
$('.col').on('click', function(){

});
*/

/*
$('.col').on('click', function(){
	console.log('click');
});




function a(selector) {
	return document.querySelectorAll(selector);
} 

a('.col').forEach(function(item, index){
	item.addEventListener('click', function(){
		console.log('click');
	});
});
*/


// jQuery
$('.col').css('border-color', 'red');


// JavaScript
//var a = document.querySelectorAll;
var a = document.querySelectorAll.bind(document);

a('.col').forEach(function(item, index){
	item.style.borderColor = 'red';
});


// JavaScript

var a = document.querySelectorAll.bind(document);

function css(selector, cssProp, cssValor) {
	a(selector).forEach(function(item, index){
		item.style[cssProp] = cssValor;
	});
}

css('.col', 'border-color', 'red');








// jQuery
var michi = $('#michi');

// JavaScript
//var michi = document.querySelector('#michi');
var michi = document.querySelectorAll('#michi');



// jQuery
var rows = $('.row');

// JavaScript
var rows = document.querySelectorAll('.row');



function a(selector) {
	return document.querySelectorAll(selector);
} 
var michi = a('#michi');
var rows = a('.row');






// JavaScript
var mensaje = document.createElement('div');
mensaje.innerHTML = 'Estas jugando con JavaScript';

document.body.appendChild(mensaje);


// jQuery
//$(document.body).append(mensaje);
//$(document.body).append('<div>Estas jugando</div>');
var mensaje2 = $('<div>');
mensaje2.html('Estas jugando con jQuery');

$(document.body).append(mensaje2);

//



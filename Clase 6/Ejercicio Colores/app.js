/*
$( '.btn span' ) // selectores
$( elementHTML ) // elementos HTML
$( '<div>Hola</div>' )

$( function(){

} )
*/



$('.btn').on('click', function(){
	// JavaScript
	//console.log('HTML en el button', this.innerHTML);
	//console.log('solo texto en el button', this.textContent);

	// jQuery
	//console.log('HTML en el button', $(this).html());
	//console.log('solo texto en el button', $(this).text());
	
	//var color = this.dataset.color
	var color = $(this).data('color');

	/*
	switch(color) {
		case 'rojo':
			console.log(color);
			break;

		case 'verde':
			console.log(color);
			break;

		case 'azul':
			console.log(color);
			break;

		case 'negro':
			console.log(color);
			break;
	}

	console.log('termino SWITCH');
	*/

	var colores = {
		rojo: 'red',
		verde: 'green',
		azul: 'blue',
		negro: 'black'
	};
	
	var colorCSS = colores[color];

	var formInputs = $('form input, form select');
	
	formInputs.css('color', colorCSS);


	// forma CHAIN
	formInputs
		.removeClass('placeholder-red')
		.removeClass('placeholder-green')
		.removeClass('placeholder-blue')
		.removeClass('placeholder-black');

	formInputs.addClass('placeholder-' + colorCSS);


	$('form button').css('background', colorCSS);

});







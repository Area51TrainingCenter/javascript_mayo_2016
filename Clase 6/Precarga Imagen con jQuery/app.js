
function cargarSiguiente() {
	console.log('cargarSiguiente');
	// Pendiente
}

var imageURL = 'http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg';

var img = $('<img>');
img.css('opacity', 0);

img.on('load', function(){ // funcion anonima y también usada como CALLBACK
	img.animate({
		opacity: 1
	}, 2000, 'easeInElastic', function(){
		console.log('Imagen mostrada completamente!');

		console.log('Esperamos 5 segundos...');
		setTimeout(cargarSiguiente, 5000);
	});
	
});

img.attr('src', imageURL);

$(document.body).append(img)

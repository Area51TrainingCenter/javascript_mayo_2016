var totalImagenes = 10;
var porPagina = 4;
var totalPaginas = Math.ceil(totalImagenes/porPagina);

var anchoPagina = 250;
var paginaActual = 1;

var margen = 0;

$('.btn-gallery-next').on('click', function(e){
	e.preventDefault();

	if (paginaActual < totalPaginas) {

		paginaActual++;

		//var margen = $('.pages').css('margin-left');
		//$('.pages').css('margin-left', (parseInt(margen) - anchoPagina) + 'px');

		margen -= anchoPagina;
		$('.pages').css('margin-left', margen + 'px');
	
	}
});

$('.btn-gallery-back').on('click', function(e){
	e.preventDefault();

	if (paginaActual > 1) {

		paginaActual--;

		//var margen = $('.pages').css('margin-left');
		//$('.pages').css('margin-left', (parseInt(margen) + anchoPagina) + 'px');
		
		margen += anchoPagina;
		$('.pages').css('margin-left', margen + 'px');
	
	}
});
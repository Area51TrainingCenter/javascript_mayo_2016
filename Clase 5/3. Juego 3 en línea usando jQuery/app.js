var numeroDeClick = 0;

$('.col').on('click', function(){
	numeroDeClick++;

	if (numeroDeClick % 2 == 0) {
		$(this).css('background', 'url("circle.png") no-repeat center center');
	} else {
		$(this).css('background', 'url("equis.png") no-repeat center center');
	}
});








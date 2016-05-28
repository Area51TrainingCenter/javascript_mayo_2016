console.log('michi.js');

var columnas = document.querySelectorAll('.col');
// columnas => [div.col, div.col, .... ]

var i;
var total = columnas.length;
var col;
var numeroDeClicks = 0;

for(i=0; i<total; ++i) {
	col = columnas[i];
	
	col.addEventListener('click', function(event){
		//event.preventDefault();
		//event.target
		//event.currentTarget

		numeroDeClicks++;
		console.log('numeroDeClicks', numeroDeClicks);

		var columnaClickeada = event.target;

		if (numeroDeClicks % 2 == 0) 
		{ // si es par
			columnaClickeada.style.background = 'url("circle.png") no-repeat center center';	
		}
		else 
		{ // si es impar
			columnaClickeada.style.background = 'url("equis.png") no-repeat center center';
		}
		
	});
}


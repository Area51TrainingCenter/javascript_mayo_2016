var intervalId;
var imageURL;
var imgElement;
var opacidad;

imageURL = 'http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg';
imgElement = document.createElement('img');
opacidad = 0;

imgElement.style.opacity = opacidad;

imgElement.addEventListener('load', function(response){
	console.log('load', response);

	function subirOpacity() {
		opacidad += 0.01;
		imgElement.style.opacity = opacidad;
		
		if (opacidad >= 1) {
			clearInterval(intervalId);
		}
	}
	
	var frames = 60;
	var milisegundos = 1000 / frames; // framePerSeconds

	intervalId = setInterval(subirOpacity, milisegundos);
});

imgElement.src = imageURL;

document.body.appendChild(imgElement);
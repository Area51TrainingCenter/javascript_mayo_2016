function Automovil(miMarca, miColor) {
	console.log('clase Automovil instanciada');

	if (miMarca != undefined) {
		this.marca = miMarca;
	}	
	if (miColor != undefined) {
		this.color = miColor;
	}
}
Automovil.prototype.marca = "";
Automovil.prototype.color = "";
Automovil.prototype.acelerar = function(){
	console.log('estoy acelerando');
}
console.log('clase Automovil LISTA!');


var auto1 = new Automovil();
auto1.marca = "Nissan";
auto1.color = "Gris";
console.log('auto1', auto1);


var auto2 = new Automovil();
auto2.marca = "Hyundai";
auto2.color = "Blanco";
console.log('auto2', auto2);


var auto3 = new Automovil("Nissan", "Rojo");
console.log('auto3', auto3);


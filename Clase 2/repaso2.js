var frutera = {};

frutera.manzanasTotal = 10;

frutera.manzanasPrecio = 0.50; // 50 centimos

frutera.venderManzanas = function(cantidad) {
	frutera.manzanasTotal = frutera.manzanasTotal - cantidad;
	//frutera.manzanasTotal -= 1;
};
//frutera.venderManzanas(4);


/*
var n = 10;
var restar = function(x) {
	n = n - x;
};
restar(3);
*/

console.log('script 5');

var cuadro = document.createElement('div');
cuadro.innerHTML = 'soy cuadro';
document.body.appendChild(cuadro);


var table = document.createElement('table');
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');

td1.innerHTML = 'Columna 1';
td2.innerHTML = 'Columna 2';
td3.innerHTML = 'Columna 3';
td4.innerHTML = 'Columna 4';

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);

tbody.appendChild(tr);

table.appendChild(tbody);

document.body.appendChild(table);

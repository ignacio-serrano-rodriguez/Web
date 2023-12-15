/*
(join)
Generador de lista de la compra: Queremos crear una aplicación para llenar una lista de la compra. 
  Primero, tendremos una interfaz que nos permitirá añadir:

Nombre: nombre del producto, mínimo 3 caracteres.
Cantidad: número de productos, numérico.
Unidades: Select desplegable, con las siguientes unidades:
kg
litros
unidades
envases
Al seleccionar guardar, almacena los datos en un string, el cual guardará en un array. Al seleccionar un 
botón Generar Lista, convertirá el array en una cadena de caracteres separados por saltos de línea y los 
mostrará en un alert.
*/

let arrayProductos = [];
let stringProducto = "";

function guardar() 
{
	stringProducto += document.getElementById("nombre").value + " ";
	stringProducto += document.getElementById("cantidad").value + " ";
	stringProducto += document.getElementById("unidades").value;
	arrayProductos.push(stringProducto);
	stringProducto = "";
	console.log(arrayProductos);
}

function generar_lista() 
{
	alert(arrayProductos.join("\n"));
}
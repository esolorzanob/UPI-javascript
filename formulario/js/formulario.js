var productos = [];
function registrarProducto(){
	var producto = {};
	producto.nombre = document.getElementById('nombre').value;
	producto.marca = document.getElementById('marca').value;
	producto.precio = document.getElementById('precio').value;
	producto.description = document.getElementById('descripcion').value;
	producto.categoria = document.getElementById('categoria').value;
	producto.imagen = document.getElementById('imagen').value;	
	productos.push(producto);
	return false;
}

function guardarProductos(){
	if(productos.length > 0){
		sessionStorage.productos = JSON.stringify(productos);
		alert("Los productos se han guardado con éxito");
	}else{
		alert("No hay productos para guardar");
	}
}
var productos = [];
function registrar(){
    var producto = {};
    producto.nombre = $('#nombre').val();
    producto.marca = $('#marca').val();
    producto.precio = $('#precio').val();
    producto.descripcion = $('#descripcion').val();
    producto.modelo = $('#modelo').val();
    producto.imagen = $('#imagen').val();
    producto.id = productos.length;
    productos.push(producto);
    $('#output').text(JSON.stringify(productos, null, 4));
}

function guardar(){
    if(productos.length > 0){
        sessionStorage.setItem('productos',JSON.stringify(productos));
        alert('Productos guardados con éxito!');
    }
}
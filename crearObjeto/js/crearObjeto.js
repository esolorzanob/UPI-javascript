

window.onload = function () {
    $('#titulo').html(producto.titulo);
    $('#imagen').attr('src',"imgs/"+producto.imagen);
    $('#descripcion').html(producto.descripcion);
    $('#peso').append(producto.peso);
    $('#marca').append(producto.marca);
    $('#modelo').append(producto.modelo);
    $('#precio').append(producto.precio);
    $('#dimensiones').append(producto.dimensiones);
    producto.categorias.map(function(categoria){
        var li = document.createElement("li");
        $(li).append(categoria);
        $('#listaCategorias').append(li);
    });
    for(llave in producto.caracteristicas){
        var elemento = document.createElement("li");
        $(elemento).html("<b>"+llave+": </b>"+producto.caracteristicas[llave]);
        $('#listaCaracteristicas').append(elemento);
    }
    
}





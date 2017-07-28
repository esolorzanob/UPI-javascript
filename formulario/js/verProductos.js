var productos = JSON.parse(sessionStorage.getItem("productos"));
window.onload = function(){
	var body = document.getElementById("principal");
	for(var i =0; i < productos.length; i++){
	var imagen = document.createElement("img");
	imagen.setAttribute("src", "imgs/"+productos[i].imagen);
	imagen.classList.add("imagen");
	var labelNombre = document.createElement('label');
	labelNombre.innerHTML = "Nombre: ";
	labelNombre.classList.add("atributo");
	var nombre = document.createElement('p');
	nombre.innerHTML = productos[i].nombre;
	var labelMarca = document.createElement('label');
	labelMarca.innerHTML = "Marca: ";
	labelMarca.classList.add("atributo");
	var marca = document.createElement('p');
	marca.innerHTML = productos[i].marca;
	var labelDescripcion = document.createElement('label');
	labelDescripcion.innerHTML = "Descripcion: ";
	labelDescripcion.classList.add("atributo");
	var description = document.createElement('p');
	description.innerHTML = productos[i].description;
	var div = document.createElement("div");
	div.classList.add("productoContainer");
	div.appendChild(imagen);
	div.appendChild(labelNombre);
	div.appendChild(nombre);
	div.appendChild(labelMarca);
	div.appendChild(marca);
	div.appendChild(labelDescripcion);
	div.appendChild(description);
	body.appendChild(div);	
}
}

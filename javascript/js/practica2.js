function procesar(){
    var persona = {};
    persona.nombre = document.getElementById("nombre").value;
    persona.apellidos = document.getElementById("apellidos").value;
    persona.direccion = document.getElementById("direccion").value;
    persona.telefono = document.getElementById("telefono").value;
    persona.email = document.getElementById("email").value;
    console.log(persona);
}
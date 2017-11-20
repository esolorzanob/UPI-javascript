var colores = ["azul", "anaranjado", "morado", "amarillo", "verde", "negro"];

function aleatorio(){
    var numero = Math.floor(Math.random() * 6);
    document.getElementById("cuadro").classList = [];
    document.getElementById("cuadro").classList.add(colores[numero]);   
}
function cambiar(){
    var color = document.getElementById("colores").value;
    document.getElementById("cuadro").classList = [];
    document.getElementById("cuadro").classList.add(color);  
}
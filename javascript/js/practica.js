var nombre = "Esteban";
var apellido = "Solorzano";
var edad = 33;
var annoDeNacimiento = 1984;

var resultado = "Mi nombre es " + nombre + " " + apellido;
resultado += ". Tengo " + edad + " años de edad.";
resultado += " Nací en el año " + annoDeNacimiento;
resultado += ". Dentro de 8 años tendré " + (edad + 8) + " años";

console.log(resultado);
console.log("");

var multiplicador = Math.floor((Math.random() * 10) + 1);
for (var i = 0; i < 13; i++) {
    console.log(i + " x " + multiplicador + " = " + (multiplicador * i));
}

var notas = [];
for (var i = 0; i < 10; i++) {
    notas.push(Math.floor((Math.random() * 61) + 40));
}
console.log(notas);
var notaMayor = 0;
var notaMenor = 100;
var promedio = 0;
for (var i = 0; i < notas.length; i++) {
    if (notaMayor < notas[i]) {
        notaMayor = notas[i];
    }
    if (notaMenor > notas[i]) {
        notaMenor = notas[i];
    }
    promedio += notas[i];
}
promedio = promedio / notas.length;
console.log(notaMayor);
console.log(notaMenor);
console.log(promedio);
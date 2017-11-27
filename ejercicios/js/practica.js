var info = {
    profesor: "Esteban",
    universidad: "UPI",
    curso: "Javascript",
    estudiantes: [
        {
            nombre: "Marco",
            notas: [
                { examen1: 90 },
                { examen2: 80 },
                { final: 84 }
            ]
        },
        {
            nombre: "Bryan",
            notas: [
                { examen1: 75 },
                { examen2: 95 },
                { final: 90 }
            ]
        },
        {
            nombre: "Isaac",
            notas: [
                { examen1: 95 },
                { examen2: 61 },
                { final: 97 }
            ]
        },
        {
            nombre: "Ana",
            notas: [
                { examen1: 60 },
                { examen2: 89 },
                { final: 72 }
            ]
        },
        {
            nombre: "Carlos",
            notas: [
                { examen1: 85 },
                { examen2: 70 },
                { final: 87 }
            ]
        },
    ]
}
var h1 = document.createElement('h1');
$(h1).text('App de notas para universidad ' + info.universidad);
$('body').append(h1);
var h2Curso = document.createElement('h2');
$(h2Curso).text('Curso: ' + info.curso);
$('body').append(h2Curso);
var h2Profesor = document.createElement('h2');
$(h2Profesor).text('Profesor: ' + info.profesor);
$('body').append(h2Profesor);
var cantidadEstudiantes = info.estudiantes.length;
var h3 = document.createElement('h3');
$(h3).text('Cantidad de estudiantes: ' + cantidadEstudiantes);
$('body').append(h3);
var p = document.createElement('p');
$(p).text('Seleccione un estudiante: ');
$('body').append(p);
var select = document.createElement('select');
$(select).attr('id', 'estudiantes');
$('body').append(select);
var option = document.createElement('option');
$(option).attr('value', '');
$(option).text('');
$('#estudiantes').append(option);
for (var i = 0; i < cantidadEstudiantes; i++) {
    var option = document.createElement('option');
    $(option).attr('value', info.estudiantes[i].nombre);
    $(option).text(info.estudiantes[i].nombre);
    $('#estudiantes').append(option);
}
var option = document.createElement('option');
$(option).attr('value', 'Todos');
$(option).text('Todos');
$('#estudiantes').append(option);

$('<br>').appendTo('body');
$('<br>').appendTo('body');
$('<p>Opciones:</p>').appendTo('body');
$('#estudiantes').change(seleccionar);
function seleccionar() {
    $('button').not('#seleccionar').remove();
    var valor = $('#estudiantes').val();
    if (valor) {
        if (valor == 'Todos') {
            $('<button onclick="promedioGeneral()">Mostrar promedio general</button>').appendTo('body');
            $('<button onclick="notaMayorGeneral()">Mostrar nota mayor general</button>').appendTo('body');
            $('<button onclick="notaMenorGeneral()">Mostrar nota menor general</button>').appendTo('body');
            $('<br>').appendTo('body');
            $('<button onclick="promedioGeneral1()">Mostrar promedio general examen1</button>').appendTo('body');
            $('<button onclick="notaMayor1()">Mostrar nota mayor examen1</button>').appendTo('body');
            $('<button onclick="notaMenor1()">Mostrar nota menor examen1</button>').appendTo('body');
            $('<br>').appendTo('body');
            $('<button onclick="promedioGeneral2()">Mostrar promedio general examen2</button>').appendTo('body');
            $('<button onclick="notaMayor2()">Mostrar nota mayor examen2</button>').appendTo('body');
            $('<button onclick="notaMenor2()">Mostrar nota menor examen2</button>').appendTo('body');
            $('<br>').appendTo('body');
            $('<button onclick="promedioGeneralFinal()">Mostrar promedio general examen final</button>').appendTo('body');
            $('<button onclick="notaMayorFinal()">Mostrar nota mayor examen final</button>').appendTo('body');
            $('<button onclick="notaMenorFinal()">Mostrar nota menor examen final</button>').appendTo('body');
        } else {
            $('<button onclick="promedioIndividual(\'' + valor + '\')">Mostrar promedio</button>').appendTo('body');
            $('<button onclick="notaMayorIndividual(\'' + valor + '\')">Mostrar nota mayor</button>').appendTo('body');
            $('<button onclick="notaMenorIndividual(\'' + valor + '\')">Mostrar nota menor</button>').appendTo('body');
        }
    }
}

function promedio(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    var promedio = suma / notas.length;
    return promedio;
}
function sacarTodasLasNotas() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        notas.push(e.notas[0].examen1);
        notas.push(e.notas[1].examen2);
        notas.push(e.notas[2].final);
    }
    return notas;
}
function sacarTodasLasNotas1() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        notas.push(e.notas[0].examen1);
    }
    return notas;
}
function sacarTodasLasNotas2() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        notas.push(e.notas[1].examen2);
    }
    return notas;
}
function sacarTodasLasNotasFinal() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        notas.push(e.notas[2].final);
    }
    return notas;
}
function promedioGeneral() {
    var notas = sacarTodasLasNotas();
    alert(promedio(notas));
}
function promedioGeneral1() {
    var notas = sacarTodasLasNotas1();
    alert(promedio(notas));
}
function promedioGeneral2() {
    var notas = sacarTodasLasNotas2();
    alert(promedio(notas));
}
function promedioGeneralFinal() {
    var notas = sacarTodasLasNotasFinal();
    alert(promedio(notas));
}
function mayor(notas) {
    var mayor = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] > mayor) mayor = notas[i];
    }
    return mayor;
}
function notaMayorGeneral() {
    var notas = sacarTodasLasNotas();
    alert(mayor(notas));
}
function notaMayor1() {
    var notas = sacarTodasLasNotas1();
    alert(mayor(notas));
}
function notaMayor2() {
    var notas = sacarTodasLasNotas2();
    alert(mayor(notas));
}
function notaMayorFinal() {
    var notas = sacarTodasLasNotasFinal();
    alert(mayor(notas));
}
function menor(notas) {
    var menor = 100;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] < menor) menor = notas[i];
    }
    return menor;
}
function notaMenorGeneral() {
    var notas = sacarTodasLasNotas();
    alert(menor(notas));
}
function notaMenor1() {
    var notas = sacarTodasLasNotas1();
    alert(menor(notas));
}
function notaMenor2() {
    var notas = sacarTodasLasNotas2();
    alert(menor(notas));
}
function notaMenorFinal() {
    var notas = sacarTodasLasNotasFinal();
    alert(menor(notas));
}
function sacarNotasEstudiante(nombre) {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        if (nombre == e.nombre) {
            notas.push(e.notas[0].examen1);
            notas.push(e.notas[1].examen2);
            notas.push(e.notas[2].final);
        }
    }
    alert(notas);
    return notas;
}
function promedioIndividual(valor) {
    var notas = sacarNotasEstudiante(valor);
    alert(promedio(notas));
}
function notaMayorIndividual(valor) {
    var notas = sacarNotasEstudiante(valor);
    alert(mayor(notas));
}
function notaMenorIndividual(valor) {
    var notas = sacarNotasEstudiante(valor);
    alert(menor(notas));
}
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
$(h1).text("Programa de notas para universidad " + info.universidad);
$('body').append(h1);
var h2 = document.createElement('h2');
$(h2).text("Curso: " + info.curso);
$('body').append(h2);
var h3 = document.createElement('h3');
$(h3).text("Profesor: " + info.profesor);
$('body').append(h3);
var p = document.createElement('p');
$(p).text('Cantidad de estudiantes: ' + info.estudiantes.length);
$('body').append(p);
$('<label>Seleccione el estudiante:   </label>').appendTo('body');
var select = document.createElement('select');
$(select).attr('id', 'estudiantes');
$('<option value=""></option>').appendTo(select);
for (var i = 0; i < info.estudiantes.length; i++) {
    var option = document.createElement('option');
    $(option).attr('value', info.estudiantes[i].nombre);
    $(option).text(info.estudiantes[i].nombre);
    $(select).append(option);
}
$('<option value="Todos">Todos</option>').appendTo(select);
$('body').append(select);
$('<br>').appendTo('body');
$('<br>').appendTo('body');
$('#estudiantes').change(seleccionar);
function seleccionar() {
    var valor = $('#estudiantes').val();
    $('button').remove();
    $('.espacio').remove();
    if (valor) {
        if (valor == 'Todos') {
            $('<button onclick="todosPromedioGeneral()">Promedio General</button>').appendTo('body');
            $('<button onclick="todosMayorGeneral()">Nota Mayor General</button>').appendTo('body');
            $('<button onclick="todosMenorGeneral()">Nota Menor General</button>').appendTo('body');
            $('<br class="espacio">').appendTo('body');
            $('<button onclick="todosPromedioEx1()">Promedio Examen1</button>').appendTo('body');
            $('<button onclick="todosMayorEx1()">Nota Mayor Examen1</button>').appendTo('body');
            $('<button onclick="todosMenorEx1()">Nota Menor Examen1</button>').appendTo('body');
            $('<br class="espacio">').appendTo('body');
            $('<button onclick="todosPromedioEx2()">Promedio Examen2</button>').appendTo('body');
            $('<button onclick="todosMayorEx2()">Nota Mayor Examen2</button>').appendTo('body');
            $('<button onclick="todosMenorEx2()">Nota Menor Examen2</button>').appendTo('body');
            $('<br class="espacio">').appendTo('body');
            $('<button onclick="todosPromedioFinal()">Promedio Examen Final</button>').appendTo('body');
            $('<button onclick="todosMayorFinal()">Nota Mayor Examen Final</button>').appendTo('body');
            $('<button onclick="todosMenorFinal()">Nota Menor Examen Final</button>').appendTo('body');
        } else {
            $('<button onclick="estudiantePromedio(\'' + valor + '\')">Promedio de notas</button>').appendTo('body');
            $('<button onclick="estudianteMayor(\'' + valor + '\')">Nota Mayor</button>').appendTo('body');
            $('<button onclick="estudianteMenor(\'' + valor + '\')">Nota Menor</button>').appendTo('body');
        }
    }
}
function sacarTodasLasNotas() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        notas.push(info.estudiantes[i].notas[0].examen1);
        notas.push(info.estudiantes[i].notas[1].examen2);
        notas.push(info.estudiantes[i].notas[2].final);
    }
    return notas;
}
function sacarNotasEx1() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        notas.push(info.estudiantes[i].notas[0].examen1);
    }
    return notas;
}
function sacarNotasEx2() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        notas.push(info.estudiantes[i].notas[1].examen2);
    }
    return notas;
}
function sacarNotasExFinal() {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        notas.push(info.estudiantes[i].notas[2].final);
    }
    return notas;
}
function promedio(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return Math.round(suma / notas.length);
}
function todosPromedioGeneral() {
    var notas = sacarTodasLasNotas();
    return promedio(notas);
}

function todosPromedioEx1() {
    var notas = sacarNotasEx1();
    return promedio(notas);
}
function todosPromedioEx2() {
    var notas = sacarNotasEx2();
    return promedio(notas);
}
function todosPromedioFinal() {
    var notas = sacarNotasExFinal();
    return promedio(notas);
}
function mayor(notas) {
    var mayor = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] > mayor) {
            mayor = notas[i];
        }
    }
    return mayor;
}
function todosMayorGeneral() {
    var notas = sacarTodasLasNotas();
    alert(mayor(notas));
}
function todosMayorEx1() {
    var notas = sacarNotasEx1();
    alert(mayor(notas));
}
function todosMayorEx2() {
    var notas = sacarNotasEx2();
    alert(mayor(notas));
}
function todosMayorFinal() {
    var notas = sacarNotasExFinal();
    alert(mayor(notas));
}
function menor(notas) {
    var menor = 100;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] < menor) {
            menor = notas[i];
        }
    }
    return menor;
}
function todosMenorGeneral() {
    var notas = sacarTodasLasNotas();
    alert(menor(notas));
}

function todosMenorEx1() {
    var notas = sacarNotasEx1();
    alert(menor(notas));
}
function todosMenorEx2() {
    var notas = sacarNotasEx2();
    alert(menor(notas));
}
function todosMenorFinal() {
    var notas = sacarNotasExFinal();
    alert(menor(notas));
}
function sacarNotasEstudiante(nombre) {
    var notas = [];
    for (var i = 0; i < info.estudiantes.length; i++) {
        if (nombre == info.estudiantes[i].nombre) {
            notas.push(info.estudiantes[i].notas[0].examen1);
            notas.push(info.estudiantes[i].notas[1].examen2);
            notas.push(info.estudiantes[i].notas[2].final);
        }
    }
    return notas;
}
function estudiantePromedio(valor) {
    var notas = sacarNotasEstudiante(valor);
    return promedio(notas);
}
function estudianteMayor(valor) {
    var notas = sacarNotasEstudiante(valor);
    alert(mayor(notas));
}
function estudianteMenor(valor) {
    var notas = sacarNotasEstudiante(valor);
    alert(menor(notas));
}

function reporte() {
    var tabla = document.createElement('table');
    var encabezados = document.createElement('tr');
    var nombre = document.createElement('th');
    $(nombre).text('Nombre');
    $(encabezados).append(nombre);
    var ex1 = document.createElement('th');
    $(ex1).text('Primer Examen');
    $(encabezados).append(ex1);
    var ex2 = document.createElement('th');
    $(ex2).text('Segundo Examen');
    $(encabezados).append(ex2);
    var final = document.createElement('th');
    $(final).text('Final Examen');
    $(encabezados).append(final);
    var promedio = document.createElement('th');
    $(promedio).text('Promedio');
    $(encabezados).append(promedio);
    $(tabla).append(encabezados);
    for (var i = 0; i < info.estudiantes.length; i++) {
        var e = info.estudiantes[i];
        var fila = document.createElement('tr');
        var nombreEstudiante = document.createElement('td');
        $(nombreEstudiante).text(e.nombre);
        $(fila).append(nombreEstudiante);
        var primerExamen = document.createElement('td');
        $(primerExamen).text(e.notas[0].examen1);
        $(fila).append(primerExamen);
        var segundoExamen = document.createElement('td');
        $(segundoExamen).text(e.notas[1].examen2);
        $(fila).append(segundoExamen);
        var final = document.createElement('td');
        $(final).text(e.notas[2].final);
        $(fila).append(final);
        var promedio = document.createElement('td');
        $(promedio).text(estudiantePromedio(e.nombre));
        $(fila).append(promedio);
        $(tabla).append(fila);
    }
    var fila = document.createElement('tr');
    var nombreEstudiante = document.createElement('td');
    $(nombreEstudiante).text('Todos');
    $(fila).append(nombreEstudiante);
    var primerExamen = document.createElement('td');
    $(primerExamen).text(todosPromedioEx1());
    $(fila).append(primerExamen);
    var segundoExamen = document.createElement('td');
    $(segundoExamen).text(todosPromedioEx2());
    $(fila).append(segundoExamen);
    var final = document.createElement('td');
    $(final).text(todosPromedioFinal());
    $(fila).append(final);
    var promedio = document.createElement('td');
    $(promedio).text(todosPromedioGeneral());
    $(fila).append(promedio);
    $(tabla).append(fila);
    $('body').append(tabla);
}

$('<button onclick="reporte()">Reporte</button>').appendTo('body');
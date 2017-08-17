 function buscarPokemon() {
    var numero = $('#numero').val();
    console.log(numero);
    
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/"+numero,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (pokemon) {
            $('#contenedor').remove();
            var contenedor = document.createElement("div");
            $(contenedor).attr("id", "contenedor");
            //imagen
            var imagen = document.createElement('img');
            $(imagen).attr('id','imagen');
            $(imagen).attr('src','imgs/'+pokemon.name+'.jpg');
            $(contenedor).append(imagen);
            //nombre
            var nombre = document.createElement("h1");
            $(nombre).append(pokemon.name);
            $(nombre).attr("id", "nombre");
            $(contenedor).append(nombre);
            //Caracteristicas sub titulo
            var subtitulo = document.createElement("h2");
            $(subtitulo).attr('id', 'subtitulo');
            $(subtitulo).append("Caracteristicas");
            $(contenedor).append(subtitulo);
            //Caracteristicas lista
            var lista = document.createElement("ul");
            $(lista).attr('id','lista');
            //Caracteristicas
            //peso
            var peso = document.createElement("li");
            $(peso).html("<span>Peso: </span>");
            $(peso).append(pokemon.weight);
            $(lista).append(peso);
            //altura
            var altura = document.createElement("li");
            $(altura).html("<span>Altura: </span>");
            $(altura).append(pokemon.height);
            $(lista).append(altura);
            //Tipo
            var tipo = document.createElement("li");
            $(tipo).html("<span>Tipo: </span>");
            $(tipo).append(pokemon.types[0].type.name);
            $(lista).append(tipo);
            $(contenedor).append(lista);
            $('body').append(contenedor);
        }
    });
    
    return false;
}
var numCartas = 8;
var carta1 = " ";
var carta2 = " ";
var score = 0;
var puntos = 0;
$(document).ready(inicio);
function inicio(){
  cargaCartas();
  $('.carta').on("click", voltear)
}
function voltear(){
  //Despliega numeros_array
  $(this).children().css("display", "flex");
  //Primera carta
  if(carta1==" "){
    carta1 = $(this);
    $(this).off();
  }else {
    carta2 = $(this);
    $('.carta').off();
    setTimeout(verificar, 900);
  }
}
function verificar(){
  if (
          (carta1.attr("data-num") == 'mariadb') && (carta2.attr("data-num") == 'mariadb_2009') ||
          (carta1.attr("data-num") =='mysql') && (carta2.attr("data-num") == 'mysql_1995') ||
          (carta1.attr("data-num") == 'oracle') && (carta2.attr("data-num") == 'oracle_1977') ||
          (carta1.attr("data-num") == 'postgres') && (carta2.attr("data-num") == 'postgres_1996') ||
          (carta1.attr("data-num") == 'sgdb') && (carta2.attr("data-num") == 'sgdb_1990') ||
          (carta1.attr("data-num") == 'sql') && (carta2.attr("data-num") == 'sql_1970') ||
          (carta1.attr("data-num") == 'sql_server') && (carta2.attr("data-num") == 'sql_server_1989') ||
          (carta1.attr("data-num") == 'sqllite') && (carta2.attr("data-num") == 'sqllite_2000') ||

          (carta2.attr("data-num") == 'mariadb') && (carta1.attr("data-num") == 'mariadb_2009') ||
          (carta2.attr("data-num") == 'mysql') && (carta1.attr("data-num") == 'mysql_1995') ||
          (carta2.attr("data-num") == 'oracle') && (carta1.attr("data-num") == 'oracle_1977') ||
          (carta2.attr("data-num") == 'postgres') && (carta1.attr("data-num") == 'postgres_1996') ||
          (carta2.attr("data-num") == 'sgdb') && (carta1.attr("data-num") == 'sgdb_1990') ||
          (carta2.attr("data-num") == 'sql') && (carta1.attr("data-num") == 'sql_1970') ||
          (carta2.attr("data-num") == 'sql_server') && (carta1.attr("data-num") == 'sql_server_1989') ||
          (carta2.attr("data-num") == 'sqllite') && (carta1.attr("data-num") == 'sqllite_2000') 
) {
  mensajeCoincidencia();
    carta1.removeClass("carta").addClass("desaparece");
    carta2.removeClass("carta").addClass("desaparece");
    carta1 = carta2 = " ";
    //Aumentamos el score
    score = score + 2;
    $("#puntos").html("Score: "+score);
    //Determinar cuando el juego termino
    puntos++;
    if (puntos==numCartas) {
      mensajeFelicidades();
    }
  }else {
    carta1.children().css("display", "none");
    carta2.children().css("display", "none");
    //Disminuimos score
    score--;
    $("#puntos").html("Score: "+score);
  }
  carta1 = carta2 = " ";
  $(".carta").on("click", voltear);
}
function cargaCartas(){
  //Declaramos el arreglo vacio
  var historia_array = new Array();
          var num = 0;
          //var  historia_nombres_array = ['Mexico','Colombia','Venezuela','Bolivia','Guatemala','Argentina','Chile','Uruguay','Peru','Ecuador'];
          var  historia_nombres_array = ['mariadb','mysql','oracle','postgres','sgdb','sql','sql_server','sqllite'];
          var  historia_anios_array= ['mariadb_2009','mysql_1995','oracle_1977','postgres_1996','sgdb_1990','sql_1970','sql_server_1989','sqllite_2000'];
  //Generamos arreglo
  for(var i=1; i<=numCartas; i++){
    historia_array.push(historia_nombres_array[i-1],historia_anios_array[i-1]);
  }
  $('.carta').each( function(i){
    num = historia_array.length;
    n = Math.floor(Math.random()*(num-1));
    $(this).html("<p>"+historia_array[n].substring(0,2)+"</p>");
    $(this).attr("data-num", historia_array[n]);
    $(this).find('p').addClass(historia_array[n]);
    historia_array.splice(n,1);
  });
  tiempo(5);
}
function tiempo(limite){
  var min = limite - 1;
  var seg = 59;
  t = setInterval(function(){
    $("#tiempo").html("");
    if (seg<10) {
      $("#tiempo").append("00: 0"+min+": 0" + seg);
    }else {
      $("#tiempo").append("00: 0"+min+": " + seg);
    }
    seg--;
    if (seg<0) {
      seg=59;
      min--;
    }
    if (min<0) {
      clearInterval(t);
      alert("Muy lento!...");
      $(".carta").off();
    }
  },1000);
}


function mensajeCoincidencia (){
  var messageElement = document.getElementById('coincidencia');

  // Mostrar el mensaje
  messageElement.classList.remove('hidden');

  // Desvanecer el mensaje después de 3 segundos
  setTimeout(function() {
      messageElement.classList.add('fade-out');
      
      // Ocultar el mensaje completamente después de que se haya desvanecido
      setTimeout(function() {
          messageElement.classList.add('hidden');
          messageElement.classList.remove('fade-out');
      }, 500); // Debe coincidir con el tiempo de transición en CSS
  }, 2000); // Tiempo que el mensaje será visible
}

function mensajeFelicidades (){
  var messageElement = document.getElementById('felicidades');

  // Mostrar el mensaje
  messageElement.classList.remove('hidden');

  // Desvanecer el mensaje después de 3 segundos
  setTimeout(function() {
      messageElement.classList.add('fade-out');
      
      // Ocultar el mensaje completamente después de que se haya desvanecido
      setTimeout(function() {
          messageElement.classList.add('hidden');
          messageElement.classList.remove('fade-out');
      }, 500); // Debe coincidir con el tiempo de transición en CSS
  }, 8000); // Tiempo que el mensaje será visible
}

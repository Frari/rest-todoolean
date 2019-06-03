$(document).ready(function(){

  var url_base =  'http://157.230.17.132:3017/todos/';
  stampaLista();

// funzione per far aggiungere all'utente elementi
// all'interno della lista
  $('.but_add_list').click(function(){
    var aggiunta_utente = $('.add_list').val();
    $('.add_list').val('');
    $.ajax({
      'url':url_base,
      'method':'POST',
      'data':{
        'text':aggiunta_utente
      },
      'success':function(data){
        stampaLista();
      },
      'error':function(){
        alert(errore);
      }
    })
  });




// funzione che mi stampa gli elementi della lista dopo prima
// chiamata ajax
  function stampaLista() {
    $.ajax({
      'url':url_base,
      'method':'GET',
      'success':function(data){

        for (var i = 0; i < data.length; i++) {
          $('.list').append('<div>'+ data[i].text +'</div>');
        }
      },
      'error':function(){
        alert(errore);
      }
    })
  }

});

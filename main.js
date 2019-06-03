$(document).ready(function(){

  var url_base =  'http://157.230.17.132:3017/todos/';
  stampaLista();

// funzione per far aggiungere all'utente elementi
// all'interno della lista
  $('#but_add_list').click(function(){
    var aggiunta_utente = $('#add_list').val();

    $('#add_list').val('');
    $.ajax({
      'url':url_base,
      'method':'POST',
      'data':{
        'text':aggiunta_utente
      },
      'success':function(data){
        stampaLista();
        // $('.list').append('<div>'+ data.text +'</div>');
      },
      'error':function(){
        alert(errore);
      }
    })
  });

// al click dell'icona permetto all'utente
// di cancellare l'elemento dalla lista
$('.list').on('click', 'span', function(){
  var id_delete = $(this).attr('data-id');

  $.ajax({
    'url':url_base + id_delete,
    'method':'DELETE',
    'success':function(data){
      stampaLista();
      // $('.list').append('<div>'+ data.text +'</div>');
    },
    'error':function(){
      alert(errore);
    }
  })
});



// funzione che mi stampa gli elementi della lista dopo prima
// chiamata ajax
  function stampaLista() {
    $('.list').html('');
    $.ajax({
      'url':url_base,
      'method':'GET',
      'success':function(data){

        for (var i = 0; i < data.length; i++) {
          var elemento = data[i];
          $('.list').append('<div>'+ elemento.text +'<span data-id="'+ elemento.id +'"><i class="fas fa-trash-alt"></i></span></div>');
        }
      },
      'error':function(){
        alert(errore);
      }
    })
  }

});

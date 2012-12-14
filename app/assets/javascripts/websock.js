
var webSocket ;

$(function(){
    webSocket = new WebSocket('ws://localhost:8000/');

    webSocket.onopen = function(event){
      console.log('has open...');
    };

    webSocket.onmessage = function(event){
      console.log('ke' + event.data);
    };

    webSocket.onerror = function(event){
      console.log('error');
    };

    webSocket.onclose = function(event){
    console.log('end');
    $("#chat").append('<br>Connection closed');
    };

    $("form#chat_form").submit(function(e){
      e.preventDefault();
      var textfield = $("#message");
      webSocket.send(textfield.val());
      textfield.val("");
      });
    $("form#nick_form").submit(function(e){
        e.preventDefault();
        var textfield = $("#nickname");
        webSocket.send("lexus1");
    });
}) 



var webSocket ;

$(function(){
  webSocket = new WebSocket('ws://localhost:8000/');

  webSocket.onopen = function(event){
    console.log('has open...');
  };

  webSocket.onmessage = function(event){
    console.log('message:' + event.data);
  };

  webSocket.onerror = function(event){
    console.log('error');
  };

  webSocket.onclose = function(event){
    console.log('end');
  };

  // light
  $('#cart button.light-1-on').click(function () {
    console.log("light-1-on");
    webSocket.send("light-1-on");
  });

  $('#cart button.light-1-off').click(function () {
    console.log("light-1-off");
    webSocket.send("light-1-off");
  });

  $('#cart button.light-2-on').click(function () {
    console.log("light-2-on");
    webSocket.send("light-2-on");
  });

  $('#cart button.light-2-off').click(function () {
    console.log("light-2-off");
    webSocket.send("light-2-off");
  });

  $('#cart button.light-3-on').click(function () {
    console.log("light-3-on");
    webSocket.send("light-3-on");
  });

  $('#cart button.light-3-off').click(function () {
    console.log("light-3-off");
    webSocket.send("light-3-off");
  });

  $('#cart button.light-4-on').click(function () {
    console.log("light-4-on");
    webSocket.send("light-4-on");
  });

  $('#cart button.light-4-off').click(function () {
    console.log("light-4-off");
    webSocket.send("light-4-off");
  });

});


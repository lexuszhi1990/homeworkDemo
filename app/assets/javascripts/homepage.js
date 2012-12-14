$(function () {
  $('<div id="sliderspeed"></div>').slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
    slide: function (event, ui) {
      // body..
    }
  });
  
  $('#cart button.left').click(function () {
      $('#cart button:eq(0)').html("DASD");
      console.log("left");
  });
  $('#cart button.right').click(function () {
      console.log("right");
  });
  $('#cart button.high').click(function () {
      console.log("high");
  });
  $('#cart button.normal').click(function () {
      console.log("normal");
  });
  $('#cart button.low').click(function () {
      console.log("low");
  });
});

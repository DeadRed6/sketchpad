$(document).ready(function() {
  var gridW = 8;
  function drawGrid(w) {
    $(".container").empty();
    for(var x = 1; x <= Math.pow(w, 2); x++) {
      $(".container").append("<div class='pixel'></div>");
      //if()
      //$(".container:nth-child()")
    }
    //floor is added in case the result is a recurring decimal
    var pixH = Math.floor(768 / w) - 2;
    $(".pixel").css({"height": pixH, "width": pixH});
    //for testing how many pixels were drawn.
    alert($(".pixel").length);
  }
  drawGrid(gridW);

  $("button").on("click",function () {
    var newWidth = prompt("Choose the width of the grid");
    drawGrid(newWidth);
  });
});

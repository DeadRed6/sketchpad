$(document).ready(function() {
  var gridW = 16;
  
  function drawGrid(w) {
    $(".container").empty();
    for(var x = 1; x <= Math.pow(w, 2); x++) {
      $(".container").append("<div class='pixel'></div>");
    }
    var pixH = Math.floor(640 / w) - 2;
    $(".pixel").css({"height": pixH, "width": pixH});
    }
  drawGrid(gridW);
  defaultColour();

  $("#rainbow").click(function() {rainbow()});
  $("#erase").click(function() {erase()});
  $("#default").click(function() {defaultColour()});
  $("#redraw").click(function() {redraw()});
  $("#clear").click(function() {clear()});
  
  function redraw() {
    while(true) {
      gridW = prompt("Width of the grid (1-32)?");
      if(gridW == null) {break};
      if(gridW >= 1 && gridW <= 32) {
        drawGrid(gridW);
        break;
      }
    }
  }
  
  function defaultColour() {
    $(".container").on("mouseenter", ".pixel", function() {
      $(this).css("background-color", "black");
    });
  }

  function rainbow() {
    $(".container").on("mouseenter", ".pixel", function() {
      var ranCol = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(
        Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
      $(this).css("background-color", ranCol);
    });
  }

  function clear() {
    $(".pixel").css("background-color", "white");
  }
  
  function erase() {
    $(".container").on("mouseenter", ".pixel", function() {
     $(this).css("background-color", "white"); 
    });
  }
});

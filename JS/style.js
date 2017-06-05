console.log("Hello from style.js");

$(function() {
  var boxes = $(".space");
  boxes.click(function() {
    var clickedBox = $(this),
        max = 0;
    boxes.each(function() {
      var z = parseInt($(this).css("z-index"), 10);
      max = Math.max(max, z);
    });
    clickedBox.css("z-index", max + 1);
    $(this).toggleClass("grow-div");
    $(this).children().toggleClass("showP");
    console.log(parseInt($(this).css("z-index")));
  });
});



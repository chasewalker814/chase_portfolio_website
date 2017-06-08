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
    var width = $(window).width();
    if (width <= 480) {
      $(this).children(".box-image").toggleClass("image-hide");
      $(this).children().toggleClass("showP-small");
    }
    else {
      $(this).toggleClass("grow-div");
      $(this).children().toggleClass("showP");
    }
    clickedBox.css("z-index", max + 1);
    console.log(parseInt($(this).css("z-index")));
  });
});



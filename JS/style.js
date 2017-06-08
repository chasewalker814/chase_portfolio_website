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

(function($) {
  $.fn.visible = function(partial) {
    var $t = $(this),
    $w = $(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);


var mods = $(".fly-box").addClass(function () {
    return $(this).visible(true) && "already-visible";
});
$(window).on("scroll", function () {
  mods.each(function () {
    $(this).toggleClass("slide-in", $(this).visible(true));
  });
});

// var win = $(window);
// var allMods = $(".module");
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });
// win.scroll(function(event) {
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("slide-in"); 
//     } 
//   });
// });

// var win = $(window);

// var allMods = $(".fly-box");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.scroll(function(event) {
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("slide-in"); 
//     } 
//   });
  
// });
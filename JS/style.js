$(document).ready(function(){

  console.log("Hello from style.js");
// ==================== ZOOM BOXES ===================
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
  // ===================== ABOUT PICS ===================
  $(function() {
    var boxes = $(".collage-pics");
    boxes.click(function() {
      var clickedBox = $(this),
          max = 0;
      boxes.each(function() {
        var z = parseInt($(this).css("z-index"), 10);
        max = Math.max(max, z);
      });
      $(this).toggleClass("grow-collage");
      clickedBox.css("z-index", max + 1);
      console.log(parseInt($(this).css("z-index")));
    });
  });
// ====================== FLY BOXES =====================
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
// ================== HEADER LINK AUTO SCROLL ==============
  $("#header-name").click(function() {
    $("html, body").animate({
      scrollTop: $("body").offset().top}, 'slow');
  });
  $("#about-button").click(function() {
    $("html, body").animate({
      scrollTop: $("#about-me-div").offset().top}, 'slow');
  });
  $("#skills-button").click(function() {
    $("html, body").animate({
      scrollTop: $("#skills-container").offset().top}, 'slow');
  });
  $("#exp-button").click(function() {
    $("html, body").animate({
      scrollTop: $(".exp-container").offset().top}, 'slow');
  });
  $("#contact-button").click(function() {
    $("html, body").animate({
      scrollTop: $(".footer-div").offset().top}, 'slow');
  });
  // =================== PARALLAX BANNER ==============
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $("#top-banner").css('top', -(scrollTop * .4) + 'px');
  });
// ======================= AUTO TYPING ================
  $(function(){
    $(".typed-blurb1").typed({
      strings: ["Building a better user experience!^2000", "Incorporating HTML5, CSS3, and <br>JavaScript.^2000", "Putting emphasis on mobile first design <br>and responsiveness.^2000"],
      typeSpeed: 45,
      loop: true,
      cursorChar: "|"
    });
  });
});
$(document).ready(function() {
  
  // Write the Logo Tech Day
  var paths = document.querySelectorAll(".path-logo");
  var timeouts = [];
  var stagger = 200;

  draw();
  

  setTimeout(function() {
    $(".me").addClass("shown");
  }, stagger * paths.length);
  
  function clearTimeouts(arr) {
    arr.forEach(function(a) {
      clearTimeout(a);
    });
  }
  
  function draw() {
    clearTimeouts(timeouts);

    $(paths).removeClass("animatable").css("fill", "transparent");

    [].forEach.call(paths, function(path) {
      $(path).css({
        "stroke-dasharray": path.getTotalLength(),
        "stroke-dashoffset": path.getTotalLength()
      });
    });


    [].forEach.call(paths, function(path, i) {
      timeouts[i] = setTimeout(() => {
        $(path).addClass("animatable");
        $(path).css({
          "stroke-dashoffset": 0,
          "fill": "white"
        });
      }, i * stagger);
    });
  }

  
  // Animation Logo TechDay
  var viewWidth = window.innerWidth;
  var bottomNumber = "-200px";
  if(viewWidth <= 414) {
      bottomNumber = "-115px";
  }
  var tl = new TimelineMax({});
  tl.add( TweenLite.to($('.logo-techday'), 1, {bottom: bottomNumber, ease:Power2.easeInOut}) );
  tl.add( TweenLite.to($('.filled-rect'), 1, {top:"-20px", left: "-20px", ease: Elastic.easeOut.config(1, 0.3)}) );
  tl.add( TweenLite.to($('.unfilled-rect'), 1, {bottom:"-20px", right: "-20px", ease: Elastic.easeOut.config(1, 0.3)}) );
});
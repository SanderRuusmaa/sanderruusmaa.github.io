$( document ).ready(function(){
  $(".preload").removeClass("fade");
  $('.preload').delay(1000).queue(function (next) { 
  $(this).hide(); 
  next(); 
});
})


var path = document.querySelector('#svg_4');
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

let triggered1 = false;
let triggered2 = false;
let triggered3 = false;
// When the page scrolls...
window.addEventListener("scroll", function(e) {

    
    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop -800 + document.body.scrollTop) / (document.documentElement.scrollHeight-800 - document.documentElement.clientHeight);
    console.log(scrollPercentage)
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;
    
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    
    if (!triggered1 && path.style.strokeDashoffset < 2400 && path.style.strokeDashoffset > 2100){
      $(".point1").css("transform","scale(1)");
      triggered1 = true;
    }else if(triggered1 && path.style.strokeDashoffset>2400){
      $(".point1").css("transform","scale(0)");
      triggered1 = false;
    }
    if (!triggered2 && path.style.strokeDashoffset < 1265 && path.style.strokeDashoffset > 1100){
      $(".point2").css("transform","scale(1)");
      triggered2 = true;
    }else if(triggered2 && path.style.strokeDashoffset>1265){
      $(".point2").css("transform","scale(0)");
      triggered2 = false;
    }
    if (!triggered3 && path.style.strokeDashoffset < 50 && path.style.strokeDashoffset > -1){
      $(".point3").css("transform","scale(1)");
      triggered3 = true;
    }else if(triggered3 && path.style.strokeDashoffset>50){
      $(".point3").css("transform","scale(0)");
      triggered3 = false;
    }

      // When complete, remove the dash array, otherwise shape isn't quite sharp
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

  });

  gsap.registerPlugin(ScrollTrigger);
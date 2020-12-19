$( document ).ready(function(){
  $(".preload").removeClass("fade");
  $('.preload').delay(1000).queue(function (next) { 
  $(this).hide(); 
  next(); 
});
})

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".contact-info",{
    scrollTrigger: {
      trigger:".contact-info",
      start:"0 75%",
      end:"+=0",
      toggleActions: "play none none reset",
      markers:true,
    },
    "transform":"translateX(0)"
  });

  gsap.fromTo(".intro", {opacity:0}, {opacity:1,delay:0.3, duration:2, "transition":"ease-out"});
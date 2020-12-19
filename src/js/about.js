$( document ).ready(function(){
  $(".preload").removeClass("fade");
  $('.preload').delay(1000).queue(function (next) { 
  $(this).hide(); 
  next(); 
});
})

gsap.registerPlugin(ScrollTrigger);

//contact info slide in
gsap.to(".contact-info",{
  scrollTrigger: {
    trigger:".focus",
    start:"90% 95%",
    end:"+=0",
    toggleActions: "play none none reset",
  },
  "transform":"translateX(0)"
});

//parallax pattern
gsap.to(".established",{
  scrollTrigger:{
      trigger: ".header",
      start:"top",
      end: "bottom",
      scrub:1.5,
  },
  "background-position":"2% 20%"
})

//defining triggers in established section
let t1 = gsap.timeline({
  scrollTrigger: {
      trigger: '#est',
      start: "0% 50%",
  }
});

let t2 = gsap.timeline({
  scrollTrigger: {
      trigger: '.est-story',
      start: "0% 50%",
  }
});

let t3 = gsap.timeline({
  scrollTrigger: {
      trigger: '#whatdowedo',
      start: "0% 50%",
  }
});

t1.from("#est", {scale:0.9, opacity:0, duration: 1});
t2.from(".est-story", {opacity:0,duration:1});
t3.from("#whatdowedo", {scale:0.2,opacity:0, duration:1})
t3.from("#abouttext1",{opacity:0, delay:0.1, duration:0.7})
t3.from("#abouttext2",{opacity:0, delay:0.1, duration:0.7})
t3.from("#abouttext3",{opacity:0, delay:0.1, duration:0.7})
t3.from("#oliver", {"transform":"translateX(100%)"})

//about us intro text fade in
gsap.fromTo(".about-intro", {opacity:0}, {opacity:1,delay:0.3, duration:2, "transition":"ease-out"});
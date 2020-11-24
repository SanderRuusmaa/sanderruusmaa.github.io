$( document ).ready(function(){
    $(".preload").removeClass("fade");
    $('.preload').delay(1000).queue(function (next) { 
    $(this).hide(); 
    next(); 
  });
})

function parallaxAlla(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
    
}

function parallaxYles(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * -speed}px)`;
}

function parallaxParemale(element, distance, speed, sync) {
    const item = document.querySelector(element);
    item.style.transform = `translate(${distance * speed}px, ${distance * sync}px)`;
}


function backToHome() {
    window.scrollTo(0,0);
}


window.addEventListener("scroll", function() {
    parallaxYles(".film", window.scrollY, 3);
    parallaxAlla(".prod", window.scrollY, 0.7);
    //parallaxParemale(".service", window.scrollY, 3, 0.7);
})

const submitSlide = () =>{
    const submitBtn = document.querySelector('.submitBtn');
    const submitForm = document.querySelector('.submit-form');
    const exit = document.querySelector('.exit');

    submitBtn.addEventListener('click', ()=>{
        submitForm.classList.toggle('submit-form-active');
    })
    exit.addEventListener('click', ()=>{
        submitForm.classList.toggle('submit-form-active');
    })
}

//const logo = document.querySelectorAll("#leftSVG path");

//for(let i=0; i<logo.length;i++){
//    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//}

gsap.registerPlugin(ScrollTrigger);


//svg line anim
ScrollTrigger.create({
    trigger: "#leftSVG",
    toggleActions: "restart pause resume pause",
    start: "30% 40%",
    toggleClass: "active",
    once:true,
});

ScrollTrigger.create({
    trigger: "#rightSVG",
    toggleActions: "restart pause resume pause",
    start: "30% 40%",
    toggleClass: "active",
    once:true
});


//parallax descript
gsap.to(".description",{
    scrollTrigger: {
        trigger: ".description",
        start: "top",
        end: "+=200%",
        pinSpacing: false,
        scrub: true,
        pin:true,
    },
});

//parallax pattern
gsap.to(".intro",{
    scrollTrigger:{
        trigger: ".intro",
        start:"top",
        end: "bottom",
        scrub:1.5,
    },
    "background-position":"2% 20%"
})


//section animations
let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#fromshort',
        start: "0% 50%",
    }
});

t1.from("#fromshort", {y:200, opacity:0, duration: 0.5})
.from("#vid", {x:-200, opacity: 0, duration: 0.9})
.from("#ad", {x:200, opacity: 0, duration: 0.7})
.from("#film", {y:-100, opacity: 0, duration: 0.8})

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ifyou",
        start: "0% 50%",
    }
})

t2.from(".bulb", {opacity: 0, duration: 1})
.from(".ifyou", {opacity:0, duration: 2})
.from(".submitBtn", {y: 100, opacity:0, duration: 2})





submitSlide();
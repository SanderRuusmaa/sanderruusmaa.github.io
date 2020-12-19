$( document ).ready(function(){
    $(".preload").removeClass("fade");
    $('.preload').delay(1000).queue(function (next) { 
    $(this).hide(); 
    next(); 
  });
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

//parallax of intro
gsap.to(".film",{
    scrollTrigger: {
        trigger: '.intro',
        start: "50% 50%",
        scrub:0.7,
    },
    y:-1000
})

gsap.to(".prod",{
    scrollTrigger: {
        trigger: '.intro',
        start: "50% 50%",
        scrub:0.7,
    },
    y:600
})
gsap.to(".service",{
    scrollTrigger: {
        trigger: '.intro',
        start: "50% 50%",
        scrub:0.7,
    },
    x:1000
})

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
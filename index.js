//Movement Animation to happen
const card = document.querySelector(".kaart");
const container = document.querySelector(".konteiner");
//Items
const datel = document.querySelector("#datel-logo");
const kaamera = document.querySelector("#kaamera");
const subaru = document.querySelector("#subaru");
const trenn = document.querySelector("#trenn");
const mina = document.querySelector("#mina");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	//Popout
	datel.style.transform = "translateZ(200px)";
	mina.style.transform = "translateZ(75px)";
	subaru.style.transform = "translateZ(150px) rotate(-8deg)";
	trenn.style.transform = "translateZ(100px)";
	kaamera.style.transform = "translateZ(200px) rotate(10deg)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//Popback
	mina.style.transform = "translateZ(0px)";
	datel.style.transform = "translateZ(0px) rotateZ(0deg)";
	subaru.style.transform = "translateZ(0px) rotate(8deg)";
	trenn.style.transform = "translateZ(0px)";
	kaamera.style.transform = "translateZ(0px) rotate(-10deg)";
});
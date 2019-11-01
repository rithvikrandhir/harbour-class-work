
let controller = new ScrollMagic.Controller();
let profileAnimation = new TimelineMax()
	.to(".background-image", 2, {backgroundPosition:'0 -50%'})
	.fromTo(".profile-image", 2, {y:'200%'}, {y:'0%'}, 1)
	.fromTo(".side-panel", 2, {x:'100%'}, {x:'0%'}, 1)
	.fromTo(".main-content h1", 2, {y:'500%'}, {y:'0%'}, 1)
	.fromTo(".main-content ul li:nth-of-type(1)", 1, {y:'2vh', opacity: 0}, {y:'0%', opacity: 1}, 2)
	.to(".main-content ul li:nth-of-type(1)", 0.5, {opacity: 0}, 3)
	.fromTo(".main-content ul li:nth-of-type(2)", 0.5, {y:'2vh', opacity: 0}, {y:'-5vh', opacity: 1}, 3)
	.to(".main-content ul li:nth-of-type(2)", 0.5, {opacity: 0}, 4)
	.fromTo(".main-content ul li:nth-of-type(3)", 0.5, {y:'2vh', opacity: 0}, {y:'-9vh', opacity: 1}, 4);

let workAnimation = new TimelineMax()
	.to(".project1", 0.05, {x:'-300%'}, 0)
	.to(".project1 .project-image", 0.01, {y: '60%'}, 0)
	.from(".project1 .project-name", 0.01, {opacity:1}, 0)
	.from(".project1 h1:first-child", 0.01, {opacity:1, color: '#EC0F0D'}, 0)
	.from(".project1 .content", 0.01, {opacity:1}, 0)

	.to(".project2", 0.05, {x:'-300%'}, 0)
	.to(".project2 .project-image", 0.01, {y: '0%'}, 0)
	.to(".project2 .project-name", 0.01, {opacity:1}, 0)
	.to(".project2 h1:first-child", 0.01, {opacity:1, color: '#EC0F0D'}, 0)
	.to(".project2 .project-image", 0.01, {y: '60%'}, 0.01)
	.to(".project2 .content", 0.01, {opacity:1}, 0)
	.to(".project2 .project-name", 0.01, {opacity:0}, 0.01)
	.to(".project2 .content", 0.01, {opacity:0}, 0.01)
	.to(".project2 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.01)
	
	.to(".project3", 0.05, {x:'-300%'}, 0)
	.to(".project3 .project-image", 0.01, {y: '0%'}, 0.01)
	.to(".project3 .project-name", 0.01, {opacity:1}, 0.01)
	.to(".project3 h1:first-child", 0.01, {opacity:1, color: '#EC0F0D'}, 0.01)
	.to(".project3 .project-image", 0.02, {y: '60%'}, 0.02)
	.to(".project3 .content", 0.01, {opacity:1}, 0.01)
	.to(".project3 .project-name", 0.01, {opacity:0}, 0.02)
	.to(".project3 .content", 0.01, {opacity:0}, 0.02)
	.to(".project3 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.02)

	.to(".project4", 0.05, {x:'-300%'}, 0)
	.to(".project4 .project-image", 0.01, {y: '0%'}, 0.02)
	.to(".project4 .project-name", 0.02, {opacity:1}, 0.02)
	.to(".project4 .content", 0.01, {opacity:1}, 0.02)
	.to(".project4 h1:first-child", 0.01, {opacity:1, color: '#EC0F0D'}, 0.02)
	.to(".project4 .project-image", 0.02, {y: '60%'}, 0.04)
	.to(".project4 .project-name", 0.01, {opacity:0}, 0.04)
	.to(".project4 .content", 0.01, {opacity:0}, 0.04)
	.to(".project4 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.04)

	.to(".project5", 0.05, {x:'-300%'}, 0)
	.to(".project5 .project-image", 0.01, {y: '0%'}, 0.03)
	.to(".project5 .project-name", 0.02, {opacity:1}, 0.04)
	.to(".project5 .content", 0.01, {opacity:1}, 0.04)
	.to(".project5 h1:first-child", 0.01, {opacity:1, color: '#EC0F0D'}, 0.04);
	
	
// new ScrollMagic.Scene({
// 				triggerElement: "#slideContainer1",
// 				triggerHook: "onStart",
// 				triggerHook: 0,
// 				duration: "20%"
// 			})
// 			.setPin("#slideContainer1")
// 			.addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);

new ScrollMagic.Scene({
				triggerElement: ".main-section",
				triggerHook: "onEnter",
				triggerHook: 0,
				duration: "200%"
			})
			.setPin("#slideContainer2")
			.setTween(profileAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
			
new ScrollMagic.Scene({
				triggerElement: ".work-section",
				triggerHook: "onEnter",
				triggerHook: 0,
				duration: "600%"
			})
			.setPin(".work-section")
			.setTween(workAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

window.addEventListener("mousemove", onMouseMove);


function mapHueX(x){
	const percentageX = x / window.innerWidth;
	return percentageX * 360;
}
function mapHueY(y){
	const percentageY = y / window.innerWidth;
	return percentageY * 360;
}

function onMouseMove(event){
	const hueX = mapHueX(event.clientX);
	const hueY = mapHueY(event.clientY);

	TweenMax.to(
		".layer2, .highlight-word-1", 
		1,
		{
			color: `hsl(${hueX}, 100%, 50%)`,
			
		}
	);
	TweenMax.to(
		".layer3, .highlight-word-2", 
		1,
		{
			 color: `hsl(${hueY}, 100%, 50%)`
		}
	);

}

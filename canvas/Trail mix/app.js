let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

function Circle(x, y, radius){
  
  this.draw = () => {
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2);
    c.stroke();
  }
  this.update = () => {
    this.draw();
    
  }
}

let resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let mouse = {
  x: 0,
  y:0
}
let old = {
  x: 0,
  y:0
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x
  mouse.y = e.y
})
let circle = new Circle(0, 0, 30);
//console.log(Circle.update);
let animate = () => {
  
  resize();
  //let oldCircle = circle;
  //let newCircle = new Circle(oldCircle.x, oldCircle.y, oldCircle.radius - 2);
  circle.update();

  requestAnimationFrame(animate());
}
animate();
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let mouse = {x:0, y:0}
document.addEventListener('mousemove', (e)=>{
  mouse.x = e.x;
  mouse.y = e.y;
})

let calcDistance = (x1,y1, x2, y2) => {

  let x = x2 - x1;  
  let y = y2 - y1;  
  let radius = Math.sqrt(Math.pow(x,2) + Math.pow(y, 2));

  return radius

}
function Circle(x, y, radius){
  
  this.draw = () => {
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill();
    // ctx.stroke();
  }
  this.update = () => {
    this.draw();
    x += mouse.x;
    y += mouse.y;
  }
}
function Circle2(x, y, radius){
  
  this.draw = () => {
    ctx.fillStyle = `hsl(${mapHue(mouse.x, mouse.y)}, 100%, 50%)`
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill();
    // ctx.stroke();
  }
  this.update = () => {
    this.draw();
  }
}
let mapHue = (x,y) => {
  x =  x / window.innerWidth * 360;
  y =  y / window.innerWidth * 360;
  return x+y/2
}
let animate = () => {
  resize();
  requestAnimationFrame(animate);
  let radius = calcDistance(canvas.width/2, canvas.height/2, mouse.x, mouse.y);
  
  ctx.beginPath();
  //ctx.arc
  new Circle(canvas.width/2, canvas.height/2, radius).update();
  new Circle2(canvas.width/2 + Circle.x, canvas.height/2 + Circle.y, radius).update();
}
animate();
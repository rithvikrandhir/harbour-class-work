let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let button = document.querySelector('button');

let isMouseDown = false;
// window.addEventListener('mousedown', () => {
//   new Circle(mouse.x, mouse.y, 10).update();
// })
window.addEventListener('mouseup', () => {
  isMouseDown = false;
})
window.addEventListener('mousedown', () => {
    
  isMouseDown = true;
})
button.addEventListener('click', () => {
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
})


let resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let mouse = { x: 0, y: 0 }
document.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  //isMouseDown = true;
})


function Circle(x, y, radius) {
  let color = `hsl(${((window.innerWidth/x) + (window.innerHeight/y)/2) * 360}, 100%, 50%)`
  this.draw = () => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    //ctx.stroke();
  }
  this.update = () => {
    this.draw();
    // x
    // y += mouse.y;
  }
}

resize();
let animate = () => {
  //resize();
  requestAnimationFrame(animate);

  // let radius = calcDistance(canvas.width/2, canvas.height/2, mouse.x, mouse.y);
  if(isMouseDown){
    new Circle(mouse.x, mouse.y, 30).update();
  }
}
animate();
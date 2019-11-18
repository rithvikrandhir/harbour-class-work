const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function Circle(x, y, dx, dy, radius) {

  let color = colors[Math.floor(Math.random() * colors.length)];
  let minRadius = radius;
  this.draw = () => {
    c.beginPath();
    c.fillStyle = color;
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.fill();

  }

  this.update = () => {
    this.draw();
    x += dx;
    y += dy;
    if (x > window.innerWidth - radius || x < radius) {
      dx = -dx;
    }
    if (y > window.innerHeight - radius || y < radius) {
      dy = -dy;
    }
    if(mouse.x - x < 50 && mouse.x - x > -50){
      if (radius < 40){radius += 1;}
    } else if (radius >= minRadius){
      radius -= 1;
    }
    if(mouse.y - y < 50 && mouse.y - y > -50){
      if (radius < 40){radius += 1;}
    }else if (radius >= minRadius){
      radius -= 1;
    }

  }
}
// let radius = 30;
// let x = Math.random() * innerWidth + radius;
// let y = Math.random() * innerHeight + radius;
// let dx = Math.random() * 0.5 * 8;
// let dy = Math.random() * 0.5 * 8;
let mouse = {
  x:0,
  y:0
}

window.addEventListener('mousemove',  (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  //console.log(mouse.x, mouse.y)
})

let circles = [];
let colors = [
  '#B80C09',
  '#0B4F6C',
  '#01BAEF',
  '#040F16',
  '#320E3B'
];
for (let i = 0; i < 500; i++) {
  let radius = Math.floor(Math.random() * 10) + 1;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;
  circles.push(new Circle(x,y,dx,dy,radius));
}
//circle.update();

let resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let animate = () => {
  resize();
  requestAnimationFrame(animate);
  // c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

animate();
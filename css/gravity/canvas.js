import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
var grd = c.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "#F2CA52");
grd.addColorStop(1, "#F2911B")
const colors = ["#F2911B", '#F2CA52', '#F25C05', '#F20505']
var gravity= 1;
var friction = 0.9;
var drop = false;
// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})
var count= 0;
addEventListener("click", function(){
    count++;
    if(count%2 ==1){
        drop = true;
    }else{
        drop = false;
    }
    
    init();
    [... document.getElementsByTagName("h1")].forEach(e=> e.classList.toggle("visible"));

})
// Objects
function Ball(x, y,dx, dy,radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx= dx;
    this.radius = radius;
    this.color = color;
   


this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.strokeStyle= '#F25C05';
    c.stroke();
    c.closePath();
}

this.update = function() {
    if(drop ==true){
    if(this.y+ this.radius+this.dy> canvas.height)
    {
        this.dy=-this.dy*friction;
    }else{
        this.dy+=gravity;
    }

    if(this.x+ this.radius+this.dx> canvas.width|| this.x-this.radius<=0)
    {
        this.dx=-this.dx*friction;
    }
    
    this.y+=this.dy;
    this.x+=this.dx;
}
    this.draw();
}
}
// Implementation
var balls= [];
function init() {
    
balls=[];
 for (let i = 0; i < 400; i++) {
     var rad= Math.random()*20+10;
     var x= Math.random()* (canvas.width-2*rad)+rad;
    var y = Math.random() *(canvas.height*0.4);
    var dx = Math.random()*4-2;
    var dy = Math.random()*4-2;
    var color = Math.floor(Math.random()*4);
    balls.push(new Ball(x, y,dx, 2,rad, colors[color]));
} 
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
   
    balls.forEach(object => {
     object.update()
     });
}

init();
    animate();



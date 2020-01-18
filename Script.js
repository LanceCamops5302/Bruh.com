
const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

// Images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// Audio
let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/dead.mp3";
up.src = "audio/walk.mp3";
right.src = "audio/walk.mp3";
left.src = "audio/walk.mp3";
down.src = "audio/walk.mp3";

// Unit 
const box = 32;





function draw(){
    ctx.drawimage(ground,0,0)
}
let game = setInterval (draw, 100)
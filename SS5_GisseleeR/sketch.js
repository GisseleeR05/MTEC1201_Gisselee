/* how to create circles 
show up in a swirl 14 small circles
*/
// Stores all circle positions and colors
const canvasSize = 1000;

//variables
let circleSize = 35;
let angle = 0;
let distance = 0;
let circles = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 255);
  noFill();

//Make the circles and their positions
angle = 0;
distance = 5;

// http://p5js.org/reference/p5/cos/
for (let loops = 0; loops < 35; loops++) {
  let x = width / 2 + cos(angle) * distance;
  let y = height / 2 + sin(angle) * distance;
  circles.push({
    x: x,
    y: y,
    colored: false,
    color: color(145 + loops * 2, 220, 255)
  });
  angle = angle + 0.35;
  distance = distance + 4;
  }
}

function draw() {
  background(165, 220, 90);

// Draw circles
for (let i = 0; i < circles.length; i++){
  let c = circles[i];

//Mouse Function
  let d = dist(mouseX, mouseY, c.x, c.y);

  if (abs(d - circleSize / 2) < 8){
  //Left mouse clicked being held fills the circle with color
    if (mouseIsPressed && mouseButton === LEFT){
      c.colored = true;
    }
  //Right mouse clicked being held removes the color from the circle
    if (mouseIsPressed && mouseButton === RIGHT){
      c.colored = false;
      }
    }
  }
}


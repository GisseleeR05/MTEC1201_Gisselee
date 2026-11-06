
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

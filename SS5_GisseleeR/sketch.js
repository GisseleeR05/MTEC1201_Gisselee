// Stores all circle positions and colors
const canvasSize = 1000;

let circleSize = 50;
let angle = 0;
let distance = 0;
let circles = [];
let previousCircle = -1;

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 255);
  noFill();

  // Makes the circle and their positions
  angle = 0;
  distance = 5;

  for (let loops = 0; loops < 50; loops++) {

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
  
  let currentCircle = -1;

// Drawing the circles
  for (let i = 0; i < circles.length; i++) {

    let c = circles[i];

  // Makes sure that mouse is on the circle outline 
    let d = dist(mouseX, mouseY, c.x, c.y);

    if (abs(d - circleSize / 2) < 8) {
     currentCircle = i;
   }
   if (c.colored){
    fill(c.color);
  } else {
    noFill();
    }
  //Draw the circle outline
  stroke(160 + i * 2, 180, 255);
  strokeWeight(2);
  circle(c.x, c.y, circleSize);
  }

//Color appears when dragging the mouse
  if (mouseIsPressed && mouseButton === LEFT){
    if(currentCircle !== -1 && currentCircle !== previousCircle){
      circles[currentCircle].colored = !circles[currentCircle].colored;
    }
  }
  previousCircle = currentCircle;
}

  function mouseReleased() {
  previousCircle = 0;
}

/*Name: Gisselee R
Title: UFO in Space (Creating Uncertainty)
I'm using the same theme, Space and UFO. 
Random planets will appear that are in the solar system.
Instructions: Press left and right arrow keys to move UFO
and click the screen using the mouse 
to make random planets move.
*/

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(20, 15, 45);
   drawSun();
   drawPlanets();
   drawUFO();
}
function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    x += 50;
  }

  if (keyCode === LEFT_ARROW) {
    x -= 50;
  }
}
//Variables
let x = 0;
let ufoX = 960;
let ufoY = 500;
let mercuryX = 300;
let venusX = 500;
let earthX = 700;
let marsX = 900;
let jupiterX = 1100;
let saturnX = 1300;
let uranusX = 1500;
let neptuneX = 1700;

//Drawing the Sun
function drawSun() {
  noStroke();
  fill(255, 200, 40);
  circle(100, 150, 150);
}
//Drawing the Planets
function drawPlanets(){
//Mercury
fill(150, 150, 150);
circle(mercuryX, 300, 45);

//Venus
fill(220, 170, 80);
circle(venusX, 450, 70);

//Earth
fill(60, 130, 220);
circle(earthX, 650, 80);

//Mars
fill(200, 70, 50);
circle(marsX, 350, 65);

//Jupiter
fill(190, 140, 100);
circle(jupiterX, 700, 140);
  fill(180, 60, 50);
  ellipse(jupiterX + 30, 710, 45, 25);

//Saturn
fill(220, 190, 120);
circle(saturnX, 450, 110);
  noFill();
  stroke(230, 210, 160);
  strokeWeight(12);
  ellipse(saturnX, 450, 190, 50);

//Uranus
noStroke();
fill(100, 200, 200);
circle(uranusX, 650, 85);
  noFill();
  stroke(180, 220, 220);
  strokeWeight(3);
  ellipse(uranusX, 650, 45, 140);

//Neptune
fill(50, 80, 200);
circle(neptuneX, 350, 80);
}

function drawUFO(){
//UFO base
fill(163, 225, 230);
circle(900 + x, 400, 300);
fill(43, 128, 255);

//Crown
fill(245, 187, 0);
triangle(1000 + x, 290, 1000 + x, 150, 900 + x, 290);
triangle(900 + x, 290, 900 + x, 150, 1000 + x, 290);

fill("blue");
circle(950 + x, 250, 30);
fill("red");
circle(910 + x, 250, 30);
fill("green");
circle(990 + x, 250, 30);
fill("black");
circle(850 + x, 350 , 30);
fill("black");
circle(950 + x, 350 , 30);

fill(24, 72, 140);
ellipse(900 + x, 480, 500, 40);

noFill();
stroke(0);
strokeWeight(3);
arc(900 + x, 390, 90, 10, 0, PI);
}

//Mouse Pressed
function mousePressed(){
mercuryX = random(150, 500);
venusX = random(300, 700);
earthX =random(500, 1000);
marsX = random(700, 1200);
jupiterX = random(1000, 1400);
saturnX = random(1100, 1550);
uranusX = random(1300, 1700);
neptuneX = random(1400, 1850);
}
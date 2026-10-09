/*Name: Gisselee R
Title: UFO in Space (Conditionals)
I'm using the same theme, Space and UFO. 
Instructions: Press left and right arrow keys to move UFO
which should increase or decrease in size.
*/
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(20, 15, 45);
  drawEarth();
  drawMoon();
  drawUFO();
}
//Variables
let x = 0;
let ufoSize = 1;


//Drawing the Earth
function drawEarth() {
noStroke();
fill(60, 130, 220);
circle(250, 800, 500);
//Land
fill(31, 184, 31);
circle(350, 700, 80);
fill(31, 184, 31);
circle(350, 750, 80);
fill(31, 184, 31);
circle(300, 730, 80);
fill(31, 184, 31);
circle(150, 850, 80);
fill(31, 184, 31);
circle(190, 890, 80);
//Clouds
fill(255, 255, 255);
circle(350, 900, 50);
fill(255, 255, 255);
circle(370, 940, 50);
fill(255, 255, 255);
circle(170, 940, 50);
fill(255, 255, 255);
circle(170, 700, 50);
fill(255, 255, 255);
circle(190, 670, 50);

}

//Drawing the Moon
function drawMoon(){
  fill("white");
  circle(1300, 400, 50);
//Crators 
fill(222, 222, 222);
circle(1310, 410, 20);
fill(222, 222, 222);
circle(1290, 390, 20);
}

function drawUFO() {

  // The UFO
  fill(163, 225, 230);
  circle(900 + x, 400, 300 * ufoSize);

  // Crown
  fill(245, 187, 0);
  triangle(900 + x + 100 * ufoSize, 400 - 110 * ufoSize,900 + x + 100 * ufoSize, 400 - 250 * ufoSize, 900 + x, 400 - 110 * ufoSize);

  triangle(900 + x, 400 - 110 * ufoSize, 900 + x, 400 - 250 * ufoSize, 900 + x + 100 * ufoSize, 400 - 110 * ufoSize);

  fill("blue");
  circle(900 + x + 50 * ufoSize, 400 - 150 * ufoSize, 30 * ufoSize);

  fill("red");
  circle(900 + x + 10 * ufoSize, 400 - 150 * ufoSize, 30 * ufoSize);

  fill("green");
  circle(900 + x + 90 * ufoSize, 400 - 150 * ufoSize, 30 * ufoSize);

  // Face
  fill("black");
  circle(900 + x - 50 * ufoSize, 400 - 50 * ufoSize, 30 * ufoSize);
  circle(900 + x + 50 * ufoSize, 400 - 50 * ufoSize, 30 * ufoSize);

  //Base
  fill(24, 72, 140);
  ellipse(900 + x, 400 + 80 * ufoSize, 500 * ufoSize, 40 * ufoSize);
  
  // Smile
  noFill();
  stroke(0);
  strokeWeight(3 * ufoSize);
  arc(900 + x, 400 - 10 * ufoSize, 90 * ufoSize, 10 * ufoSize, 0, PI);
}

/*Making the UFO Fly around increasing 
and decreasing size with IF/ELSE statements */

function keyPressed(){
if (keyCode === LEFT_ARROW && x > -350) {
x -= 50;
ufoSize += 0.1;
} else if (keyCode === RIGHT_ARROW && x < 450 && ufoSize > 0.2) {
x += 50;
ufoSize -= 0.1;
} else {
}
}


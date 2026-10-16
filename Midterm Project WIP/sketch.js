/* Name: Gisselee R
Title: UFO in Space (Conditionals)
I'm using the same theme, Space and UFO. 
Instructions: Use your mouse cursor to move the UFO,
avoid the astoriod moving towards your way.
*/
function preload (){
  ufoImage = loadImage ("Image/UFO.png")
  asteroidImage = loadImage("Image/Asteroid.png")
}
function setup() {
  createCanvas(1920, 1000);
  imageMode(CENTER);
  begin = millis();
}

//Variables
let ufoImage;
let asteroidImage; 

//UFO
let ufoX = 960;
let ufoY = 540;

//Asteroid
let asteroidX = 1900;
let asteroidY = 540;
let asteroidSpeed = 6;

//Game
let youDied = false 
let begin;
let time = 0;

function draw() {
  background(20, 15, 45);

//Moving UFO with mouse cursor
ufoX = mouseX;
ufoY = mouseY;

//Draw UFO
image(ufoImage, ufoX, ufoY, 140, 100);

if (youDied === false) {
//Moving Asteroid
  asteroidX = asteroidX - asteroidSpeed;

//Draw Asteroid
image(asteroidImage, asteroidX, asteroidY, 100, 100);
//Crash between UFO & Asteroid
if (ufoX > asteroidX - 100 && 
  ufoX < asteroidX + 100 && 
  ufoY > asteroidY - 80 && 
  ufoY < asteroidY + 80){
  youDied = true;
}
//Reset
if (asteroidX < -100) {
  asteroidX = 2000;
  asteroidY = random(100, 980);
  asteroidSpeed = asteroidSpeed + 1;
}

//How long user survived
time = (millis() - begin) / 1000;
fill(255);
textAlign(LEFT, TOP);
textSize(35);
text("survival time: " + floor(time) + "seconds", 30, 30);
} 
//You Died screen
else {
fill(255, 100, 100);
textAlign(CENTER, CENTER);
textSize(80);
text("YOU DIED", width / 2, height / 2 - 60);

fill(255);
textSize(40);
text("Yay you lived!" + floor(time) + "seconds", width / 2, height / 2 + 30);

textSize(30);
text("Click to play again", width / 2, height / 2 + 100);
}
}
//Reset Entire Game
function mousePressed(){
  if (youDied === true){
    asteroidX = 1900;
    asteroidY = random(100, 980);
    asteroidSpeed = 6;
    youDied = false;
    begin = millis();
  }
}

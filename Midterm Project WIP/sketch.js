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
  textFont("Serif");
}

//Variables
let ufoImage;
let asteroidImage; 

//UFO
let ufoX = 960;
let ufoY = 540;

//Asteroid 1
let asteroidX = 1900;
let asteroidY = 540;
let asteroidSpeed = 6;

//Asteroid 2
let asteroid2X = 2500;
let asteroid2Y = 840;
let asteroid2Speed = 7;

//Asteroid 3
let asteroid3X = 3100;
let asteroid3Y = 700;
let asteroid3Speed = 8;


//Game
let gameStarted = false;
let youDied = false 
let begin;
let time = 0;

function draw() {
  background(20, 15, 45);

//Start Screen
if (gameStarted === false){
cursor();

fill("white");
textAlign(CENTER, CENTER);
textSize(90);
text("FLY THROUGH SPACE", width / 2, 350);

fill("red");
textSize(35);
text("Watch out for the asteroids!", width / 2, 480);

//Play Button
if (mouseX > width / 2 - 150 &&
    mouseX < width /  2 + 150 &&
    mouseY > 580 && mouseY < 680){
      fill(80, 255, 100)
} else {
  fill (30, 190, 70);
}
rectMode(CENTER);
rect(width / 2, 630, 300, 100, 20);
fill("white");
textSize(40);
text("PLAY", width / 2, 630);
}
else if (youDied === false) {
noCursor(); 

//Move UFO with mouse
ufoX = mouseX;
ufoY = mouseY;

//Draw UFO
image(ufoImage, ufoX, ufoY, 140, 100);

//Moving Asteroids
asteroidX = asteroidX - asteroidSpeed;

//Draw Asteroid 1
image(asteroidImage, asteroidX, asteroidY, 100, 100);
/*If the UFO doesn't crash then Asteroid loops and
increases in speed*/
if (ufoX > asteroidX - 100 && 
  ufoX < asteroidX + 100 && 
  ufoY > asteroidY - 80 && 
  ufoY < asteroidY + 80){
  youDied = true;
}
if (asteroidX < -100) {
  asteroidX = 2000;
  asteroidY = random(50, 960);
  asteroidSpeed = asteroidSpeed + 1;
}

//Draw Asteroid 2
asteroid2X = asteroid2X - asteroid2Speed
image(asteroidImage, asteroid2X, asteroid2Y, 100, 100);
//Crash between UFO & Asteroid
if (ufoX > asteroid2X - 100 && 
  ufoX < asteroid2X + 100 && 
  ufoY > asteroid2Y - 80 && 
  ufoY < asteroid2Y + 80){
  youDied = true;
}
if (asteroid2X < -100) {
  asteroid2X = 2000;
  asteroid2Y = random(50, 980);
  asteroid2Speed = asteroid2Speed + 1;
}
//Draw Asteroid 3
asteroid3X = asteroid3X - asteroid3Speed
image(asteroidImage, asteroid3X, asteroid3Y, 100, 100);
//Crash between UFO & Asteroid
if (ufoX > asteroid3X - 100 && 
  ufoX < asteroid3X + 100 && 
  ufoY > asteroid3Y - 80 && 
  ufoY < asteroid3Y + 80){
  youDied = true;
}
if (asteroid3X < -100) {
  asteroid3X = 2000;
  asteroid3Y = random(50, 970);
  asteroid3Speed = asteroid3Speed + 1;
}

//How long user survived
time = (millis() - begin) / 1000;
fill("yellow");
textAlign(LEFT, TOP);
textSize(35);
text("Survival Time: " + floor(time) + " seconds", 30, 30);
}

//You Died screen
else {
cursor();
fill(255, 100, 100);
textAlign(CENTER, CENTER);
textSize(80);
text("YOU DIED", width / 2, 400);

fill(255);
textSize(40);
text("You lived for " + floor(time) + " seconds!", 960, 500);

//Play again button
if (mouseX > width / 2 - 150 &&
    mouseX < width /  2 + 150 &&
    mouseY > 580 &&
    mouseY < 680){
      fill(80, 255, 100)
} else {
  fill (30, 190, 70);
}
rectMode(CENTER);
rect(width / 2, 630, 300, 100, 20);
fill("white");
textSize(40);
text("PLAY AGAIN", width / 2, 630);
}
}
//Reset Entire Game
function mousePressed(){

if (gameStarted === false) {
  if (mouseX > width / 2 - 150 &&
    mouseX < width /  2 + 150 &&
    mouseY > 580 && mouseY < 680){
  gameStarted = true;
  youDied = false;

//Resetting UFO
ufoX = 960;
ufoY = 540;

//Resetting asteroids
asteroidX = 1900;
asteroidY = 540;

asteroid2X = 2500;
asteroid2Y = 840;

asteroid3X = 3100;
asteroid3Y = 700;

//Resetting Speed
asteroidSpeed = 6;
asteroid2Speed = 7;
asteroid3Speed = 8;

//Resetting the time
begin = millis();
time = 0;
}
}
//Resetting entirely after user crashes
else if (youDied === true){
if (mouseX > width / 2 - 150 &&
    mouseX < width /  2 + 150 &&
    mouseY > 580 && mouseY < 680){
  gameStarted = true;
  youDied = false;

//Resetting UFO
  ufoX = 960;
  ufoY = 540;

//Resetting Asteroids
asteroidX = 1900;
asteroidY = 540;

asteroid2X = 2500;
asteroid2Y = 840;

asteroid3X = 3100;
asteroid3Y = 700;

//Resetting Speed
asteroidSpeed = 6;
asteroid2Speed = 7;
asteroid3Speed = 8;

//Resetting the time
begin = millis();
time = 0;
  }
}
}
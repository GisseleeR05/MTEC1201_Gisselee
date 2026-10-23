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

  textSize(35);
  text("Watch out for the asteroids!", width / 2, 440);
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

//Draw UFO and move Asteroids
image(ufoImage, ufoX, ufoY, 140, 100);
  asteroidX = asteroidX - asteroidSpeed;

//Draw Asteroid 1
image(asteroidImage, asteroidX, asteroidY, 100, 100);
//Crash between UFO & Asteroid
if (ufoX > asteroidX - 100 && 
  ufoX < asteroidX + 100 && 
  ufoY > asteroidY - 80 && 
  ufoY < asteroidY + 80){
  youDied = true;
}
//Loop
if (asteroidX < -100) {
  asteroidX = 2000;
  asteroidY = random(100, 980);
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
//Loop
if (asteroid2X < -100) {
  asteroid2X = 2000;
  asteroid2Y = random(100, 980);
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
//Loop
if (asteroid3X < -100) {
  asteroid3X = 2000;
  asteroid3Y = random(100, 980);
  asteroid3Speed = asteroid3Speed + 1;
}

//How long user survived
time = (millis() - begin) / 1000;
fill(255);
textAlign(LEFT, TOP);
textSize(35);
text("survival time: " + floor(time) + "seconds", 30, 30);
} else {
//You Died screen
cursor();
fill(255, 100, 100);
textAlign(CENTER, CENTER);
textSize(80);
text("YOU DIED", width / 2, height / 2);

fill(255);
textSize(40);
text("You lived for " + floor(time) + " seconds!", width / 2, height / 2, 300, 300);

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
//Start Screen
if (gameStarted === false){
  if (mouseX > width / 2 - 150 &&
    mouseX < width /  2 + 150 &&
    mouseY > 580 &&
    mouseY < 680){
  gameStarted = true;
  youDied = false;

//Resetting UFO
ufoX = 960;
ufoY = 540;

}
  if (youDied === true){
    asteroidX = 1900;
    asteroidY = random(100, 980);
    asteroidSpeed = 6;
    youDied = false;
    begin = millis();
  }
}
}
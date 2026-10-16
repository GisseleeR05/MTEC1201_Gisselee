//variables
let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;

function setup() { 
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(0);
  if(currentScene === 0) {
    drawScene0();
  }
  else if(currentScene === 1) {
    drawScene1();
  }
}

function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }

}

function drawScene0() {
fill(202, 129, 232)
noStroke();
rect(width/2, height/2, 50, 50);
}

function drawScene1() {
fill(158, 54, 25)
noStroke();
ellipse(width/2, height/2, 50, 50, 80);
}
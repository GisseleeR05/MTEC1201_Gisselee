const canvasSize = 800;
let lineSize = 0;
let line = 0;
let smallerCanvas = canvasSize - 1;
let lineFill = "black";

function setup() {
  createCanvas(canvasSize, canvasSize);
  strokeWeight(2);
  fill("white");
  colorMode(HSB, 255);
  noFill();

function draw() {
  background("white")
  smallerCanvas = canvasSize - 2;
  for (let loops = 0; loops < 30; loops++){
    if(mouseIsPressed && mouseX < lineSize && mouseY < lineSize){
    }
  }
}
}
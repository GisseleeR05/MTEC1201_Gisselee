const canvasSize = 800;
//variable
let lineSize = 0;

function setup() {
  createCanvas(canvasSize, canvasSize);
  strokeWeight(2);
  fill("white");
function draw (){
  background(255, 186, 230);
  for (let loops = 0; loops < 10; loops++) {
    //if lineSize < 50
    point(100,200);
    point (200, 300);
    point(300, 400);
  }
 }
}
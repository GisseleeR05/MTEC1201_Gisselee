function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  rect(40 + x, 50, 300 + x, 400);
}
//Variable
let x = 0;

//Move rectangle
function keyPressed(){
if (keyCode === LEFT_ARROW){
  x -= 100;
} else if (keyCode === RIGHT_ARROW){
    x += 200;
} else {
}
}




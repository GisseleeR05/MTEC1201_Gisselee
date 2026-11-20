/*
Name: Gisselee Rivera
Title Continuation of "UFO Adventure"
Instructions: Press LEFT and RIGHT arrow keys to move the UFO
 */
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(20, 15, 45);
  //Draw Earth and Moon
  drawEarth();
  drawMoon();
  //Draw the UFO objects
  ufo1.display();
  ufo2.display();
  ufo3.display();
}

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

//Making the UFO class
class UFO{
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.ufoSize = size;
  }
  //Method #1: Position & Size of the UFO
  move(direction){
    if(direction === LEFT_ARROW){
      this.x -= 50;
      this.ufoSize += 0.1;
    }
    else if(direction === RIGHT_ARROW && this.ufoSize > 0.2){
      this.x += 50;
      this.ufoSize -= 0.1;
    }
  }

  //Method #2: Draw the UFO
  display(){
   // The UFO
  fill(163, 225, 230);
  circle(this.x, this.y, 300 * this.ufoSize);

  // Crown
  fill(245, 187, 0);
  triangle(
    this.x + 100 * this.ufoSize, this.y - 110 * this.ufoSize, 
    this.x + 100 * this.ufoSize, this.y - 250 * this.ufoSize,
    this.x, this.y - 110 * this.ufoSize
  );

  triangle(
    this.x, this.y - 110 * this.ufoSize, 
    this.x, this.y - 250 * this.ufoSize, 
    this.x + 100 * this.ufoSize, this.y - 110 * this.ufoSize
  );

  fill("blue");
  circle(this.x + 50 * this.ufoSize, this.y - 150 * this.ufoSize, 30 * this.ufoSize);

  fill("red");
  circle(this.x + 10 * this.ufoSize, this.y - 150 * this.ufoSize, 30 * this.ufoSize);

  fill("green");
  circle(this.x + 90 * this.ufoSize, this.y - 150 * this.ufoSize, 30 * this.ufoSize);

  // Face
  fill("black");
  circle(this.x - 50 * this.ufoSize, this.y - 50 * this.ufoSize, 30 * this.ufoSize);
  circle(this.x + 50 * this.ufoSize, this.y - 50 * this.ufoSize, 30 * this.ufoSize);

  //Base
  fill(24, 72, 140);
  ellipse(this.x, this.y + 80 * this.ufoSize, 500 * this.ufoSize, 40 * this.ufoSize);
  
  // Smile
  noFill();
  stroke(0);
  arc(this.x, this.y - 10 * this.ufoSize, 90 * this.ufoSize, 10 * this.ufoSize, 0, PI); 
  }
}
//Making the UFO objects (x, y, size)
let ufo1 = new UFO(900, 400, 1);
let ufo2 = new UFO(1500, 200, 0.3);
let ufo3 = new UFO(1550, 750, 0.3);

// Moving the UFO
function keyPressed(){
  ufo1.move(keyCode);
  ufo2.move(keyCode);
  ufo3.move(keyCode);
}
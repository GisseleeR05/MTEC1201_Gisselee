//Name: Gisselee R
//Title: UFO in Space
//I think space is interesting and 
//hopefully learn more about how 
// I can make the background look more like space.
let x=0;
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    x+=50;
  }
    if(keyCode === LEFT_ARROW){
    x-=50;
  }

}
function setup() {
  createCanvas(1920, 1090);
}

function draw(){
  background(43, 32, 66);
//UFO base 
fill("pink");
circle(900 + x, 400, 300);
fill(43, 128, 255);
// Earth and The Moon
noStroke();
circle(200, 200, 100);
fill("white");
noStroke();
circle(250, 150, 20);
//The Sun
noStroke();
fill("yellow")
circle(0, 0, 50);
//Mars
fill(135, 33, 15)
circle(1920,1000, 100);
//Crown and Queen UFO
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
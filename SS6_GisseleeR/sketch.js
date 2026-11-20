//Variables
let notes = ["Words of Encouragement!", "You got this!", "Be kind to yourself", "Keep being you"];

let notesIndex = 0;

let colors = [];

let colorIndex = 0;


function setup() {
  createCanvas(800, 1000);
  textSize(50);
  fill("white");

//Colors of the notepad
  colors[0] = color("white");
  colors[1] = color(215, 196, 255);
  colors[2] = color(255, 245, 196);
  colors[3] = color(196, 251, 255);

}

function draw() {
  background(255, 196, 241);

  //Draw the text
  
  fill("Black");
  textFont("Serif");
  textSize(50);
  textAlign(CENTER);
  text("A Message for You ", width / 2, 140);
  textSize(25);
  fill(255, 71, 238);
  textAlign(CENTER);
  text("press any key", width / 2, 180);

  //Draw the notepad
  fill(colors[colorIndex]);
  rect(50, 250, 700, 700);
  circle(150, 350, 80);
  circle(400, 350, 80);
  circle(650, 350, 80);

  fill(60);
  textSize(50);
  
  text(notes[notesIndex], 400, 600);  

}

//Changes the notepad color and text message
function keyPressed() {
 	colorIndex = (colorIndex + 1) % colors.length;
  notesIndex = (notesIndex + 1) % notes.length;
}
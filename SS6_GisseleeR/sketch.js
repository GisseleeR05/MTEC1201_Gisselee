//Variables
let notes = ["You got this!", "Be kind to yourself", "Keep being you"];

let notesIndex = 0;

let colors = [];

let colorIndex = 0;


function setup() {
  createCanvas(800, 1000);
  textSize(50);
  fill("white");

//Color of the notepad
  colors[0] = color("white");
  colors[1] = color(215, 196, 255);
  colors[2] = color(255, 245, 196);
  colors[3] = color(196, 251, 255);

}

function draw() {
  background(255, 196, 241);

  //Draw notepad 
  
  fill("white")
  text("Here's a nice message: ", 80, 100);

  fill(colors[colorIndex]);
  rect(50, 250, 700, 700);
  
  fill(colors[colorIndex]);
  text(notes[notesIndex], 220, height / 2);  

}
/*function mousePressed(){
  notesIndex++;
  if(notesIndex >= notes.length){
    notesIndex = 0;
  }
}*/
function keyPressed() {
 	colorIndex = (colorIndex + 1) % colors.length;
}
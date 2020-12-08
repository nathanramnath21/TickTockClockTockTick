var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
  angleMode(degrees)
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();
  
  hrAngle = map(hr%12, 0, 12, 0, 360)
  minAngle = map(min, 0, 60, 0, 360)
  secAngle = map(sec, 0, 60, 0, 360)

  push();
  rotate(secAngle)
  stroke(255,0,0);
  strokeWeight(5)
  line(0,0,100,0)
  pop();

  push();
  rotate(minAngle)
  stroke(110,100,100);
  strokeWeight(5)
  line(0,0,75,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(180,100,100);
  strokeWeight(5)
  line(0,0,50,0)
  pop();

  stroke(50,100,100)

  point(0,0)

  strokeWeight(10)
  noFill()
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0, secAngle)

  strokeWeight(10)
  noFill()
  stroke(110,100,100);
  arc(0, 0, 280, 280, 0, minAngle)

  strokeWeight(10)
  noFill()
  stroke(180,100,100);
  arc(0, 0, 260, 260, 0, hrAngle)

  drawSprites();
}
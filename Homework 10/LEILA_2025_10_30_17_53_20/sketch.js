var headX = 250;
var headY = 320;
var headDirection = 1;

var bodyX = 0;
var bodyY = 490;
var bodyDirection = 3;

var eyes1X = 135;
var eyes1Y = 340;
var eyes1Direction = 3;

var eyes2X = 335;
var eyes2Y = 340;
var eyes2Direction = 3;

var shimmerX = 130;
var shimmerY = 330;
var shimmerDirection = 3;

function setup()

{
  createCanvas(500, 600);
}

function draw() {
  background(220);
  // head
  fill(200, 175, 90);
  circle(headX, headY, 350);
   headX+=headDirection;
    if(headX >= 320 || headX <= 175)
    {
        headDirection *= -1;
    }
  
  // body
  fill(200, 80, 200);
  rect(bodyX, bodyY, 500, 200);
  bodyX+=bodyDirection;
    if(bodyX >= 418 || bodyX <= 82)
    {
        bodyDirection *= -1;
    }

  // eyes1
  fill(0);
  circle(135, eyes1Y, 70);
   eyes1Y += eyes1Direction;
    if(eyes1Y <= 0 || eyes1Y >= 600 )
    {
        eyes1Direction *= -1;
    }
  // eyes2
  circle(335, eyes2Y, 70);
  eyes2Y += eyes2Direction;
    if(eyes2Y <= 0 || eyes2Y >= 600 )
    {
        eyes2Direction *= -1;
    }
  
  line(75, 320, 100, 600);
  line(425, 320, 410, 600);
  // nose
  fill(250, 175, 90);
  triangle(230, 420, 300, 420, 250, 350);
  stroke(255);
  strokeWeight(10)
  // shimmer
  point(shimmerX, shimmerY)
  shimmerX+=shimmerDirection;
  if(shimmerX >= 418 || shimmerX <= 82)
    {
        shimmerDirection *= -1;
    }
  shimmerY += shimmerDirection;
    if(shimmerY <= 0 || shimmerY >= 600 )
    {
        shimmerDirection *= -1;
    }
  
  
  point(325, 330)
  
}

var box 


function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,20)

  
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x+5
  }
  drawSprites()

}





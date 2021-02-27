var fixedRect, movingRect;
var sprite1, sprite2
function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  sprite1 = createSprite(200, 200,100,100)
  sprite1.shapeColor = "yellow"



  sprite2 = createSprite(500, 200,100,100)
  sprite2.shapeColor = "blue"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , sprite1))
{
  movingRect.shapeColor = "red";
  sprite1.shapeColor = "red";
} 
else if(isTouching(movingRect, sprite2)){
  movingRect.shapeColor = "red";
  sprite2.shapeColor = "red";
}

else if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

else{
  movingRect.shapeColor = "green";
  sprite1.shapeColor = "green";
  sprite2.shapeColor = "green";
  fixedRect.shapeColor = "green";
} 
  drawSprites();

  //if(true) --> if block gets executes
  //if(false) --> else 
}

function isTouching(object1 , object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
      return true
}
else {
  
  return false
}
}
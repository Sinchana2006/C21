var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,100,50,70);
  car.velocityX = 3;
  car.shapeColor="green";

  wall = createSprite(900,100,50,30);
  wall.shapeColor = "yellow";
}

function draw(){
background(0);

  if(isTouching(car,wall)){
    car.shapeColor = "purple";
    textSize (20);
    fill("pink");
    text("Car has collided", 200,100);
  }
  
  bounceOff(car,wall);
  collide(car,wall);

  drawSprites();
}


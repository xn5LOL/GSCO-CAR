var car1,wall1;
var car2,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  speed=random(400,1500);

  car=createSprite(100,50,50,10);
  car.shapeColor = "red";
  
  wall=createSprite(1500,50,20,height/9);
  wall.shapeColor = "80,80,80";
  
  car2=createSprite(100,200,50,10);
  car2.shapeColor = "green";
  
  wall=createSprite(1500,200,20,height/9);
  wall.shapeColor = "80,80,80";
  
}

function draw() {
  background(0,0,0);  
 car.velocityX=5;
 car2.velocityX=5;
  
 if (wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed*speed/22509;

if(deformation>180)
{
  car.shapeColor=Color(225,0,0);
}

if(deformation<180 && deformation>100)
{
  car.shapeColor=Color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=Color(0,255,0);
}
}

  if (wall.x - car2.x < (car2.width + wall.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * weight * speed*speed/22509;

if(deformation>180)
{
  car2.shapeColor=Color(225,0,0);
}

if(deformation<180 && deformation>100)
{
  car2.shapeColor=Color(230,230,0);
}

if(deformation<100)
{
  car2.shapeColor=Color(0,255,0);
}
}
  drawSprites();
}
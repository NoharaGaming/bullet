// bullet and wall
var wall, thikness ;
var bullet
// speed and weight
var speed, weight 



function setup() {
  createCanvas(800,400);
  speed= random(200,300);
  weight = random(30,52);
  thikness = random(22,83);
  wall = createSprite(700, 200, thikness, height/2);
  bullet = createSprite(0,200,20,20)
  bullet.velocityX = speed
}

function draw() {
  background("black");  
hasCollided();

  drawSprites();
}

function hasCollided(){
   // if condition tocheck the deformation
   if(bullet.x - wall.x >= wall.width/2+bullet.width/2){
    bullet.velocityX = 0
var damage = 0.5 * weight * speed* speed/(thikness * thikness * thikness)
  
if(damage > 10){
  wall.shapeColor = color(255,0,0)
}

if(damage < 10){
  wall.shapeColor = color(0,255,0)
}

} 
}
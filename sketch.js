const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var mouse, mouseImg;
var snowFall=[];

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  mouseImg = loadImage("mouse3.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  mouse = createSprite(400,300);
  mouse.addAnimation("mouseJumping", mouseImg);
  mouse.scale = 0.15;
  Engine.run(engine);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
if(frameCount%10 === 0){
  snowFall.push(new Snowclass(random(10,500)),-50);
}
for(var i=0; i <snowFall.length; i++){
  snowFall[i].display();
}
  if(keyCode === RIGHT_ARROW){
    mouse.x = mouse.x + 3;
  }

  if(keyCode === LEFT_ARROW){
    mouse.x = mouse.x -3;
  }
  drawSprites();
}
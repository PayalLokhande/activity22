const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var object
var ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var sun={
    isStatic:true
  }
var bounce={
  restitution:1.2
}
  object=Bodies.rectangle(200,200,50,20,bounce)
  World.add(world,object)
  ground=Bodies.rectangle(400,350,800,10,sun)
  World.add(world,ground)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
rectMode(CENTER)
rect(object.position.x,object.position.y,50,20)
rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
}

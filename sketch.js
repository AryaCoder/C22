const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var MyEngine,MyWorld,ball,ground;

function setup() {
  createCanvas(800,400);
  MyEngine = Engine.create()
  MyWorld = MyEngine.world

var options={
  isStatic : true
}
ground=Bodies.rectangle(400,390,400,10,options)
World.add(MyWorld,ground)

var options={
  restitution:1.0
}

ball=Bodies.circle(400,200,5,options)
World.add(MyWorld,ball)

}

function draw() {
  background(55,55,55);  
 Engine.update(MyEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,10)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,15,15)

}
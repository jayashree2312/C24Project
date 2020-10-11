
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var leftB,rightB,bottomB;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	paper = new Paper(300,150,30);

	leftB = new Dustbin(580,620,20,100); 
	rightB = new Dustbin(780,620,20,100); 
	bottomB = new Dustbin(680,660,180,20);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();

  leftB.display();
  rightB.display();
  bottomB.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
	   
	 }
   }





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new paper(500,400,30)
	ground = new ground(790,690,50,50)
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0)
  paper1.display();
  ground.display();
  
  drawSprites();
 
}




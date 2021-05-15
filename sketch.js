//SHIVANi
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;
var paperBall;
var box;
var box1;
var box2;
var dustbin
function preload()
{
	dustbin= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1365, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(width/2,height-10,width,20);
	Engine.run(engine);

	paperBall= new Paper(100,570,30);
	box= new Box(1150,570,100,10);
	box1= new Box(1100,505,10,140);
	box2= new Box(1200,505,10,140);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  ground.display();
  paperBall.display();
  box.display();
  box1.display();
  box2.display();
  imageMode(CENTER);
image(dustbin,1150,495,130,175);

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(
			paperBall.body,
		    paperBall.body.position,
			{x:53,y:-50}
		)
		
	}
}



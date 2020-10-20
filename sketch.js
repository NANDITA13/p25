
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2 , b3 , g,p;
var dustbinImage;

function preload() {

	dustbinImage = loadImage('dustbin.png',b1);
    
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (650,690,1300,20);
	

	bin1 = new Box (900,570,15,200);
	
	bin2 = new Box (1050,570,15,200);
	
	bin3 = new Box (975,675,170,10);

	paperBall = new paper (100,350);
	

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:190,y:-190});
	}
}

function draw() {

  rectMode(CENTER);

  background("black");

  paperBall.display();

  ground.display();

  bin3.display ();

  image(dustbinImage,900,470,150,200);

  

  
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world , engine , body;
var boy;
var boyImage;
var ground,stone,mango1;
var tree,treeImage;
var string;

function preload()
{
		boyImage = loadImage("Pluckingmangoes/boy.png");
    treeImage = loadImage("Pluckingmangoes/tree.png");
}

function setup() {
	createCanvas(1000, 800);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,600,9990,20);
   tree = createSprite(725,345,20,20);
   tree.addImage(treeImage);
   tree.scale = 0.4;
   stone = new Stone(140,430);

   mango1 = new Mango(690,185);
   mango2 = new Mango(650,270);
   mango3 = new Mango(700,220);
   mango4 = new Mango(800,160);
   mango5 = new Mango(835,235);
   mango6 = new Mango(755,220);
   mango7 = new Mango(775,265);
   mango8 = new Mango(580,260);
   mango9 = new Mango(870,270);

   boy = createSprite(200,535,20,20);
   boy.addImage(boyImage);
   boy.scale = 0.09;

   string = new String(stone.body,{x:150 , y:485});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text(mouseX + ',' + mouseY, 30, 45);


  drawSprites();
  ground.display();

  // string.display();
  stone.display();

   mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

 
  detectCollision(stone , mango1)
  detectCollision(stone , mango2)
  detectCollision(stone , mango3)
  detectCollision(stone , mango4)
  detectCollision(stone , mango5)
  detectCollision(stone , mango6)
  detectCollision(stone , mango7)
  detectCollision(stone , mango8)
  detectCollision(stone , mango9)

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased (){
  string.fly();
}


function keyPressed (){
  if(keyCode === 32){
string.attach(stone);
  }
} 

function detectCollision (lstone,lmango) {
var mangoBodyPosition = lmango.body.position;
var stoneBodyPosition = lstone.body.position;

 var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x ,mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r )
{
Matter.Body.setStatic(lmango.body , false);

}

}


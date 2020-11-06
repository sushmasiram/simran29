const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9;
var polygonImage;
var gameState= "onSlingShot";

function preload(){
   polygonImage= loadImage("hexagon.png");
}

function setup(){
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(450, 590, 900, 20);
  stand = new Stand(390, 300, 250, 10);

  //level one
  block1 = new Box(330, 490, 30, 40);
  block2 = new Box(360, 490, 30, 40);
  block3 = new Box(390, 490, 30, 40);
  block4 = new Box(420, 490, 30, 40);
  block5 = new Box(450, 490, 30, 40);
  block6 = new Box(480, 490, 30, 40);
  block7 = new Box(510, 490, 30, 40);
 
  //level two
  block8 = new Box(360, 450, 30, 40);
  block9 = new Box(390, 450, 30, 40);
  block10 = new Box(420, 450, 30, 40);
  block11 = new Box(450, 450, 30, 40);
  block12 = new Box(480, 450, 30, 40);

  //level three
  block13 = new Box(390, 410, 30, 40);
  block14 = new Box(420, 410, 30, 40);
  block15 = new Box(450, 410, 30, 40);

  //level four
  block16 = new Box(420, 370, 30, 40);

  polygon= Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
  //gameState= "launched";
}
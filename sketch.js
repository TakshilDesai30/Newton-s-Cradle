const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage;

function preload() {
  bgImage = loadImage("bg.png");
}

function setup() {
	createCanvas(1050, 600);

	engine = Engine.create();
	world = engine.world;

ball1 = new Ball(500,400,"dark grey");
ball2 = new Ball(460,400,"red");
ball3 = new Ball(420,400,"#FFD700");
ball4 = new Ball(540,400,"rgb(192, 192, 192)");
ball5 = new Ball(580,400,"#008080");

chain1 = new Chain({x:500,y:200},ball1.body);
chain2 = new Chain({x:460,y:200},ball2.body);
chain3 = new Chain({x:420,y:200},ball3.body);
chain4 = new Chain({x:540,y:200},ball4.body);
chain5 = new Chain({x:580,y:200},ball5.body);

nail1 = new Nail(500,200);
nail2 = new Nail(460,200);
nail3 = new Nail(420,200);
nail4 = new Nail(540,200);
nail5 = new Nail(580,200);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bgImage);

  textFont("TIMES NEW ROMAN");
  textStyle(BOLD);
  textSize(60);
  fill("yellow");
  text("NEWTON'S CRADLE",220,80);
  
  fill("black");
  textFont("Comic Sans MS");
  textSize(26);
  textStyle(ITALIC);
  text("Drag the yellow ball and release it to see the working of the Newton's Cradle.",60,140);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  nail1.display();
  nail2.display();
  nail3.display();
  nail4.display();
  nail5.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY});
}

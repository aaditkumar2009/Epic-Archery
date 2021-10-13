const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  //backgroundImg.scale = 0.1
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  let options = {
  isStatic : true
}

  //create player base body

  //create player body

  ground = Bodies.rectangle(0,0,options);
  World.add(world,ground)
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase)
  player = Bodies.rectangle(200,playerBase.position.y-128,50,180,options)
  World.add(world,player)
  //player.scale = 0.5

}

function draw() {
  background(backgroundImg);
  //push()
  //image(backgroundImg,0,0,windowWidth/2,windowHeight/2);
  //pop()
  //show the player image using image() function
  //show the playerbase image using image() function


  rect(ground.position.x,ground.position.y,width*2,3);

  Engine.update(engine);
  push()
  imageMode(CENTER); 
  image(baseimage,playerBase.position.x,playerBase.position.y,150,100);
  image(playerimage,player.position.x,player.position.y,80,180);
  pop()
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snow =[ ]
var engine, world;
var holder,ground;
var stand1,stand2;
var polygon;
var slingShot
var polygon_img,bg;
function preload(){
  polygon_img=loadImage("polygon.png");
 bg=loadImage("snow2.jpg");
 boyimg=loadImage("walkin.png");
}
function setup() {
  createCanvas(1380,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
 
 boy = createSprite(400,500,100,10)
 boy.addImage(boyimg)
 boy.scale=0.2
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
 slingShot = new Slingshot(this.polygon,{x:100,y:200});
}
function draw() {
  background(bg); 
 
  textSize(35);
  text("play a game in snow world ,hit the ice cubes with the ball",100,100)
  textSize(35);
  text("move the boy using left and right arrow",50,135)
  fill("lightyellow");
  
  
  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("white");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  fill("white");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("white");
  block13.display();
  block14.display();
  block15.display();
  
  fill("white");
  block16.display();
  boy.display()
  slingShot.display();
  if(keyDown(RIGHT_ARROW)){
    boy.velocityX=6
  }
  
  if(keyDown(LEFT_ARROW)){
    boy.velocityX=-6
  }
  
  
  for (var a = 0; a < snow.length; a++) {
    snow[a].display();
  }

  if (frameCount%60 ==0){
    snow.push(new Snow(random(width/10-100,width/10+101),100,10))
    
}
if (frameCount%60 ==0){
  snow.push(new Snow(random(width/2-10,width/2+10),100,100))
  
}
if (frameCount%60 ==0){
  snow.push(new Snow(random(width/1-100,width/1+101),200,10))
  
}
  fill("white");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

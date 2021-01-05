//define all the variables here
var jerry,ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var obGroup,cheeseGroup
var score
var gameOver,reset


function preload(){  
  //mouseImg=loadImage("MOUSESPRITE1.png")
  
}


function setup() {
  createCanvas(1000,500);
  
  


  jerry=createSprite(50,400,20,40);
 //jerry.addImage(mouseImg);
 
  ground=createSprite(500,480,1000,20);
  ground.x=ground.width/4;
  ground.velocityX=-3;

  obGroup=new Group();
cheeseGroup=new Group();
score=0;

reset=createSprite(500,400,10,10)
reset.visible=false
gameOver=createSprite(500,450,10,10)
gameOver.visible=false
}

function draw() {
  background(255,255,255);  
  text("CHEESE eaten by Jerry: "+score,500,50)
  //text(mouseX+ "," +mouseY,mouseX,mouseY)

if(gameState===PLAY){
  if(ground.x<0){
    ground.x=ground.width/4
  }
  if(keyDown("space")) {
    jerry.velocityY = -12;
  
}
jerry.velocityY+=0.8;

  spawn_cheese();
  spawn_tom();

  if(obGroup.isTouching(jerry)){
    gameState=END;
  }
  if(cheeseGroup.isTouching(jerry))
  {
    score=+1;
    cheeseGroup.destroyEach()
  }
  
}

else if(gameState===END){
ground.velocityX=0
jerry.velocityX=0
obGroup.setVelocityXEach(0)
obGroup.setLifetimeEach(-1)
cheeseGroup.setVelocityXEach(0)
cheeseGroup.setLifetimeEach(-1)
reset.visible=true
gameOver.visible=true

}
jerry.collide(ground)
  
  
  
  
  drawSprites();
}


function spawn_cheese(){
  if(frameCount%300===0){
    var cheese=createSprite(900,250,30,30)
    //cheese.addAniamtion("chesses",cheeseImg)
    cheese.velocityX=-3;
    cheeseGroup.add (cheese)

  }
}

function spawn_tom(){
  if(frameCount%80===0){
    var tom=createSprite(1000,470,10,90)
    //tom.addImage("tom_img")
    tom.velocityX=-5;
    tom.lifetime=250;
    obGroup.add(tom)
  }
}
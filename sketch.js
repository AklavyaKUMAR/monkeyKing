var PLAY= 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var invisibleground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas (600,500);
  
  monkey = createSprite (100,495,15,15);
  monkey.addAnimation ("monkey",monkey_running);
  monkey.scale = 0.2;
  
  invisibleground = createSprite (300,495,600,20);
  invisibleground.visible = false;
  
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
  
  background (180);
  
  if (gameState === PLAY){
    
     spawnBananas();
  
  spawnObstacles();
  
  survive();
    
 if (keyDown ("space") && monkey.y>=393 ){
    
    monkey.velocityY = -20;
     
 }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide (invisibleground);
  
  if (monkey.isTouching(obstacleGroup)){
    
    
    gameState = END ;
    
    
    
  }
     
  }else
    if (gameState === END){
  
  bananaGroup.setVelocityXEach (0);
  obstacleGroup.setVelocityXEach (0);
      
      monkey.velocityY = 0;
      
      bananaGroup.setLifetimeEach (-1) ; 
      obstacleGroup.setLifetimeEach (-1);
      
}

 
  
  drawSprites();
  
}

function spawnObstacles (){
  
  if (frameCount%220===0){
    
    obstacle = createSprite (600,450 ,15,15);     
  obstacle.addImage ("obstacle",obstacleImage);
    obstacle.velocityX = -8;
  obstacle.scale = 0.2
    
    obstacle.Lifetime = 150;
    
    obstacleGroup.add(obstacle);
  
  } 
  
} 

function spawnBananas (){
  
  if (frameCount%70===0){
    
    banana = createSprite (600,75 ,15,15);     
  banana.addImage ("banana",bananaImage);
    banana.y = Math.round(random(75,150));
  banana.velocityX = -8;
  banana.scale = 0.1;
    
    banana.Lifetime = 150;
  
    
    bananaGroup.add(banana);
    
  } 
  
} 

function survive (){
  
  var survivalTime = 0;
  stroke("white");
  textSize (20);
  fill ("white");
  text ("score:",score ,400,50);
  
  stroke("black");
  textSize (20);
  fill ("black");
  survivalTime = Math.ceil (frameCount/frameRate())
  text ("survivalTime :"+survivalTime,200,30);
  
  
  
  
  
  
}
var jake, jakeImg, bomb, bombG, bombImg, energyDrink, energyDrinkImg, energyDrinkG, fruit, fruit1, fruit1Img, fruitG,fruit2, fruit2Img, fruit3, fruit3Img,fruit4, fruit4Img,  path, pathImg, gameOverImg;

var PLAY=1
var END=0
var gameState=PLAY

function preload(){
  //loading images
jakeImg = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  bombImg = loadImage ("bomb.png");
  energyDrinkImg = loadImage ("energyDrink-1.png");
  fruit1Img = loadImage ("fruit1.png");
  fruit2Img = loadImage ("fruit2.png");
  fruit3Img = loadImage ("fruit3.png");
  fruit4Img = loadImage ("fruit4.png");
  pathImg = loadImage ("path.png");
  gameOverImg = loadImage("gameover.png");
}

function setup() {
 createCanvas(400,400);
  //creating path
  path = createSprite (200,200);
  path.addImage  (pathImg);
  path.scale = 1;
   
  
  jake = createSprite (200,300)
  jake.addAnimation ("movingJake",jakeImg);
  
  
  
}

function draw() {
 background (0);
  
  fruitG = createGroup();
  bombG= createGroup();
  energyDrinkG= createGroup();
  
  score=0;
  
  
  if(gameState === PLAY){
    spawnFruits();
    spawnbomb();
  
    path.velocityY = 3;
    
 
    if (fruitG.isTouching(jake)){
        fruitG.destroyEach();
        score=  score+1
  }
  
else{
  if(bombG.isTouching(jake)){
    gameState = END;
    fruitG.destroyEach ();
    bombG.destroyEach();
    jake.changeImage(GameOverImg);
  
}
  }        
  if(path.y >400){
     path.y = path.y/2;
    
    
  }
     }
jake.x = World.mouseX;
    
drawSprites ();
  
   textSize(25);
  text("Score : "+ score,250,50);
}

function  spawnFruits (){
  if (World.frameCount%50===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    console.log(position);
    
    if(position==1){
      fruit.x=200;
      fruit.velocityY= (7+(score/4));
    } 
    else 
    {
      if (position==2){
        fruit.x=0;
        fruit.velocityY= (7+(score/4));
      }
    }
      
       fruit.scale=0.2;
      var rand = Math.round(random(1,4));
 if (rand == 1){
   fruit.addImage (fruit1Img);
 }
    else if(r == 2){
      fruit.addImage(fruit2Img);
    }else if (r == 3){
      fruit3.addImage (fruit3Img);
    }else {
      fruit.addImage (fruit4Img)
    }
    
    fruit.y =Math.round(random(200,200));
  
    fruit.setLifetime=100;
    fruitG.add(fruit);
    }
}


function spawnbomb (){
  if (World.frameCount%400===0){
    position = Math.round(random(1,2));
   var bomb=createSprite(200,50,20,20);
    console.log(position);
    bomb.addImage (bombImg)
    bomb.scale =  0.1;
    bomb.setLifetime = 20;
    bomb.velocityY = (7+(score/4));
     
  }
}
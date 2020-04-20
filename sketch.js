

var gameState = "no";
var canvas,truck1,truck2,truck3,truck4,truck5,ground,groundImg,car,puddle;
var moves =0;
var score=0;
var misses=0;
var puddleImg,carsGroup,puddleGroup,player,playerImg,logo1img,logo2img,nameForm,layer,capture,end,maleB,femaleB,playB,startB;


function preload(){
  truck1 = loadImage ("sprites/truck1.png");
  truck2 = loadImage ("sprites/truck2.png");
  truck3 = loadImage ("sprites/truck3.png");
  truck4 = loadImage ("sprites/truck4.png");
  logo1img = loadImage("sprites/Icon1.png");
  logo2img = loadImage("sprites/logo2img.png");
  groundImg = loadImage("sprites/desert.jpg");
  capture = loadImage("sprites/Capture.PNG");
  maleB = loadImage("sprites/button_male.png");
  femaleB = loadImage("sprites/button_female.png");
  playB = loadImage("sprites/button_play.png");
  startB = loadImage("sprites/button_start.png");
}

function setup(){
 canvas=createCanvas(1350,950);
 playerImg=loadAnimation("sprites/1.png","sprites/2.png","sprites/3.png");
  ground=createSprite(675,475,489.6,656.2);//489.6,65652
  ground.addImage("ground",groundImg);
  ground.scale=0.65;
  ground.y=ground.height/2;
  //player=createSprite(1025,875,100,150);
 // player.addAnimation("player",playerImg);
  //player.scale=8;
  player=createSprite(475,800,100,150);
  player.addAnimation(playerImg);
  player.visible = false;
  nameForm = new NAMEform();
  end = new EndForm();
 // layer = new Player();
  carsGroup=new Group();
  puddleGroup=new Group();
  ground.velocity.y=20;
  
 
}


function draw() {

 background("white");
 nameForm.display();
 if (ground.position.y >950){
  ground.position.y = ground.height/2;
}
if(player.position.x===75 && keyDown("RIGHT_ARROW") && gameState==="play"){
  player.position.x = player.position.x + 400 ;
}
else if(player.position.x===875 && keyDown("RIGHT_ARROW") && gameState==="play"){
  player.position.x = player.position.x + 400;
}

else if(player.position.x===475 && keyDown("RIGHT_ARROW") && gameState==="play"){
  player.position.x = player.position.x + 400;
}

if(player.position.x===1275 && keyDown("LEFT_ARROW") && gameState==="play"){
  player.position.x = player.position.x -400 ;
}
else if(player.position.x===875 && keyDown("LEFT_ARROW") && gameState==="play"){
  player.position.x = player.position.x - 400;
}

else if(player.position.x===475 && keyDown("LEFT_ARROW") && gameState==="play"){
  player.position.x = player.position.x -400;
}

 //player.position.x = mouseX;
 //player.position.y = mouseY;
 textSize(20);
 
 fill("ORANGE")
 if(gameState==="play"){
 text("SCORE: "+score,100,20);
 text("MISSES: "+misses,100,60);
 
 }

 if (gameState==="play"){
   
  player.visible = true;
  spawnCars();
  spawnPuddles();
  run();
  //move();
  change();
  
  






  drawSprites();
}



/*function move(){
  if(player.position.x===75 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = player.position.x + 1200 - 800 ;
  }
  else if(player.position.x===875 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = player.position.x + 1200 - 800;
  }
  
  else if(player.position.x===475 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = player.position.x + 1200 - 800;
  }
  
  if(player.position.x===1275 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = player.position.x -400 ;
  }
  else if(player.position.x===875 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = player.position.x -400;
  }
  
  else if(player.position.x===475 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = player.position.x -400;
  }
}*/



function spawnCars (){
  if (frameCount % 75===0){
    
    var rnd1=Math.round(random(1,4));
    car= createSprite(rnd1*400-325,-30);
    //car.debug=true;
     var rnd = Math.round(random(1,4));
      switch(rnd){
         case 1:car.addImage(truck1);
         car.scale=1.5;
         break;
         case 2:car.addImage(truck2);
         car.scale=1.5;
         break;
         case 3:car.addImage(truck3);
         car.scale=1.5;
         break;
         case 4:car.addImage(truck4);
         car.scale=2.5;
         break;
         
         break;
         default:break;
     }
   
   
     car.velocity.y=24;
 
    
   
     car.lifetime=82;
      
     carsGroup.add(car);
    
   }
 
}

function spawnPuddles(){

  if (frameCount % 105===0){
    
    var r=Math.round(random(1,4)); 
    puddle= createSprite(r*400-325,-30);
    //puddle.debug=true;
    //puddle.addImage(puddleImg);
    puddle.velocity.y=24;
    puddle.scale=2;
    puddle.lifetime=82;
    puddleGroup.add(puddle);
   

  }

}
function run(){
  if (frameCount % 405===0){
    ground.velocity.y = ground.velocity.y+0.25;
    car.velocity.y = car.velocity.y+0.25;
    
    puddle.velocity.y = puddle.velocity.y+0.25;
  }

  
 
}
function change(){
  if(carsGroup.collide(player)){
gameState = "end";
    car.visible=false;
    end.display();
    car.velocity.y = 0;
    puddle.velocity.y = 0;
    ground.visible = false;
    player.visible = false;
  
  }
  if(puddleGroup.collide(player)){
   
    puddle.visible=false;
    score=score+400;
   misses=misses-400;
  }
  /*if(puddleGroup.position.y<850){
    misses = misses+400;

  }*/
 }
}
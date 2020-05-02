var peddle;

var brick1;
var brick2;
var brick3;
var brick4;
var brick5;
var brick6;
var brick7;
var brick8;
var brick9;
var brick10;
var brick11;
var brick12;
var brick13;
var brick14;
var brick15;
var brick16;
var brick17;
var brick18;
var brick19;
var brick20;
var brick21;
var brick22;
var brick23;
var brick24;


var ball;

var score = 0;




function setup() {
  createCanvas(400,400);

   peddle = createSprite(200, 390,45,10);
peddle.shapeColor="green";



 brick1 = createSprite(25, 200,40,20);
brick1.shapeColor="cyan";
brick1.velocityY = 3;
brick1.velocityX = 0;

 brick2 = createSprite(75, 200,40,20);
brick2.shapeColor="orange";
brick2.velocityX = 0;
brick2.velocityY = 2;

 brick3 = createSprite(125, 200,40,20);
brick3.shapeColor="red";
brick3.velocityX = 0;
brick3.velocityY = 1;

 brick4 = createSprite(175, 200,40,20);
brick4.shapeColor="pink";
brick4.velocityX = 0;
brick4.velocityY = 3;

 brick5 = createSprite(225, 200,40,20);
brick5.shapeColor="green";
brick5.velocityX = 0;
brick5.velocityY = 2;

 brick6 = createSprite(275, 200,40,20);
brick6.shapeColor="violet";
brick6.velocityX = 0;
brick6.velocityY = 1;


 brick7 = createSprite(325, 200,40,20);
brick7.shapeColor="indigo";
brick7.velocityX = 0;
brick7.velocityY = 3;

 brick8 = createSprite(375, 200,40,20);
brick8.shapeColor="purple";
brick8.velocityX = 0;
brick8.velocityY = 2;

 brick9 = createSprite(25, 150,40,20);
brick9.shapeColor="orange";
brick9.velocityX = 0;
brick9.velocityY = 1;



 brick10 = createSprite(75, 150,40,20);
brick10.shapeColor="red";
brick10.velocityX = 0;
brick10.velocityY = 3;


 brick11 = createSprite(125, 150,40,20);
brick11.shapeColor="pink";
brick11.velocityX = 0;
brick11.velocityY = 2;


 brick12 = createSprite(175, 150,40,20);
brick12.shapeColor="green";
brick12.velocityX = 0;
brick12.velocityY = 1;


 brick13 = createSprite(225, 150,40,20);
brick13.shapeColor="violet";
brick13.velocityX = 0;
brick13.velocityY = 3;


 brick14 = createSprite(275, 150,40,20);
brick14.shapeColor="indigo";
brick14.velocityX = 0;
brick14.velocityY = 2;


 brick15 = createSprite(325, 150,40,20);
brick15.shapeColor="purple";
brick15.velocityX = 0;
brick15.velocityY = 1;


 brick16 = createSprite(375, 150,40,20);
brick16.shapeColor="cyan";
brick16.velocityX = 0;
brick16.velocityY = 3;


 brick17 = createSprite(25, 100,40,20);
brick17.shapeColor="cyan";
brick17.velocityX = 0;
brick17.velocityY = 2;


 brick18 = createSprite(75,100,40,20);
brick18.shapeColor="orange";
brick18.velocityX = 0;
brick18.velocityY = 1;


 brick19 = createSprite(125, 100,40,20);
brick19.shapeColor="red";
brick19.velocityX = 0;
brick19.velocityY = 3;


 brick20 = createSprite(175, 100,40,20);
brick20.shapeColor="pink";
brick20.velocityX = 0;
brick20.velocityY = 2;


 brick21 = createSprite(225, 100,40,20);
brick21.shapeColor="green";
brick21.velocityX = 0;
brick21.velocityY = 1;


 brick22 = createSprite(275, 100,40,20);
brick22.shapeColor="pink";
brick22.velocityX = 0;
brick22.velocityY = 3;


 brick23 = createSprite(325, 100,40,20);
brick23.shapeColor="indigo";
brick23.velocityX = 0;
brick23.velocityY = 2;


 brick24 = createSprite(375, 100,40,20);
brick24.shapeColor="purple";
brick24.velocityX = 0;
brick24.velocityY = 1;







}
 


function draw() {
  background("black");
  
  peddle.x= mouseX;
strokeWeight(10);
fill("pink");
  text("score = "+score,340,50);

  text("destroy the bricks with the help of paddle",50,50);

  
 
if (peddle.isTouching(brick1)){
  score = score+1;
  brick1.destroy();
}

if (peddle.isTouching(brick2)){
  score = score+1;
  brick2.destroy();
}

if (peddle.isTouching(brick3)){
  score = score+1;
  brick3.destroy();
}

if (peddle.isTouching(brick4)){
  score = score+1;
  brick4.destroy();
}

if (peddle.isTouching(brick5)){
  score = score+1;
  brick5.destroy();
}
if (peddle.isTouching(brick6)){
  score = score+1;
  brick6.destroy();
}

if (peddle.isTouching(brick7)){
  score = score+1;
  brick7.destroy();
}

if (peddle.isTouching(brick8)){
  score = score+1;
  brick8.destroy();
}

if (peddle.isTouching(brick9)){
  score = score+1;
  brick9.destroy();
}

if (peddle.isTouching(brick10)){
  score = score+1;
  brick10.destroy();
}

if (peddle.isTouching(brick11)){
  score = score+1;
  brick11.destroy();
}

if (peddle.isTouching(brick12)){
  score = score+1;
  brick12.destroy();
}

if (peddle.isTouching(brick13)){
  score = score+1;
  brick13.destroy();
}

if (peddle.isTouching(brick14)){
  score = score+1;
  brick14.destroy();
}

if (peddle.isTouching(brick15)){
  score = score+1;
  brick15.destroy();
}

if (peddle.isTouching(brick16)){
  score = score+1;
  brick16.destroy();
}

if (peddle.isTouching(brick17)){
  score = score+1;
  brick17.destroy();
}

if (peddle.isTouching(brick18)){
  score = score+1;
  brick18.destroy();
}

if (peddle.isTouching(brick19)){
  score = score+1;
  brick19.destroy();
}

if (peddle.isTouching(brick20)){
  score = score+1;
  brick20.destroy();
}

if (peddle.isTouching(brick21)){
  score = score+1;
  brick21.destroy();
}

if (peddle.isTouching(brick22)){
  score = score+1;
  brick22.destroy();
}

if (peddle.isTouching(brick23)){
  score = score+1;
  brick23.destroy();
}

if (peddle.isTouching(brick24)){
  score = score+1;
  brick24.destroy();
}


 drawSprites();
}
  

  
 





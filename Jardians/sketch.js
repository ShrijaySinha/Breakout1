var paddle;
var ball,ballImg;
var edges;
var brickGroup;
var score=0;

function preload(){
  ballImg=loadImage("ball.png");
}

function setup() {
  createCanvas(800,400);

  paddle=createSprite(400, 350, 100, 10);

  ball=createSprite(400,270,10,10);
  ball.addImage(ballImg);
  ball.scale=0.05;

  edges=createEdgeSprites();

  brickGroup=new Group();
  bricks(65);
  bricks(95);
  bricks(125);
  bricks(155);
}

function draw() {
  background(0);
  
  paddle.x=mouseX;
  paddle.shapeColor="green";
 
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle);
  ball.bounceOff(brickGroup,brickHit);
 
  textSize(20);
  stroke("white");
  fill ("white");
  text("Score= "+score,700,40);

  if(ball.y>400){
    text("GAME OVER",350,200);
  }

  drawSprites();
}

function mouseClicked(){
  ball.velocityY=10;
  ball.velocityX=10;
}
function bricks(y){
  for(var c=0;c<12;c++){
    var brick=createSprite(65+55*c,y,50,25);
    brickGroup.add(brick);
    brick.shapeColor=color(random(255),random(255),random(255));
  }
}
function brickHit(ball,brick) {
  brick.remove();
  score=score+1;
  };
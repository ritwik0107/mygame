var boy,boyImage,bgs,bgi


function preload (){
boyImage=loadImage("images/boy 1.png")
bgi=loadImage("images/background.jpg")
}
function setup (){
  createCanvas (1200,400)
  bgs=createSprite(600,-100,1200,400)
  bgs.scale=3
  boy =createSprite(200,200,10,10)
  boy.addImage(boyImage)
 bgs.addImage(bgi)
  bgs.x=bgs.width/2
  bgs.velocityX=-5;
  
  }


function draw (){
background("black")
if (bgs.x<0) {
  bgs.x=width/2
}






  drawSprites()



}
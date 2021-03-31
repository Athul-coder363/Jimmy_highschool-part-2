var jimmy, jimmyImage1 , jimmyImage2, jimmyImage3;
var ground;
var box,boxGroup, boxImage;
function setup(){
createCanvas(windowWidth,windowHeight);
ground = createSprite(width/2, 650,width,20); 
 jimmy = createSprite(200, height - 330, 50,50);
 jimmy.scale= 0.8;
 jimmyImage1 = loadImage("images/playerrun.png");
 jimmyImage2 = loadImage("images/playerkick.png");
 jimmyImage3 = loadImage("images/playerfall.png")
boxImage = loadImage("images/locker.png");
 boxGroup = new Group();
}
function draw(){
    background("white");
    if(keyDown(UP_ARROW)){
        jimmy.velocityY=-9
    }
    if(keyDown(DOWN_ARROW)){
        jimmy.velocityY=3
    }
    if(keyDown(LEFT_ARROW)){
        jimmy.velocityX=-3
    }
    if(keyDown(RIGHT_ARROW)){
        jimmy.velocityX=5
    }
    jimmy.addImage(jimmyImage1);
    //console.log(windowWidth)
    jimmy.velocityY+=0.8
    jimmy.collide(ground);  
    jimmy.debug=true;
    if(boxGroup.isTouching(jimmy)){
        jimmy.velocityY=0
        jimmy.velocityX=0
        boxGroup.setLifetimeEach(-1);
        boxGroup.setVelocityXEach(0);
        jimmy.addImage(jimmyImage3);
       //console.log("gameOver");
    }
    if(jimmy.x>windowWidth){
    background("black")
    }
    if(keyDown(DOWN_ARROW)){
        jimmy.addImage(jimmyImage2);
        jimmy.scale= 1.5;
        Jreturn();
        jimmy.setCollider("circle",0,0,40)

    }
    console.log(jimmy.x);
    Objects();  
    drawSprites();
}
function Objects(){
    if(frameCount %200 === 0){
        box = createSprite(width,570,50,50);
        box.addImage(boxImage);
        box.scale = 0.5
        box.velocityX=-4;
        var rand = Math.round(random(1,2));
        //console.log(rand)
        switch(rand){
            case 1: box.y=500;
            break;
            case 2: box.y=600;
            break;
            default: break;
        }
        box.lifetime=width/4
        boxGroup.add(box);
    }
}
function Level2 (){

}
function Jreturn(){
    jimmy.scale=0.8;
}
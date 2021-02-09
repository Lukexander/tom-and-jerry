var cat,catimage1,catimage2,catimage3;
var mouse,mouseimage1,mouseimage2,mouseimage3;
var BGimage;

function preload() {
    //load the images here
    catimage1=loadAnimation("images/cat1.png")
    catimage2=loadAnimation("images/cat2.png","images/cat3.png")
    catimage3=loadAnimation("images/cat4.png")
    BGimage = loadImage("images/garden.png")
    mouseimage1 = loadAnimation("images/mouse1.png")
    mouseimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addAnimation("catAnimation",catimage1)
cat.scale = 0.2

mouse = createSprite(200,600)
mouse.addAnimation("mouseAnimation",mouseimage1)
mouse.scale = 0.15;
}

function draw() {

    
    background(BGimage)
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.x = 300;
        cat.scale=0.2;
        cat.addAnimation("catAnimation3",catimage3 )
        cat.changeAnimation("catAnimation3")

       
        mouse.addAnimation("mouseanimation3",mouseimage3)
        mouse.scale=0.15;
    mouse.changeAnimation("mouseanimation3")
    }

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catAnimation2",catimage2 )
    cat.changeAnimation("catAnimation2")

    mouse.addAnimation("mouseanimation2",mouseimage2)
    mouse.frameDelay =25;
    mouse.changeAnimation("mouseanimation2")
}

  //For moving and changing animation write code here


}

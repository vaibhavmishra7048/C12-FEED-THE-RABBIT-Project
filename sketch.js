var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,Rleaf;
var appleImg,leafImg,RleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg= loadImage("apple.png");
leafImg= loadImage("leaf.png");
RleafImg= loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}

 function createLeaves(){ 
  leaf=createSprite(random(400,10),40,10,10) ;
leaf.addImage(leafImg);  
 leaf.scale=0.1; 
  leaf.lifetime=70;
  leaf.velocityY=3;                      
}                      
  
function createApples(){
apple=createSprite(random(350,50),40,15,15);  
apple.addImage(appleImg);  
apple.scale=0.1;  
apple.velocityY=3;
apple.lifetime=70;

}  
  
function createRleaves(){
Rleaf=createSprite(random(350,20),60,40,10); 
 Rleaf.addImage(RleafImg); 
Rleaf.scale=0.1 
Rleaf.lifetime=70;
Rleaf.velocityY=3;

}


function draw() {
 
var sprites_select=Math.round(random(1,2));
  if (frameCount % 90==0){

  
   if (sprites_select==1) {
    createApples(); 
     } 
    if (sprites_select==2) {
      createLeaves();
    }

  
   }
  
  var select_sprites=Math.round(random(3));
  if (frameCount % 100==0){
  createRleaves();  
    
  }
  
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
//Create variables here

var dog;
var dogImage,happyDogImg;
var food;
var foodStock,foodS;


function preload()
{
	//load images here
dogImage = loadImage("images/Dog.png");
happyDogImg = loadImage("images/happyDog.png");



}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale(0.15);

  foodStock = database.ref(Food);
foodStock.on("value",readStock);
textSize(20);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happydog.png);
  }

  drawSprites();
  //add styles here

  Text("Note: PRESS UP_ARROW TO FEED THE DOG",130,10,300,20);
  textSize(20);
  fill(255,255,254);
  stroke("black");

  function readStock(data){
   foodS=data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
  }
   
  database.ref('/').update({
    Food:x
  })
}
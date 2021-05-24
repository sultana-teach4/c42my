var canvas, backgroundImage;
var xVel,yVel;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var f1,f2,w,h;
var form, player, game;
var finishedPlayers;
var passedFinish;

var cars, car1, car2, car3, car4,obstaclesGroup;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  f2=loadImage("images/f1.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  xVel=0;
  yVel=0;
  finishedPlayers=0;
  distance=0;
  game = new Game();
  obstaclesGroup= createGroup();
  game.getState();
  game.start();
  
 
  
}


function draw(){
  if (playerCount === 4 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 4) {
    game.update(2);
    //gameState = 2;
  }
}

var database, position;
var gameState=0, playerCount=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}


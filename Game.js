class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            var player=new Player();
            player.getCount();
            var form= new Form();
            form.display();
        }
    }
}

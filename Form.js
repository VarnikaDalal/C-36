class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game");
        title.position(180,30);

        var input=createInput("Name:");
        input.position(180,70);

        var button=createButton("Click");
        input.position(180,110);

        var greeting=createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value()
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " +  name );
            greeting.position(180,70);
        })
    }
}
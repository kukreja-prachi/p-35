var balloon , height , database

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    balloon = createSprite(250,250,10,10);
    var balloonPosition = database.ref('balloon/height');
    balloonPosition.on("value" , readPosition , showError)

}

function updateHeight(x,y){
  database.ref('balloon/height').set({
      'x': position.x+x,
      'y':position.y+y

  })
    
}

function readHeight(data){
    position = data.val();
    balloon.x = position.x;
    balloon.y = position.y;

}

function showError(){
    console.log("error in reading to database")

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x - 10
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x+10
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y-10
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y+10
    }

    if(keyDown(UP_ARROW)){
      updateHeight(0 , -10)
      balloon.addAnimation
    }
    drawSprites();
}




var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});
var toybox;
var settings = {
    gravity: 980,
    demoMode: true,
    plugins: ["alien","slime","backdrop","platform","spikes","spring"]
};

function preload() {
    toybox = new Toybox(game,settings);
    toybox.preload();
}
var player1;



function create() {
    toybox.create();
    createbackground ()
    createGameobjects ()
}

function createbackground () {
var springBackdrop = {preset: "spring"};
    toybox.add.backdrop(springBackdrop);
}

function createGameobjects () {
    var playerOptions = {
        startingX : 100,
        startingY: 100,
        jumpForce: 440,
        speed: 100,
        scale: 1
    };
    player1 = toybox.add.alien(playerOptions);
    
    playerScore = toybox.add.text(5,5,"SCORE: " + player1.score,{ font: "14px Arial", fill: "#fff"});
    playerLives = toybox.add.text(5,20,"NUMBER OF LIVES: " + player1.health,{ font: "14px Arial", fill: "#fff"});
    game.time.events.loop(2000, createEnemies,this);
    
    createEnemies();

    var platformOptions = {
        startingX: 530,
        startingY: 430,
        width: 200,
        height: 16
    };
    
    var platformOptions2 = {
    startingX: 110,
    startingY: 430,
    width: 200,
    height: 17
    };
    
    var platformOptions3 = {
    startingX: 300,
    startingY: 340,
    width:180,
    height: 16
    };
    
    var platformOptions4 = {
    startingX:530,
    startingY:260,
    width:200,
    height:17
    };
    
    var platformOptions5 = {
    startingX:110,
    startingY:260,
    width:200,
    height:17
    };
    
    var platformOptions6 = {
    startingX: 300,
    startingY: 100,
    width:160,
    height: 16
    };
    
    [platformOptions,platformOptions2, platformOptions3, platformOptions4, platformOptions5, platformOptions6].forEach(po => toybox.add.platform(po))

    var defaultspikeOptions = {
        startingY: 640,
        scale:1,
        color: "pink"
    }

    for (i = 0; i < 18; i++) {
        const spikesOptions = Object.assign({startingX:480 - 20*i}, defaultspikeOptions);
        toybox.add.spikes(spikesOptions)
        //text += "The number is " + i + "<br>";
    }

var springOptions = {
startingX:200,
startingY:240,
immovable:true,
allowGravity:false
};

spring = toybox.add.spring(springOptions);

var springOptions2 = {
startingX:440,
startingY:240,
immovable:true,
allowGravity:false
};

spring2 = toybox.add.spring(springOptions2);

}



function update(){
    toybox.update();
    
    playerScore.setText("SCORE: "+ player1.score);
    playerLives.setText("NUMBER OF LIVES: "+ player1.health);

    if (player1.health === 0 && game.paused === false) {
        game.paused = true;
        playerGameover = toybox.add.text(9,200,"GAME OVER",{ font: "100px Arial", fill: "black"});
        playerRestart = toybox.add.text(85,300,"Press D for directions or Enter to restart the game",{ font: "20px Arial", fill: "white" })
        letterD = game.input.keyboard.addKey(68)
        letterEnter = game.input.keyboard.addKey(13)
        letterD.onDown.add(displaydirections, this);
        letterEnter.onDown.add(restart, this);
    }
}

var playerGameover;
var playerRestart;

function displaydirections () {
    playerGameover.destroy ()
    playerRestart.destroy ()
    displaydirectionstext = toybox.add.text(85,300,"Your goal is to kill as many of those slippery slimes as possible! In order to do so, jump on top of them using the space bar. But be careful. You only have three lives.",{ font: "20px Arial", fill: "black", wordWrap: true, wordWrapWidth: 500 })
}

function restart () {
    toybox.clear()
    preload ()
    create ()
    game.paused = false;
    game.input.keyboard.removeKey(68)
    game.input.keyboard.removeKey(13)
}


function createEnemies(){
    console.log("create enemies");
    var xMultiplier = Math.random() * 640 + 1;

    var slime = toybox.add.slime({
        startingX : (xMultiplier)
        
    });
    slime.findTarget = function(){
        return new Phaser.Point(player1.x,player1.y)
    };
    slime.body.onCollide.add(function(slime,collidedSprite){
        if(collidedSprite == player1 && slime.health <= 0){
            player1.score+=1;
        }
    })
    
}


    

var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
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

function clear() {
    toybox.clear();
}

function create() {
    toybox.create();

    var playerOptions = {
        startingX : 100,
        startingY: 100,
        jumpForce: 440,
        speed: 100,
        scale: 1
    };
    player1 = toybox.add.alien(playerOptions);
    
    playerScore = toybox.add.text(5,5,"SCORE: " + player1.score,{ font: "14px Arial", fill: "#fff"});
    playerHealth = toybox.add.text(5,20,"LIVES: " + player1.health,{ font: "14px Arial", fill: "#fff"});
    game.time.events.loop(2000, createEnemies,this);

    createEnemies();
    var springBackdrop = {preset: "spring"};
    toybox.add.backdrop(springBackdrop);

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
    
var platformGO = toybox.add.platform(platformOptions);
var platformGO = toybox.add.platform(platformOptions2);
var platformGO = toybox.add.platform(platformOptions3);
var platformGO = toybox.add.platform(platformOptions4);
var platformGO = toybox.add.platform(platformOptions5);
var platformGO = toybox.add.platform(platformOptions6);

var spikesOptions = {
startingX:400,
startingY:640,
scale:1
};

var spikesOptions2 = {
startingX:380,
startingY:640,
scale:1
};

var spikesOptions3 = {
startingX:360,
startingY:640,
scale:1
};

var spikesOptions4 = {
startingX:340,
startingY:640,
scale:1
};

var spikesOptions5 = {
startingX:320,
startingY:640,
scale:1
};

var spikesOptions6 = {
startingX:300,
startingY:640,
scale:1
};

var spikesOptions7 = {
startingX:280,
startingY:640,
scale:1
};

var spikesOptions8 = {
startingX:260,
startingY:640,
scale:1
};

var spikesOptions9 = {
startingX:240,
startingY:640,
scale:1
};

var spikesOptions10= {
startingX:220,
startingY:640,
scale:1
};

var spikesOptions11= {
startingX:420,
startingY:640,
scale:1
};

var spikesOptions12= {
startingX:200,
startingY:640,
scale:1
};

var spikesOptions13= {
startingX:200,
startingY:640,
scale:1
};

var spikesOptions14= {
startingX:180,
startingY:640,
scale:1
};

var spikesOptions15= {
startingX:160,
startingY:640,
scale:1
};

var spikesOptions16= {
startingX:440,
startingY:640,
scale:1
};

var spikesOptions17= {
startingX:460,
startingY:640,
scale:1
};

var spikesOptions18= {
startingX:480,
startingY:640,
scale:1
};

var spikes = toybox.add.spikes(spikesOptions);
var spikes = toybox.add.spikes(spikesOptions2);
var spikes = toybox.add.spikes(spikesOptions3);
var spikes = toybox.add.spikes(spikesOptions4);
var spikes = toybox.add.spikes(spikesOptions5);
var spikes = toybox.add.spikes(spikesOptions5);
var spikes = toybox.add.spikes(spikesOptions6);
var spikes = toybox.add.spikes(spikesOptions7);
var spikes = toybox.add.spikes(spikesOptions8);
var spikes = toybox.add.spikes(spikesOptions9);
var spikes = toybox.add.spikes(spikesOptions10);
var spikes = toybox.add.spikes(spikesOptions11);
var spikes = toybox.add.spikes(spikesOptions12);
var spikes = toybox.add.spikes(spikesOptions13);
var spikes = toybox.add.spikes(spikesOptions14);
var spikes = toybox.add.spikes(spikesOptions15);
var spikes = toybox.add.spikes(spikesOptions16);
var spikes = toybox.add.spikes(spikesOptions17);
var spikes = toybox.add.spikes(spikesOptions18);

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
    playerHealth.setText("LIVES: "+ player1.health);

    // if (player1.health === 0 && !game.paused) {
    //     playerHealth.setText("DEAD");
    //     game.paused = true;
    //     gameOverText = toybox.add.text(300,200,"Game Over",{ font: "64px Arial", fill: "#fff"});
    //     newGameButton = game.add.button(340, 200, null, clear, this);
    // }
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


    

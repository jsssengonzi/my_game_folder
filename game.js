var gameSettings = {
  playerSpeed: 200,
}

var config = {
  width: 946,
  height: 518,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Scene3],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
        debug: false,
        debugShowVelocity: false
    }
  }
}


var game = new Phaser.Game(config);

class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    
    this.load.spritesheet("bubble1", "assets/spritesheets/bubble1.png",{
      frameWidth: 30,
      frameHeight: 28
    });
    this.load.spritesheet("bubble2", "assets/spritesheets/bubble2.png",{
      frameWidth: 30,
      frameHeight: 28
    });
    this.load.spritesheet("bubble3", "assets/spritesheets/bubble3.png",{
      frameWidth: 30,
      frameHeight: 28
    });
    this.load.spritesheet("bubble4", "assets/spritesheets/bubble2.png",{
      frameWidth: 30,
      frameHeight: 28
    });
    this.load.spritesheet("bubble5", "assets/spritesheets/bubble3.png",{
      frameWidth: 30,
      frameHeight: 28
    });
    this.load.spritesheet("player", "assets/spritesheets/player.png",{
      frameWidth: 50,
      frameHeight: 50
    });
   
  
  }

  create() {
    //this.count = 0;
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");

    //this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.SPACE);  // Get key object
  
    
    

    this.anims.create({
      key: "bubble1_anim",
      frames: this.anims.generateFrameNumbers("bubble1"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "bubble2_anim",
      frames: this.anims.generateFrameNumbers("bubble2"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "bubble3_anim",
      frames: this.anims.generateFrameNumbers("bubble3"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
  }

 /*  update () {
    this.count += 1;
    this.add.text(400, 250," " + this.count);
    if (this.spacebar.isDown)
    {
      this.scene.start("playGame");
    }
   } */
 
}

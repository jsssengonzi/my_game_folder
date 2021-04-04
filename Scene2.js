class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");

  }

  create() {

    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.bubble1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "bubble1");
    this.bubble2 = this.add.sprite(config.width / 2, config.height / 2, "bubble2");
    this.bubble3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "bubble3");
    this.bubble4 = this.add.sprite(config.width / 2, config.height / 2, "bubble2");
    this.bubble5 = this.add.sprite(config.width / 2 + 50, config.height / 2, "bubble3");

    this.enemies = this.physics.add.group();
    this.enemies.add(this.bubble1);
    this.enemies.add(this.bubble2);
    this.enemies.add(this.bubble3);
    this.enemies.add(this.bubble4);
    this.enemies.add(this.bubble5);

    this.bubble1.play("bubble1_anim");
    this.bubble2.play("bubble2_anim");
    this.bubble3.play("bubble3_anim");
    this.bubble4.play("bubble2_anim");
    this.bubble5.play("bubble3_anim");

    this.bubble1.setInteractive();
    this.bubble2.setInteractive();
    this.bubble3.setInteractive();
    this.bubble4.setInteractive();
    this.bubble5.setInteractive();

    this.physics.world.setBoundsCollision();

    this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

    this.oxygen = 100;
    this.oxygenLabel = this.add.text(775, 10, "OXYGEN LEVEL: " + Math.round(this.oxygen) + "%");   
  }


  hurtPlayer(player, enemy) {

    this.resetShipPos(enemy);

    if(this.player.alpha < 1){
        return;
    }

    
    this.resetShipPos(enemy);
    this.oxygen += 5;
    if (this.oxygen > 100)
    {
      this.oxygen = 100;
      this.oxygenLabel.text = "OXYGEN LEVEL: 100%";
    }
    else
    {
      this.oxygenLabel.text = "OXYGEN LEVEL: " + Math.round(this.oxygen) + "%";
    }
  }

  resetPlayer(){
    var x = config.width / 2 - 8;
    var y = config.height + 64;
    this.player.enableBody(true, x, y, true, true);

    this.player.alpha = 0.5;

    var tween = this.tweens.add({
      targets: this.player,
      y: config.height - 64,
      ease: 'Power1',
      duration: 1500,
      repeat:0,
      onComplete: function(){
        this.player.alpha = 1;
      },
      callbackScope: this
    });
  }


  update() {

    this.moveShip(this.bubble1, -7);
    this.moveShip(this.bubble2, -7);
    this.moveShip(this.bubble3, -7);
    this.moveShip(this.bubble4, -7);
    this.moveShip(this.bubble5, -7);
    this.oxygen -= .15;
    if (this.oxygen <= 0)
    {
      this.scene.start("gameOver");
    }
    
    this.oxygenLabel.text = "OXYGEN LEVEL: " + Math.round(this.oxygen) + "%";


     this.movePlayerManager();


  } 





  movePlayerManager() {

    this.player.setVelocity(0);

    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y < 0) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 518;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }


}

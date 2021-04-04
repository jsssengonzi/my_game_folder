class Scene3 extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }
    create() {
        this.add.text(400, 250, "GAME OVER");
    }}
Invaders.Play = function() {
  this.backgroundMenu = null;
  this.logo = null;
  this.invadersLogo = null;
  this.buttonPlay = null;
  this.clickS = null;
};
Invaders.Play.prototype = {
  create: function() {
    this.backgroundMenu = this.add.image(0, 0, "backgroundMenu");
    this.logo = this.add.image(517, 256, "logo");
    this.logo.anchor.setTo(0.5, 0.5);
    this.invadersLogo = this.add.image(524, 387, "invadersLogo");
    this.invadersLogo.anchor.setTo(0.5, 0.5);

    var wooble = this.add.tween(this.invadersLogo.scale);
    wooble.to(
      {
        x: 1.02
      },
      500,
      Phaser.Easing.Sinusoidal.InOut,
      false,
      0,
      -1,
      true
    );
    wooble.start();

    this.buttonPlay = this.add.button(
      521,
      556,
      "buttonStart",
      this.mechanicOne,
      this,
      1,
      0,
      2
    );
    this.buttonPlay.anchor.setTo(0.5, 0.5);

    this.clickS = this.add.audio("click");
    this.clickS.volume = 1;
  },
  mechanicOne: function() {
    this.game.time.reset();
    this.state.start("MechanicOne");
    this.clickS.play();
  }
};

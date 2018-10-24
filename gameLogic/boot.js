var Invaders = {
  youWin1: false,
  youWin2: false,
  youWin3: false,
  youWin4: false,
  youWin5: false,
  youWin6: false,
  youWin7: false,
  youWin8: false,
  youWin9: false,
  youWin10: false,
  youWin11: false,
  youWin12: false,
  youWin13: false,
  isMobile: false
};

Invaders.Boot = function(game) {};
Invaders.Boot.prototype = {
  init: function() {
    this.input.maxPointers = 1;

    if (this.game.device.desktop) {
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
    } else {
      Invaders.isMobile = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(480, 260, 1024, 672);
      this.scale.forceLandscape = false;
      this.scale.pageAlignHorizontally = true;
    }
  },
  preload: function() {
    this.load.image("loadBar", "assets/loadBar.png");
    this.load.image('backgroundMenu', 'assets/backgroundMenu.png');
    this.load.image('loadingMarco', 'assets/loadingMarco.png');
  },
  create: function() {
    this.state.start("Preloader");
  }
};

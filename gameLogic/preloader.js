Invaders.Preloader = function() {
  this.backgroundMenu = null;
  this.loadingMarco = null;
};
Invaders.Preloader.prototype = {
  init: function() {},
  preload: function() {
    this.backgroundMenu = this.add.image(0,0,'backgroundMenu');
    this.preloadBar = this.add.sprite(
      this.world.centerX - 200,
      this.world.centerY,
      "loadBar"
    );
    this.load.setPreloadSprite(this.preloadBar);
    this.loadingMarco = this.add.image(this.world.centerX - 200,
      this.world.centerY,
      'loadingMarco');
    this.load.spritesheet("buttonPlay", "assets/ButtonPlay.png", 176, 178);

    // Game Assets
    this.load.image("hero", "assets/hero.png");
    this.load.spritesheet(
      "explodeInvaders",
      "assets/explodeInvaders.png",
      85,
      80
    );
    this.load.spritesheet("halo", "assets/halo.png", 56, 60);
    this.load.spritesheet("haloTwo", "assets/haloTwo.png", 46, 60);
    this.load.spritesheet("bulletHero", "assets/bulletHero.png", 15, 23);
    this.load.spritesheet("bulletUfo", "assets/bulletUfo.png", 25, 25);
    this.load.spritesheet("bulletInvader", "assets/bulletInvader.png", 12, 28);

    // Invaders
    this.load.spritesheet("invaderRubi", "assets/invaderRubi.png", 46, 30);
    this.load.spritesheet("invaderPink", "assets/invaderPink.png", 46, 30);
    this.load.spritesheet("invaderBlue", "assets/invaderBlue.png", 46, 30);
    this.load.spritesheet("ufoRubi", "assets/ufoRubi.png", 105, 40);
    this.load.spritesheet("flamaRubi", "assets/flamaRubi.png", 39, 50);
    this.load.spritesheet("campoDeFuerza", "assets/campoDeFuerza.png", 49, 50);

    // Modals
    this.load.image("gameOver", "assets/gameOver.png");
    this.load.image("youWin", "assets/youWin.png");
    this.load.image("modal", "assets/modal.png");

    this.load.image("modalMenu", "assets/modalMenu.png");
    this.load.image("levels", "assets/levels.png");

    this.load.spritesheet("buttonReplay", "assets/buttonReplay.png", 104, 104);
    this.load.spritesheet(
      "buttonNextChapter",
      "assets/buttonNextChapter.png",
      104,
      104
    );
    this.load.spritesheet("buttonMenu", "assets/buttonMenu.png", 104, 104);

    //YouWin
    this.load.audio("youWin", "assets/youWinSong.mp3");

    //Buttons
    this.load.image('logo', 'assets/logo.png');
    this.load.image('invadersLogo', 'assets/invadersLogo.png');
    this.load.spritesheet('buttonStart', 'assets/buttonStart.png', 121, 121);
    this.load.spritesheet("buttonOne", "assets/buttonOne.png", 70, 70);
    this.load.spritesheet("buttonTwo", "assets/buttonTwo.png", 70, 70);
    this.load.spritesheet("buttonThree", "assets/buttonThree.png", 70, 70);
    this.load.spritesheet("buttonFour", "assets/buttonFour.png", 70, 70);
    this.load.spritesheet("buttonFive", "assets/buttonFive.png", 70, 70);
    this.load.spritesheet("buttonSix", "assets/buttonSix.png", 70, 70);
    this.load.spritesheet("buttonSeven", "assets/buttonSeven.png", 70, 70);
    this.load.spritesheet("buttonEight", "assets/buttonEight.png", 70, 70);
    this.load.spritesheet("buttonNine", "assets/buttonNine.png", 70, 70);
    this.load.spritesheet("buttonTen", "assets/buttonTen.png", 70, 70);
    this.load.spritesheet("buttonEleven", "assets/buttonEleven.png", 70, 70);
    this.load.spritesheet("buttonTwelve", "assets/buttonTwelve.png", 70, 70);
    this.load.spritesheet(
      "buttonThirteen",
      "assets/buttonThirteen.png",
      70,
      70
    );

    // Locked
    this.load.image("locked", "assets/locked.png");
    this.load.spritesheet("buttonMenuS", "assets/buttonMenuS.png", 30, 30);

    // Audio
    this.load.audio("laser", "assets/laser.mp3");
    this.load.audio("bulletHitOne", "assets/bulletHitOne.mp3");
    this.load.audio("poof", "assets/poof.mp3");
    this.load.audio("ufoSound", "assets/ufoSound.mp3");
    this.load.audio("click", "assets/click.mp3");
    this.load.audio("gameOver", "assets/GameOver.mp3");
    this.load.audio("gameOverTwo", "assets/gameOverTwo.mp3");
    this.load.audio("ufoShootS", "assets/ufoShootS.mp3");
    this.load.audio("invaderShootS", "assets/invaderShootS.mp3");
    this.load.audio("bulletToBulletSound", "assets/bulletToBulletSound.mp3");
    this.load.audio("nota1", "assets/nota1.mp3");
    this.load.audio("nota2", "assets/nota2.mp3");
    this.load.audio("nota3", "assets/nota3.mp3");
    this.load.audio("nota4", "assets/nota4.mp3");
    this.load.audio("pianoFast", "assets/pianoFast.mp3");

    // Background Stars
    this.load.image("backgroundOne", "assets/backgroundOne.png");
    this.load.image("backgroundTwo", "assets/backgroundTwo.png");
    this.load.image("backgroundThree", "assets/backgroundThree.png");
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
    this.state.start("Play");
  }
};

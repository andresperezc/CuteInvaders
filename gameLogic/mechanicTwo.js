Invaders.MechanicTwo = function() {
  this.ufo = null;
  this.invaderBullet = null;
  this.invaderBulletDos = null;
  this.invadersGroup = null;
  this.acceleration = 850;
  this.counter = 0;
  this.frame = 1;
  this.xOriginal = 368;
  this.tween = null;
  this.bulletRed = null;
  this.explosionInvader = null;
  this.halo = null;
  this.spaceship = null;
  this.pixelesAmarillo = null;
  this.haloTwo = null;
  this.shieldHealth = 10;
  this.campoDeFuerzaGroup = null;
  this.lives = null;
  this.livesCounter = 4;
  this.gameOverS = null;
  this.gameOverTwoS = null;
  this.scoreText = null;
  this.scoreString = " Score: ";
  this.scoreNumber = 0;
  this.tweenedPoints = 0;
  this.bulletToBulletSound = null;
  this.counterNotas = 0;
  this.nota1 = null;
  this.nota2 = null;
  this.nota3 = null;
  this.nota4 = null;
  this.pianoFast = null;
  this.triggerNote = null;

  //bmd Shield
  this.bmdGroup = null;
  this.bmd = null;
  this.pixelBmd = null;

  this.flama = null;
  this.invaderShootS = null;
  this.bulletHitOneS = null;
  this.firingTimer = 0;

  //MODAL
  this.modal = null;
  //GameOver
  this.gameOverWooble = null;
  this.youWinWooble = null;
  this.buttonReplay = null;
  this.buttonNextChapter = null;
  this.buttonMenu = null;
  this.clickS = null;

  //YouWin
  this.youWinS = null;

  //buttonMenuS
  this.buttonMenuS = null;
  this.backgroundOne = null;
  this.backgroundTwo = null;
  this.backgroundThree = null;
  this.campoVerde1 = null;
  this.campoBlancoNoPhysics1 = null;
  this.campoBlancoNoPhysics2 = null;
  this.campoVerde2 = null;
  this.campoBlancoNoPhysics3 = null;
  this.campoVerde3 = null;
  this.campoBlancoNoPhysics4 = null;
  this.campoVerde4 = null;
  this.campoBlancoNoPhysics5 = null;
  this.campoVerde5 = null;
  this.campoBlancoNoPhysics6 = null;
  this.campoVerde6 = null;
  this.campoBlancoNoPhysics7 = null;
  this.campoVerde7 = null;
  this.campoBlancoNoPhysics8 = null;
  this.campoVerde8 = null;
  this.campoBlancoNoPhysics9 = null;
  this.campoVerde9 = null;
  this.campoBlancoNoPhysics10 = null;
  this.campoVerde10 = null;
  this.campoBlancoNoPhysics11 = null;
  this.campoVerde11 = null;
  this.campoBlancoNoPhysics12 = null;
  this.campoVerde12 = null;
};
Invaders.MechanicTwo.prototype = {
  create: function() {
    this.world.setBounds(0, 0, 1024, 672);
    this.stage.backgroundColor = "#000427";
    this.backgroundOne = this.add.tileSprite(0, 0, 1024, 672, "backgroundOne");
    this.backgroundOne.autoScroll(0, 30);
    this.backgroundTwo = this.add.tileSprite(0, 0, 1024, 672, "backgroundTwo");
    this.backgroundTwo.autoScroll(0, 60);
    this.backgroundThree = this.add.tileSprite(
      0,
      0,
      1024,
      672,
      "backgroundThree"
    );
    this.backgroundThree.autoScroll(0, 50);
    this.ufo = this.make.sprite(-100, 50, "ufoRubi");
    this.ufo.anchor.setTo(0.5, 0.5);

    this.invaderBullet = this.add.weapon(50, "bulletInvader");
    this.invaderBullet.addBulletAnimation("bulletA", [0, 1, 2, 3], 10, true);
    this.invaderBullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.invaderBullet.bulletSpeed = 350;
    this.invaderBullet.bulletAngleOffset = 270;

    this.invaderBulletDos = this.add.weapon(50, "bullet");
    this.invaderBulletDos.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.invaderBulletDos.bulletSpeed = 900;
    this.invaderBulletDos.fireRate = 200;

    // Invaders
    this.invadersGroup = this.add.group();
    this.invadersGroup.enableBody = true;
    this.invadersGroup.physicsBodyType = Phaser.Physics.ARCADE;

    // Ufo Shield
    this.campoDeFuerzaGroup = this.add.group();
    this.campoDeFuerzaGroup.enableBody = true;
    this.campoDeFuerzaGroup.physicsBodyType = Phaser.Physics.ARCADE;

    this.createInvaders();
    this.nextLine();
    this.createCampoDeFuerza();

    // WEAPONS
    this.bulletRed = this.add.weapon(30, "bulletHero");
    this.bulletRed.addBulletAnimation("bulletA", [0, 1, 2], 10, true);
    this.bulletRed.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.bulletRed.fireRate = 80;
    this.bulletRed.bulletSpeed = 1200;
    this.bulletRed.bulletAngleVariance = 1;
    this.bulletRed.bulletAngleOffset = 90;

    // Explosion PooL 1
    this.explosionInvader = this.add.group();
    this.explosionInvader.createMultiple(70, "explodeInvaders");
    this.explosionInvader.forEach(Invaders.items.explosionAnimation, this);

    this.halo = this.add.group();
    this.halo.createMultiple(70, "halo");
    this.halo.forEach(Invaders.items.haloAnimation, this);

    this.spaceship = this.add.sprite(this.world.centerX, 580, "hero");
    this.spaceship.anchor.setTo(0.5, 0.5);
    this.physics.enable(this.spaceship, Phaser.Physics.ARCADE);
    this.spaceship.body.collideWorldBounds = true;

    this.flama = this.make.sprite(-19, 20, "flamaRubi");
    this.flama.animations.add("idle", [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    this.flama.animations.play("idle");
    this.spaceship.addChild(this.flama);

    this.campoVerde1 = this.add.group();
    this.campoVerde1.enableBody = true;
    this.pixeles1();

    this.campoVerde2 = this.add.group();
    this.campoVerde2.enableBody = true;
    this.pixeles2();

    this.campoVerde3 = this.add.group();
    this.campoVerde3.enableBody = true;
    this.pixeles3();

    this.campoVerde4 = this.add.group();
    this.campoVerde4.enableBody = true;
    this.pixeles4();

    this.campoVerde5 = this.add.group();
    this.campoVerde5.enableBody = true;
    this.pixeles5();

    this.campoVerde6 = this.add.group();
    this.campoVerde6.enableBody = true;
    this.pixeles6();

    this.campoVerde7 = this.add.group();
    this.campoVerde7.enableBody = true;
    this.pixeles7();

    this.campoVerde8 = this.add.group();
    this.campoVerde8.enableBody = true;
    this.pixeles8();

    this.campoVerde9 = this.add.group();
    this.campoVerde9.enableBody = true;
    this.pixeles9();

    this.campoVerde10 = this.add.group();
    this.campoVerde10.enableBody = true;
    this.pixeles10();

    this.campoVerde11 = this.add.group();
    this.campoVerde11.enableBody = true;
    this.pixeles11();

    this.campoVerde12 = this.add.group();
    this.campoVerde12.enableBody = true;
    this.pixeles12();

    this.campoBlancoNoPhysics1 = this.add.group();
    this.bitMapDataShieldNoPhysics1();

    this.campoBlancoNoPhysics2 = this.add.group();
    this.bitMapDataShieldNoPhysics2();

    this.campoBlancoNoPhysics3 = this.add.group();
    this.bitMapDataShieldNoPhysics3();

    this.campoBlancoNoPhysics4 = this.add.group();
    this.bitMapDataShieldNoPhysics4();

    this.campoBlancoNoPhysics5 = this.add.group();
    this.bitMapDataShieldNoPhysics5();

    this.campoBlancoNoPhysics6 = this.add.group();
    this.bitMapDataShieldNoPhysics6();

    this.campoBlancoNoPhysics7 = this.add.group();
    this.bitMapDataShieldNoPhysics7();

    this.campoBlancoNoPhysics8 = this.add.group();
    this.bitMapDataShieldNoPhysics8();

    this.campoBlancoNoPhysics9 = this.add.group();
    this.bitMapDataShieldNoPhysics9();

    this.campoBlancoNoPhysics10 = this.add.group();
    this.bitMapDataShieldNoPhysics10();

    this.campoBlancoNoPhysics11 = this.add.group();
    this.bitMapDataShieldNoPhysics11();

    this.campoBlancoNoPhysics12 = this.add.group();
    this.bitMapDataShieldNoPhysics12();

    this.haloTwo = this.add.group();
    this.haloTwo.createMultiple(70, "haloTwo");
    this.haloTwo.forEach(Invaders.items.haloAnimationTwo, this);

    this.cursor = this.input.keyboard.createCursorKeys();

    //  Lives
    this.lives = this.add.group();

    for (var i = 0; i < 3; i++) {
      var ship = this.lives.create(this.world.width - 100 + 30 * i, 30, "hero");
      ship.anchor.setTo(0.5, 0.5);
      ship.scale.setTo(0.4, 0.4);
      ship.alpha = 0.7;
    }

    // Modal
    this.modal = this.make.image(503, -302, "modal");
    this.modal.anchor.setTo(0.5, 0.5);
    this.buttonReplay = this.make.button(
      382,
      -436.5,
      "buttonReplay",
      this.replayGame,
      this,
      1,
      0,
      2
    );
    this.buttonReplay.anchor.setTo(0.5, 0.5);
    this.buttonNextChapter = this.make.button(
      512,
      -384.5,
      "buttonNextChapter",
      this.nextChapter,
      this,
      1,
      0,
      2
    );
    this.buttonNextChapter.anchor.setTo(0.5, 0.5);
    this.buttonMenu = this.make.button(
      638,
      -436.5,
      "buttonMenu",
      this.menu,
      this,
      1,
      0,
      2
    );
    this.buttonMenu.anchor.setTo(0.5, 0.5);
    this.clickS = this.add.audio("click");
    this.clickS.volume = 1;

    // YouWin
    this.youWinWooble = this.make.image(500, -161, "youWin");
    this.youWinWooble.anchor.setTo(0.5, 0.5);
    this.youWinS = this.add.audio("youWin");
    this.buttonMenuS = this.add.button(
      20,
      23,
      "buttonMenuS",
      this.menu,
      this,
      1,
      0,
      2
    );

    this.gameOverWooble = this.make.image(512, -164, "gameOver");
    this.gameOverWooble.anchor.setTo(0.5, 0.5);
    this.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN
    ]);

    // Audio
    this.laserS = this.add.audio("laser");
    this.laserS.volume = 0.07;
    this.bulletRed.onFire.add(function() {
      this.laserS.play();
    }, this);
    this.laserS.allowMultiple = true;

    this.bulletHitOneS = this.add.audio("bulletHitOne");
    this.bulletHitOneS.volume = 0.2;
    this.bulletHitOneS.allowMultiple = true;

    this.bulletHitTwoS = this.add.audio("bulletHitTwo");
    this.bulletHitTwoS.volume = 0.3;
    this.bulletHitTwoS.allowMultiple = true;

    this.poofS = this.add.audio("poof");
    this.poofS.volume = 0.7;
    this.poofS.allowMultiple = true;

    this.ufoS = this.add.audio("ufoSound");
    this.ufoS.volume = 0.2;

    this.gameOverS = this.add.audio("gameOver");
    this.gameOverTwoS = this.add.audio("gameOverTwo");

    this.invaderShootS = this.add.audio("invaderShootS");
    this.invaderShootS.volume = 0.2;

    this.bulletToBulletSound = this.add.audio("bulletToBulletSound");
    this.bulletToBulletSound.volume = 0.2;

    this.nota1 = this.add.audio("nota1");
    this.nota1.volume = 0.3;
    this.nota1.allowMultiple = true;
    this.nota2 = this.add.audio("nota2");
    this.nota2.volume = 0.3;
    this.nota2.allowMultiple = true;
    this.nota3 = this.add.audio("nota3");
    this.nota3.volume = 0.3;
    this.nota3.allowMultiple = true;
    this.nota4 = this.add.audio("nota4");
    this.nota4.volume = 0.3;
    this.nota4.allowMultiple = true;

    this.pianoFast = this.add.audio("pianoFast");
    this.pianoFast.allowMultiple = true;
    this.triggerNote = this.add.audio("nota1");
    this.triggerNote.volume = 0;
    this.triggerNote.allowMultiple = true;
    this.triggerNote.onPlay.add(function() {
      this.pianoFast.play("", 0, 0.6, true);
    }, this);

    // Ufo
    this.time.events.repeat(5000, 1, this.ufoNormal, this);
    this.time.events.repeat(25000, 2, this.ufoNormal, this);

    // Score
    var style = {
      font: "normal 34px KOMIKAX",
      fill: "#df2342",
      stroke: "#ffffff",
      strokeThickness: 3
    };
    this.scoreText = this.add.text(
      50,
      7,
      this.scoreString + this.scoreNumber,
      style
    );
  },
  createInvaders: function() {
    var invader;

    for (var y = 0; y < 6; y++) {
      if (y < 2) {
        for (var x = 0; x < 10; x++) {
          invader = this.invadersGroup.create(x * 60, y * 40, "invaderPink");
          invader.anchor.setTo(0.5, 0.5);
          invader.frame = 0;
          invader.health = 1;
          invader.body.moves = false;
        }
      } else if (y > 1 && y < 4) {
        for (x = 0; x < 10; x++) {
          invader = this.invadersGroup.create(x * 60, y * 40, "invaderBlue");
          invader.anchor.setTo(0.5, 0.5);
          invader.frame = 0;
          invader.health = 1;
          invader.body.moves = false;
        }
      } else if (y > 3) {
        for (x = 0; x < 10; x++) {
          invader = this.invadersGroup.create(x * 60, y * 40, "invaderRubi");
          invader.anchor.setTo(0.5, 0.5);
          invader.frame = 0;
          invader.health = 1;
          invader.body.moves = false;
        }
      }
    }

    this.invadersGroup.x = 400;
    this.invadersGroup.y = 100;
  },
  createCampoDeFuerza: function() {
    for (var i = 0; i < 60; i++) {
      var campo = this.campoDeFuerzaGroup.create(
        this.invadersGroup.children[i].x,
        this.invadersGroup.children[i].y,
        "campoDeFuerza"
      );
      campo.anchor.setTo(0.5, 0.5);
      campo.visible = true;
    }

    this.invadersGroup.add(this.campoDeFuerzaGroup);

    //  Now using the power of callAll we can add the same animation to all the group.
    this.campoDeFuerzaGroup.callAll(
      "animations.add",
      "animations",
      "campoDeFuerza",
      [0, 1, 2, 3],
      10,
      true
    );

    //  And play them
    this.campoDeFuerzaGroup.callAll(
      "animations.play",
      "animations",
      "campoDeFuerza"
    );
  },
  nextLine: function() {
    this.time.events.repeat(this.acceleration, 1, this.nextAcceleration, this);
  },
  nextAcceleration: function() {
    if (this.counter == 10) {
      this.acceleration -= 100;
    } else if (this.counter == 21) {
      this.acceleration -= 100;
    } else if (this.counter == 32) {
      this.acceleration -= 100;
    } else if (this.counter == 43) {
      this.acceleration -= 100;
    } else if (this.counter == 54) {
      this.acceleration -= 50;
    } else if (this.counter == 65) {
      this.acceleration -= 50;
    } else if (this.counter == 76) {
      this.acceleration -= 50;
    } else if (this.counter == 87) {
      this.acceleration -= 50;
    } else if (this.counter == 98) {
      this.acceleration -= 50;
    } else if (this.counter == 109) {
      this.acceleration -= 50;
    } else if (this.counter == 118) {
      this.acceleration -= 50;
    } else if (this.counter == 127) {
      this.acceleration -= 50;
    } else if (this.counter == 136) {
      this.acceleration -= 50;
    }

    //Agregamos un time event y le ponemos la function nextline para que actualize cada vez nuestro valor de aceleration
    this.time.events.add(1, this.nextLine, this);

    if (this.spaceship.alive && this.counter < 264) {
      // Los invaders se van a mover y acelerar cada vez que se reinicie la function
      this.tweenInvaders();
    }
  },
  tweenInvaders: function() {
    if (this.invadersGroup.countLiving() > 0) {
      this.counter++;
    }

    for (var i = 0; i < 60; i++) {
      this.invadersGroup.children[i].frame = this.frame;
    }
    if (this.counter < 11) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 11) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 110 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 11 && this.counter < 22) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 22) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 120 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 22 && this.counter < 33) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 33) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 130 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 33 && this.counter < 44) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 44) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 140 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 44 && this.counter < 55) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;
      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 55) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 150 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      //invader.frame = 0;
      this.frame = 0;
    } else if (this.counter > 55 && this.counter < 66) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;
      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 66) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 160 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 66 && this.counter < 77) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 77) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 170 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 77 && this.counter < 88) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 88) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 180 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 88 && this.counter < 99) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;
      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 99) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 190 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 99 && this.counter < 110) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 110) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 200 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 110 && this.counter < 121) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 121) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 210 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 121 && this.counter < 132) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 132) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 220 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 132 && this.counter < 143) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 143) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 230 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 143 && this.counter < 154) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 154) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 240 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 154 && this.counter < 165) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 165) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 250 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 165 && this.counter < 176) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 176) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 260 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 176 && this.counter < 187) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 187) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 270 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 187 && this.counter < 198) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;
      //invader.frame = frame;
      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 198) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 280 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 198 && this.counter < 209) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 209) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 290 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 209 && this.counter < 220) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 220) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 300 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 220 && this.counter < 231) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 231) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 310 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 231 && this.counter < 242) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 242) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 320 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 50;
      this.frame = 1;
    } else if (this.counter > 242 && this.counter < 253) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal -= 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    } else if (this.counter == 253) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { y: 330 },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 50;
      this.frame = 0;
    } else if (this.counter > 253 && this.counter < 264) {
      this.tween = this.add.tween(this.invadersGroup);
      this.tween.to(
        { x: this.xOriginal },
        50,
        Phaser.Easing.Linear.None,
        false,
        0,
        0,
        false
      );
      this.tween.start();
      this.xOriginal += 32;

      if (this.frame == 1) {
        this.frame--;
      } else {
        this.frame++;
      }
    }

    if (this.counter == 264) {
      this.invadersReachGround();
    }

    if (
      this.invadersGroup.countLiving() > 0 &&
      this.spaceship.alive &&
      this.counter < 130
    ) {
      var arrNotas = [this.nota1, this.nota2, this.nota3, this.nota4];
      arrNotas[this.counterNotas].play();
      this.counterNotas++;

      if (this.counterNotas == 4) {
        this.counterNotas = 0;
      }
    } else if (
      this.invadersGroup.countLiving() > 0 &&
      this.spaceship.alive &&
      this.counter == 130
    ) {
      this.triggerNote.play();
    }
  },
  ufoNormal: function() {
    this.ufo = this.make.sprite(-100, 50, "ufoRubi");
    this.ufo.anchor.setTo(0.5, 0.5);
    this.physics.arcade.enable(this.ufo);
    this.ufo.health = 3;
    this.ufo.animations.add("idle", [0, 1, 2, 3, 4, 5], 10, true);
    this.ufo.animations.play("idle");

    if (
      this.spaceship.alive == true &&
      this.counter < 264 &&
      this.invadersGroup.countLiving() !== 1
    ) {
      this.world.add(this.ufo);
      this.tweenUfo = this.add.tween(this.ufo);
      this.tweenUfo.to(
        { x: 1100 },
        8000,
        Phaser.Easing.Linear.None,
        false,
        100,
        0,
        false
      );
      this.tweenUfo.start();

      this.tweenUfo.onStart.add(function() {
        this.ufoS.play();
      }, this);
      this.tweenUfo.onComplete.add(function() {
        this.ufoS.stop();
      }, this);
      this.tweenUfo.onComplete.add(function() {
        this.ufo.kill();
      }, this);

      //onKilled Signal
      this.ufo.events.onKilled.add(function() {
        this.ufoS.stop();
      }, this);
    }
  },
  enemyFires: function() {
    this.invaderBullet.onFire.add(function() {
      this.invaderShootS.play();
    }, this);
    var naves = [];
    for (var i = 0; i < 60; i++) {
      naves.push(this.invadersGroup.children[i]);
    }

    var navesVivas = [];
    for (i = 0; i < naves.length; i++) {
      // Si los elementos del array zombies están vivos
      if (naves[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        navesVivas.push(naves[i]);
      }
    }
    var navesVivasRandom =
      navesVivas[Math.floor(Math.random() * navesVivas.length)];

    this.invaderBullet.trackSprite(navesVivasRandom, 0, 20, false);

    if (navesVivas.length > 0) {
      this.invaderBullet.fireAngle = 90;
      this.invaderBullet.fire();
    }

    var firingTimerRandom = [400, 600, 800, 1000, 1200, 1400];
    var item =
      firingTimerRandom[Math.floor(Math.random() * firingTimerRandom.length)];
    this.firingTimer = this.time.now + item;
  },
  enemyHitsPlayer: function(player, bullet) {
    if (this.invadersGroup.countLiving() > 1) {
      bullet.kill();
      var live;

      live = this.lives.getFirstAlive();

      if (live) {
        live.kill();
      }

      var explosionInvadersPrivate = this.explosionInvader.getFirstExists(
        false
      );
      explosionInvadersPrivate.reset(bullet.body.x, bullet.body.y + 20);
      explosionInvadersPrivate.play("explodeInvaders", 30, false, true);
      this.poofS.play();

      // When the player dies
      this.livesCounter--;

      if (this.livesCounter == 0) {
        player.kill();
        this.playerDies();
      }
    }
  },
  playerHitsInvaders: function(enemy, bullet) {
    bullet.kill();
    enemy.damage(1);

    var explosionInvadersPrivate = this.explosionInvader.getFirstExists(false);
    explosionInvadersPrivate.reset(enemy.body.x + 20, enemy.body.y);
    explosionInvadersPrivate.play("explodeInvaders", 30, false, true);
    this.poofS.play();
    this.scoreNumber += 50;
    this.scoreText.text = this.scoreString + this.scoreNumber;
    this.tweenedPoints = this.scoreNumber;

    if (this.invadersGroup.countLiving() == 1 && this.spaceship.alive) {
      enemy.damage(0);
      this.youWin();
    }
  },
  campoDeFuerzaBulletCollision: function(campo, bullet) {
    campo.kill();
    bullet.kill();
    var haloAnimPrivate = this.halo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x + 10, bullet.body.y);
    haloAnimPrivate.play("halo", 30, false, true);
    this.bulletHitOneS.play();
  },
  playerHitsUfo: function(enemy, bullet) {
    bullet.kill();
    enemy.damage(1);

    if (enemy.alive == true) {
      var haloAnimPrivate = this.halo.getFirstExists(false);
      haloAnimPrivate.reset(bullet.body.x, bullet.body.y);
      haloAnimPrivate.play("halo", 30, false, true);
      this.bulletHitOneS.play();
    }

    if (enemy.alive == false) {
      var explosionInvadersPrivate = this.explosionInvader.getFirstExists(
        false
      );
      explosionInvadersPrivate.reset(enemy.body.x + 20, enemy.body.y);
      explosionInvadersPrivate.play("explodeInvaders", 30, false, true);
      this.poofS.play();
      this.scoreNumber += 300;
      this.scoreText.text = this.scoreString + this.scoreNumber;

      var pointsAdded = this.add.text(
        enemy.body.x + 15,
        enemy.body.y + 15,
        " +300",
        {
          font: "38px KOMIKAX",
          fill: "#df2342",
          stroke: "#ffffff",
          strokeThickness: 5
        }
      );
      pointsAdded.anchor.set(0.5, 0.5);

      var tweenA = this.add.tween(pointsAdded);
      tweenA.to(
        {
          y: enemy.body.y - 10,
          alpha: 0
        },
        1500,
        Phaser.Easing.Linear.None,
        false
      );
      tweenA.start();
    }
  },
  bulletToBulletCollision: function(bulletOne, bulletTwo) {
    bulletOne.kill();
    bulletTwo.kill();
    this.bulletToBulletSound.play();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bulletTwo.body.x - 20, bulletTwo.body.y + 10);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  playerDies: function() {
    var invader;

    for (var i = 0; i < 60; i++) {
      invader = this.invadersGroup.children[i];
      invader.animations.add("win", [0, 1], 5, true);
      invader.animations.play("win");
    }

    this.ufoS.stop();
    this.gameOverS.play();
    this.gameOverTwoS.play();
    this.gameOverLogic();
  },
  invadersReachGround: function() {
    var invader;

    for (var i = 0; i < 60; i++) {
      invader = this.invadersGroup.children[i];
      invader.animations.add("win", [0, 1], 5, true);
      invader.animations.play("win");
    }

    this.ufoS.stop();
    this.gameOverS.play();
    this.gameOverTwoS.play();
    this.gameOverLogic();
  },
  gameOverLogic: function() {
    this.world.add(this.modal);
    this.world.add(this.gameOverWooble);
    this.world.add(this.buttonReplay);
    this.world.add(this.buttonMenu);

    var wooble = this.add.tween(this.gameOverWooble.scale);
    wooble.to(
      {
        x: 1.05
      },
      500,
      Phaser.Easing.Sinusoidal.InOut,
      false,
      0,
      -1,
      true
    );
    wooble.start();

    var youLose = this.add.tween(this.gameOverWooble);
    youLose.to(
      {
        x: [512, 512],
        y: [0, 164]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    youLose.start();

    var modalMoving = this.add.tween(this.modal);
    modalMoving.to(
      {
        x: [503, 503],
        y: [0, 302]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    modalMoving.start();

    var buttonReplayMoving = this.add.tween(this.buttonReplay);
    buttonReplayMoving.to(
      {
        x: [382, 382],
        y: [0, 436.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonReplayMoving.start();

    var buttonNextChapterMoving = this.add.tween(this.buttonNextChapter);
    buttonNextChapterMoving.to(
      {
        x: [512, 512],
        y: [0, 384.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonNextChapterMoving.start();

    var buttonMenuMoving = this.add.tween(this.buttonMenu);
    buttonMenuMoving.to(
      {
        x: [638, 638],
        y: [0, 436.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonMenuMoving.start();
    this.pianoFast.stop();
  },
  youWin: function() {
    this.world.add(this.modal);
    this.world.add(this.youWinWooble);
    this.world.add(this.buttonReplay);
    this.world.add(this.buttonNextChapter);
    this.world.add(this.buttonMenu);

    Invaders.youWin2 = true;

    var wooble = this.add.tween(this.youWinWooble.scale);
    wooble.to(
      {
        x: 1.05
      },
      500,
      Phaser.Easing.Sinusoidal.InOut,
      false,
      0,
      -1,
      true
    );
    wooble.start();

    var youWin = this.add.tween(this.youWinWooble);
    youWin.to(
      {
        x: [500, 500],
        y: [0, 161]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    youWin.start();

    var modalMoving = this.add.tween(this.modal);
    modalMoving.to(
      {
        x: [503, 503],
        y: [0, 302]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    modalMoving.start();

    var buttonReplayMoving = this.add.tween(this.buttonReplay);
    buttonReplayMoving.to(
      {
        x: [382, 382],
        y: [0, 436.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonReplayMoving.start();

    var buttonNextChapterMoving = this.add.tween(this.buttonNextChapter);
    buttonNextChapterMoving.to(
      {
        x: [512, 512],
        y: [0, 384.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonNextChapterMoving.start();

    var buttonMenuMoving = this.add.tween(this.buttonMenu);
    buttonMenuMoving.to(
      {
        x: [638, 638],
        y: [0, 436.5]
      },
      2000,
      Phaser.Easing.Elastic.Out,
      false,
      50,
      0,
      false
    );
    buttonMenuMoving.start();

    this.ufoS.stop();
    this.pianoFast.stop();
    this.youWinS.play();
  },
  replayGame: function() {
    this.clickS.play();
    this.state.restart(true, false);
  },
  nextChapter: function() {
    this.state.start("MechanicThree");
    this.clickS.play();
  },
  menu: function() {
    this.ufoS.stop();
    this.pianoFast.stop();
    this.state.start("MechanicsMenu");
    this.clickS.play();
  },
  // Horizontal 1
  overlapCollision1: function() {
    var pixeles = [];
    for (var i = 0; i < 196; i++) {
      pixeles.push(this.campoBlancoNoPhysics1.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 196; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];

    while (arr24.length < 14) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 14; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles1: function() {
    var playerbmd = this.add.bitmapData(83, 5);
    playerbmd.ctx.rect(0, 0, 83, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 160;
    var pixel = this.campoVerde1.create(x, 460, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics1: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 482;
    var updateX = 160;
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 28; j++) {
        var pixelA = this.campoBlancoNoPhysics1.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );

        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision1: function(shield, bullet) {
    this.overlapCollision1();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Verticales 1
  overlapCollision2: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics2.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles2: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 160;
    var pixel = this.campoVerde2.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics2: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 160;
        var pixelA = this.campoBlancoNoPhysics2.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision2: function(shield, bullet) {
    this.overlapCollision2();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  overlapCollision3: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics3.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles3: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 226;
    var pixel = this.campoVerde3.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics3: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530;

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 226;
        var pixelA = this.campoBlancoNoPhysics3.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision3: function(shield, bullet) {
    this.overlapCollision3();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Horizontal 2
  overlapCollision4: function() {
    var pixeles = [];
    for (var i = 0; i < 196; i++) {
      pixeles.push(this.campoBlancoNoPhysics4.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 196; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 14) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 14; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles4: function() {
    var playerbmd = this.add.bitmapData(83, 5);
    playerbmd.ctx.rect(0, 0, 83, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 360;
    var pixel = this.campoVerde4.create(x, 460, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics4: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 482;
    var updateX = 360;
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 28; j++) {
        var pixelA = this.campoBlancoNoPhysics4.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision4: function(shield, bullet) {
    this.overlapCollision4();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Verticales 2
  overlapCollision5: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics5.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles5: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 360;
    var pixel = this.campoVerde5.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics5: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 360;
        var pixelA = this.campoBlancoNoPhysics5.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        pixelA.health = 2;
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision5: function(shield, bullet) {
    this.overlapCollision5();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  overlapCollision6: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics6.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles6: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 426;
    var pixel = this.campoVerde6.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics6: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 426;
        var pixelA = this.campoBlancoNoPhysics6.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        pixelA.health = 2;
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision6: function(shield, bullet) {
    this.overlapCollision6();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Horizontal 3
  overlapCollision7: function() {
    var pixeles = [];
    for (var i = 0; i < 196; i++) {
      pixeles.push(this.campoBlancoNoPhysics7.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 196; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 14) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 14; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles7: function() {
    var playerbmd = this.add.bitmapData(83, 5);
    playerbmd.ctx.rect(0, 0, 83, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 560;
    var pixel = this.campoVerde7.create(x, 460, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics7: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 482;
    var updateX = 560;
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 28; j++) {
        var pixelA = this.campoBlancoNoPhysics7.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision7: function(shield, bullet) {
    this.overlapCollision7();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Verticales 3
  overlapCollision8: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics8.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles8: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 560;
    var pixel = this.campoVerde8.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics8: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 560;
        var pixelA = this.campoBlancoNoPhysics8.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision8: function(shield, bullet) {
    this.overlapCollision8();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  overlapCollision9: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics9.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles9: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 626;
    var pixel = this.campoVerde9.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics9: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 626;
        var pixelA = this.campoBlancoNoPhysics9.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision9: function(shield, bullet) {
    this.overlapCollision9();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Horizontal 4
  overlapCollision10: function() {
    var pixeles = [];
    for (var i = 0; i < 196; i++) {
      pixeles.push(this.campoBlancoNoPhysics10.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 196; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 14) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 14; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles10: function() {
    var playerbmd = this.add.bitmapData(83, 5);
    playerbmd.ctx.rect(0, 0, 83, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 760;
    var pixel = this.campoVerde10.create(x, 460, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics10: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 482;
    var updateX = 760;
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 28; j++) {
        var pixelA = this.campoBlancoNoPhysics10.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision10: function(shield, bullet) {
    this.overlapCollision10();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  // Verticales 4
  overlapCollision11: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics11.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles11: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 760;
    var pixel = this.campoVerde11.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics11: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 760;
        var pixelA = this.campoBlancoNoPhysics11.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision11: function(shield, bullet) {
    this.overlapCollision11();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  overlapCollision12: function() {
    var pixeles = [];
    for (var i = 0; i < 96; i++) {
      pixeles.push(this.campoBlancoNoPhysics12.children[i]);
    }

    var pixelesVivos = [];
    for (i = 0; i < 96; i++) {
      // Si los elementos del array zombies están vivos
      if (pixeles[i].alive) {
        // Si están vivos los zombies los metemos al array zombiesAlive []
        pixelesVivos.push(pixeles[i]);
      }
    }

    var arr24 = [];
    while (arr24.length < 12) {
      var randomnumber2 = Math.floor(Math.random() * pixelesVivos.length);
      var found2 = false;
      for (var i2 = 0; i2 < arr24.length; i2++) {
        if (arr24[i2] == randomnumber2) {
          found2 = true;
          break;
        }
      }
      if (!found2) arr24[arr24.length] = randomnumber2;
    }

    for (i = 0; i < 12; i++) {
      if (pixelesVivos.length > 0) {
        pixelesVivos[arr24[i]].kill();
      }
    }
  },
  pixeles12: function() {
    var playerbmd = this.add.bitmapData(18, 5);
    playerbmd.ctx.rect(0, 0, 18, 5);
    playerbmd.ctx.fillStyle = "#0f0";
    playerbmd.ctx.fill();

    var x = 826;
    var pixel = this.campoVerde12.create(x, 500, playerbmd);
    pixel.alpha = 0;
  },
  bitMapDataShieldNoPhysics12: function() {
    var platformbmd = this.add.bitmapData(3, 3);
    platformbmd.ctx.rect(0, 0, 3, 3);
    platformbmd.ctx.fillStyle = "#fff";
    platformbmd.ctx.fill();

    var masIgualCinco = 0;
    var updateY = 530; //+30

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 6; j++) {
        var updateX = 826;
        var pixelA = this.campoBlancoNoPhysics12.create(
          updateX + masIgualCinco,
          updateY,
          platformbmd
        );
        // UNO para un pixel, 5 para cinco pixeles, etc.
        masIgualCinco += 3;
      }
      masIgualCinco = 0;
      updateY -= 3;
    }
  },
  pixelVerdeCollision12: function(shield, bullet) {
    this.overlapCollision12();
    bullet.kill();

    var haloAnimPrivate = this.haloTwo.getFirstExists(false);
    haloAnimPrivate.reset(bullet.body.x - 20, bullet.body.y + 40);
    haloAnimPrivate.play("haloTwo", 30, false, true);
  },
  update: function() {
    // Campo 1

    if (this.campoBlancoNoPhysics1.countLiving() === 0) {
      this.campoVerde1.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    if (this.campoBlancoNoPhysics2.countLiving() === 0) {
      this.campoVerde2.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    if (this.campoBlancoNoPhysics3.countLiving() === 0) {
      this.campoVerde3.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    // Campo 2
    if (this.campoBlancoNoPhysics4.countLiving() === 0) {
      this.campoVerde4.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics5.countLiving() === 0) {
      this.campoVerde5.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics6.countLiving() === 0) {
      this.campoVerde6.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    // Campo 3
    if (this.campoBlancoNoPhysics7.countLiving() === 0) {
      this.campoVerde7.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics8.countLiving() === 0) {
      this.campoVerde8.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics9.countLiving() === 0) {
      this.campoVerde9.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    // Campo 4
    if (this.campoBlancoNoPhysics10.countLiving() === 0) {
      this.campoVerde10.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics11.countLiving() === 0) {
      this.campoVerde11.forEachAlive(function(c) {
        c.kill();
      }, this);
    }
    if (this.campoBlancoNoPhysics12.countLiving() === 0) {
      this.campoVerde12.forEachAlive(function(c) {
        c.kill();
      }, this);
    }

    // Hero Shield Collision
    this.physics.arcade.overlap(
      this.campoVerde1,
      this.bulletRed.bullets,
      this.pixelVerdeCollision1,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde2,
      this.bulletRed.bullets,
      this.pixelVerdeCollision2,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde3,
      this.bulletRed.bullets,
      this.pixelVerdeCollision3,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde4,
      this.bulletRed.bullets,
      this.pixelVerdeCollision4,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde5,
      this.bulletRed.bullets,
      this.pixelVerdeCollision5,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde6,
      this.bulletRed.bullets,
      this.pixelVerdeCollision6,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde7,
      this.bulletRed.bullets,
      this.pixelVerdeCollision7,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde8,
      this.bulletRed.bullets,
      this.pixelVerdeCollision8,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde9,
      this.bulletRed.bullets,
      this.pixelVerdeCollision9,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde10,
      this.bulletRed.bullets,
      this.pixelVerdeCollision10,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde11,
      this.bulletRed.bullets,
      this.pixelVerdeCollision11,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde12,
      this.bulletRed.bullets,
      this.pixelVerdeCollision12,
      null,
      this
    );

    // Invaders Shield Collision
    this.physics.arcade.overlap(
      this.campoVerde1,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision1,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde2,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision2,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde3,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision3,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde4,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision4,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde5,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision5,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde6,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision6,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde7,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision7,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde8,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision8,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde9,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision9,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoVerde10,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision10,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde11,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision11,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.campoVerde12,
      this.invaderBullet.bullets,
      this.pixelVerdeCollision12,
      null,
      this
    );

    // Bullet to Bullet Collision
    this.physics.arcade.overlap(
      this.bulletRed.bullets,
      this.invaderBullet.bullets,
      this.bulletToBulletCollision,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.bulletRed.bullets,
      this.invaderBulletDos.bullets,
      this.bulletToBulletCollision,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.campoDeFuerzaGroup,
      this.bulletRed.bullets,
      this.campoDeFuerzaBulletCollision,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.invadersGroup,
      this.bulletRed.bullets,
      this.playerHitsInvaders,
      null,
      this
    );

    this.physics.arcade.overlap(
      this.ufo,
      this.bulletRed.bullets,
      this.playerHitsUfo,
      null,
      this
    );

    // Invader and UFO hits Player
    this.physics.arcade.overlap(
      this.spaceship,
      this.invaderBullet.bullets,
      this.enemyHitsPlayer,
      null,
      this
    );
    this.physics.arcade.overlap(
      this.spaceship,
      this.invaderBulletDos.bullets,
      this.enemyHitsPlayer,
      null,
      this
    );

    var shootButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.bulletRed.trackSprite(this.spaceship, 0, 0, false);

    if (
      this.time.now > this.firingTimer &&
      this.spaceship.alive &&
      this.counter < 264
    ) {
      this.enemyFires();
    }

    if (
      (shootButton.isDown &&
        this.spaceship.alive &&
        this.counter < 264 &&
        this.invadersGroup.countLiving() !== 0) ||
      (this.game.input.activePointer.isDown &&
        this.game.input.activePointer.x >
          this.game.width / 2 + this.game.width / 4) ||
      (this.game.input.activePointer.isDown &&
        this.game.input.activePointer.x < this.game.width / 4)
    ) {
      this.bulletRed.fire();
    }

    // Move Right Spaceship
    if (
      (this.cursor.right.isDown && this.cursor.left.isUp) ||
      (this.game.input.activePointer.isDown &&
        this.game.input.activePointer.x >
          this.game.width / 2 + this.game.width / 4)
    ) {
      this.spaceship.body.velocity.x = 270;
    } else if (
      (this.cursor.left.isDown && this.cursor.right.isUp) ||
      (this.game.input.activePointer.isDown &&
        this.game.input.activePointer.x < this.game.width / 4)
    ) {
      this.spaceship.body.velocity.x = -270;
    } else {
      this.spaceship.body.velocity.x = 0;
    }
  },

  shutdown: function() {
    this.ufoS.stop();
    this.youWinS.stop();
    this.counter = 0;
    this.shieldHealth = 10;
    this.scoreNumber = 0;
    this.livesCounter = 4;
    this.xOriginal = 368;
    this.acceleration = 850;
    this.frame = 1;
    this.firingTimer = 0;
    this.tweenedPoints = 0;
    this.game.time.reset();
    this.counterNotas = 0;
    this.nota1 = null;
    this.nota2 = null;
    this.nota3 = null;
    this.nota4 = null;
    this.pianoFast = null;
    this.triggerNote = null;
  }
};

Invaders.items = {
  explosionAnimation: function(explosionInvadersOne) {
    explosionInvadersOne.anchor.x = 0.5;
    explosionInvadersOne.anchor.y = 0.5;
    explosionInvadersOne.animations.add("explodeInvaders");
  },

  haloAnimation: function(allHaloAnimations) {
    allHaloAnimations.anchor.x = 0.5;
    allHaloAnimations.animations.add("halo");
  },

  haloAnimationTwo: function(allHaloAnimationsTwo) {
    allHaloAnimationsTwo.anchor.y = 0.5;
    allHaloAnimationsTwo.animations.add("haloTwo");
  }
};
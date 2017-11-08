var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = (function (_super) {
        __extends(Personaje, _super);
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 200;
            _this.width = 100;
            _this.getGame().physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(20, 36.5, 5, 16);
            _this.animations.add('left', [9, 10, 11, 12, 13, 14], 10, true);
            _this.animations.add('turn', [4], 20, true);
            _this.animations.add('right', [1, 2, 3, 4, 5, 6], 10, true);
            _this.setFacing('left');
            _this.setPuntos(0);
            _this.setVida(5);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.setGame = function (value) {
            this.game = value;
        };
        Personaje.prototype.getGame = function () {
            return this.game;
        };
        Personaje.prototype.setVida = function (value) {
            this.vida = value;
        };
        Personaje.prototype.getVida = function () {
            return this.vida;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setFacing = function (facing) {
            this.facing = facing;
        };
        Personaje.prototype.getFacing = function () {
            return this.facing;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Fruta = (function (_super) {
        __extends(Fruta, _super);
        function Fruta(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            var emitter = game.add.emitter(game.world.centerX, 5, 5);
            _this.setEmitter(emitter);
            _this.getEmitter().width = game.world.width - 20;
            _this.getEmitter().setYSpeed(100, 200);
            _this.getEmitter().setXSpeed(-1, 1);
            _this.getEmitter().start(false, 3000, 1, 0);
            game.add.existing(_this);
            return _this;
        }
        Fruta.prototype.setEmitter = function (value) {
            this.emitter = value;
        };
        Fruta.prototype.getEmitter = function () {
            return this.emitter;
        };
        return Fruta;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Fruta = Fruta;
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Fruta.ts" />
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = (function () {
        function Costanera(ancho, alto) {
            // create our phaser game
            // 800 - width
            // 600 - height
            // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
            // 'content' - the name of the container to add our game to
            // { preload:this.preload, create:this.create} - functions to call for our states
            this.setGame(new Phaser.Game(ancho - 20, alto - 20, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                setGame: this.setGame,
                getGame: this.getGame,
                setAncho: this.setAncho,
                getAncho: this.getAncho,
                setAlto: this.setAlto,
                getAlto: this.getAlto,
                setPersonaje: this.setPersonaje,
                getPersonaje: this.getPersonaje,
                setFruta: this.setFruta,
                getFruta: this.getFruta,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                collisionPerFrut: this.collisionPerFrut,
                collisionSuelFrut: this.collisionSuelFrut,
                moreDificult: this.moreDificult,
                personajeDie: this.personajeDie,
                getSuelo: this.getSuelo,
                setSuelo: this.setSuelo,
                getVidaTexto: this.getVidaTexto,
                setVidaTexto: this.setVidaTexto,
                getPuntosTexto: this.getPuntosTexto,
                setPuntosTexto: this.setPuntosTexto,
                getGameOver: this.getGameOver,
                setGameOver: this.setGameOver,
                getFrutaCantidad: this.getFrutaCantidad,
                setFrutaCantidad: this.setFrutaCantidad,
                getFrutaDificultad: this.getFrutaDificultad,
                setFrutaDificultad: this.setFrutaDificultad,
                setDash: this.setDash,
                getDash: this.getDash,
                setRight: this.setRight,
                getRight: this.getRight,
                setLeft: this.setLeft,
                getLeft: this.getLeft,
                listenerJump: this.listenerJump,
                listenerLeft: this.listenerLeft,
                listenerRight: this.listenerRight,
            }));
        }
        //--------------------setters y getters --------------------------------------
        Costanera.prototype.setLeft = function (value) {
            this.left = value;
        };
        Costanera.prototype.getLeft = function () {
            return this.left;
        };
        Costanera.prototype.setRight = function (value) {
            this.right = value;
        };
        Costanera.prototype.getRight = function () {
            return this.right;
        };
        Costanera.prototype.setDash = function (value) {
            this.dash = value;
        };
        Costanera.prototype.getDash = function () {
            return this.dash;
        };
        Costanera.prototype.setSuelo = function (value) {
            this.suelo = value;
        };
        Costanera.prototype.getSuelo = function () {
            return this.suelo;
        };
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.setVidaTexto = function (value) {
            this.vidaTexto = value;
        };
        Costanera.prototype.getVidaTexto = function () {
            return this.vidaTexto;
        };
        Costanera.prototype.setPuntosTexto = function (value) {
            this.puntosTexto = value;
        };
        Costanera.prototype.getPuntosTexto = function () {
            return this.puntosTexto;
        };
        Costanera.prototype.setGameOver = function (value) {
            this.gameover = value;
        };
        Costanera.prototype.getGameOver = function () {
            return this.gameover;
        };
        Costanera.prototype.setFrutaCantidad = function (value) {
            this.frutaCantidad = value;
        };
        Costanera.prototype.getFrutaCantidad = function () {
            return this.frutaCantidad;
        };
        Costanera.prototype.setFrutaDificultad = function (value) {
            this.frutaDificultad = value;
        };
        Costanera.prototype.getFrutaDificultad = function () {
            return this.frutaDificultad;
        };
        Costanera.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Costanera.prototype.getFruta = function () {
            return this.fruta;
        };
        Costanera.prototype.preload = function () {
            // add our logo image to the assets class under the
            // key 'logo'. We're also setting the background colour
            // so it's the same as the background colour in the image
            //this.getGame().load.image('obstaculo', 'assets/manzana.png');
            this.getGame().load.spritesheet('fruta', 'assets/fruitnveg64wh37.png', 64, 64);
            this.getGame().load.spritesheet('player', 'assets/Personaje.png', 36.5, 48);
            this.getGame().load.image('costanera', "assets/costanera.jpg");
            this.getGame().load.spritesheet('suelo', "assets/suelotile.png", this.getGame().width, 10, 100);
            this.getGame().load.image('gameover', "assets/gameover.png");
            //Botones
            this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png', 64, 64);
            this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png', 96, 64);
            this.getGame().load.spritesheet('buttondash', 'assets/button-round.png', 96, 96);
            //Agregamos un comentario para probar subir cambios a GIT desde el editor
            //hacemos un cambio en el archivo
        };
        Costanera.prototype.create = function () {
            // add the 'logo' sprite to the game, position it in the
            // center of the screen, and set the anchor to the center of
            // the image so it's centered properly. There's a lot of
            // centering in that last sentence
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            //fondo de pantalla
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 30;
            this.getGame().physics.arcade.gravity.y = 250;
            //suelo
            var suelo = new JuegoCostanera.Suelo(this.getGame(), this.getGame().world.centerX, this.getGame().world.centerY, 'suelo');
            this.setSuelo(suelo);
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //Botones
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            //Score text
            var scoreString = 'Puntos : ';
            var scoreText = this.getGame().add.text(this.getGame().world.width / 2, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setPuntosTexto(scoreText);
            //Vida Text
            var liveText = this.getGame().add.text(10, 10, 'Vidas : ' + this.getPersonaje().getVida(), { font: '34px Arial', fill: '#fff' });
            this.setVidaTexto(liveText);
            this.setFrutaDificultad(0);
            // create our virtual game controller buttons 
            //Boton de Dash
            var buttondash = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttondash', null, this, 0, 1, 0, 1); //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
            buttondash.fixedToCamera = true; //our buttons should stay on the same place  
            buttondash.events.onInputOver.add(this.listenerJump, this, 0, true);
            buttondash.events.onInputOut.add(this.listenerJump, this, 0, false);
            buttondash.events.onInputDown.add(this.listenerJump, this, 0, true);
            buttondash.events.onInputUp.add(this.listenerJump, this, 0, false);
            //Boton izquierda
            var buttonleft = this.getGame().add.button(30, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonleft.fixedToCamera = true;
            buttonleft.events.onInputOver.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputOut.add(this.listenerLeft, this, 0, false);
            buttonleft.events.onInputDown.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputUp.add(this.listenerLeft, this, 0, false);
            //Boton derecha
            var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonright.fixedToCamera = true;
            buttonright.events.onInputOver.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputOut.add(this.listenerRight, this, 0, false);
            buttonright.events.onInputDown.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputUp.add(this.listenerRight, this, 0, false);
        };
        Costanera.prototype.update = function () {
            this.getPersonaje().body.velocity.x = 0;
            this.suelo.y = this.getGame().world.y + this.getGame().world.height - 30;
            this.getSuelo().body.gravity = false;
            this.getPersonaje().bringToTop();
            if (this.getCursores().left.isDown || this.getLeft()) {
                this.getPersonaje().body.velocity.x = -500;
                if (this.getPersonaje().getFacing() != 'left') {
                    this.getPersonaje().animations.play('left');
                    this.getPersonaje().setFacing('left');
                }
            }
            else if (this.getCursores().right.isDown || this.getRight()) {
                this.getPersonaje().body.velocity.x = 500;
                if (this.getPersonaje().getFacing() != 'right') {
                    this.getPersonaje().animations.play('right');
                    this.getPersonaje().setFacing('right');
                }
            }
            else {
                if (this.getPersonaje().getFacing() != 'idle') {
                    this.getPersonaje().animations.stop();
                    if (this.getPersonaje().getFacing() == 'left') {
                        this.getPersonaje().frame = 8;
                    }
                    else {
                        this.getPersonaje().frame = 7;
                    }
                    this.getPersonaje().setFacing('idle');
                }
            }
            if ((this.getCursores().left.isDown || this.getLeft()) && (this.getSaltarBtn().isDown || this.getDash())) {
                this.getPersonaje().body.velocity.x = -1500;
                if (this.getPersonaje().getFacing() != 'left') {
                    this.getPersonaje().animations.play('left');
                    this.getPersonaje().setFacing('left');
                }
            }
            else if ((this.getCursores().right.isDown || this.getRight()) && (this.getSaltarBtn().isDown || this.getDash())) {
                this.getPersonaje().body.velocity.x = 1500;
                if (this.getPersonaje().getFacing() != 'right') {
                    this.getPersonaje().animations.play('right');
                    this.getPersonaje().setFacing('right');
                }
            }
            if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse) {
                this.setRight(false);
                this.setLeft(false);
                this.setDash(false);
            }
            //Emitter speed
            if (this.getFrutaDificultad() == 0) {
                //Fruta Emitter
                var fruta = new JuegoCostanera.Fruta(this.getGame(), this.getGame().world.centerX, 5);
                this.setFruta(fruta);
                this.getGame().time.events.repeat(Phaser.Timer.SECOND * 5, 0, this.moreDificult, this);
                this.setFrutaCantidad(1);
                this.setFrutaDificultad(1);
            }
            if (this.getFrutaDificultad() == 1 && this.getPersonaje().getPuntos() == 300) {
                this.setFrutaDificultad(2);
                this.getGame().time.events.repeat(Phaser.Timer.SECOND + 2000, 0, this.moreDificult, this);
            }
            if (this.getFrutaDificultad() == 2 && this.getPersonaje().getPuntos() == 900) {
                this.setFrutaDificultad(3);
                this.getGame().time.events.repeat(Phaser.Timer.SECOND + 2000, 0, this.moreDificult, this);
            }
            //Collisiones
            // this.game.physics.arcade.collide(this.player, platforms);
            this.getGame().physics.arcade.collide(this.getFruta().getEmitter(), this.getPersonaje(), this.collisionPerFrut, null, this);
            this.getGame().physics.arcade.collide(this.getFruta().getEmitter(), this.getSuelo(), this.collisionSuelFrut, null, this);
        };
        Costanera.prototype.moreDificult = function () {
            this.getFruta().getEmitter().makeParticles('fruta', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], this.getFrutaCantidad(), true, false);
        };
        Costanera.prototype.personajeDie = function () {
            this.getPersonaje().exists = false;
        };
        Costanera.prototype.collisionPerFrut = function (objetos, personaje) {
            // this.getGame().stage.backgroundColor = '#992d2d';
            //this.getPersonaje().body.velocity.y = -800;
            personaje.kill();
            if (personaje.kill()) {
                console.log(this.getPersonaje().vida);
            }
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 50);
            this.getPuntosTexto().text = 'Puntos: ' + this.getPersonaje().getPuntos().toString();
        };
        Costanera.prototype.collisionSuelFrut = function (objetos, suelo) {
            suelo.kill();
            this.getPersonaje().setVida(this.getPersonaje().getVida() - 1);
            this.getVidaTexto().text = 'Vidas : ' + this.getPersonaje().getVida().toString();
            if (this.getPersonaje().getVida() == 0) {
                objetos.kill();
                this.getPersonaje().body.collideWorldBounds = false;
                this.getGame().time.events.repeat(Phaser.Timer.SECOND + 2000, 0, this.personajeDie, this);
                //GAMEOVER
                var gameOverText = this.getGame().add.image(this.getGame().world.centerX - 130, this.getGame().world.centerY - 125, 'gameover');
                //Reset text
                var resetText = this.getGame().add.text(this.getGame().world.centerX - 100, this.getGame().world.centerY - 190, "Press F5 to Restart.", { font: '34px Arial', fill: '#fff' });
            }
        };
        Costanera.prototype.listenerJump = function (key, arg, arg2) {
            this.setDash(arg2);
        };
        Costanera.prototype.listenerLeft = function (key, arg, arg2) {
            this.setLeft(arg2);
        };
        Costanera.prototype.listenerRight = function (key, arg, arg2) {
            this.setRight(arg2);
        };
        return Costanera;
    }());
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Suelo = (function (_super) {
        __extends(Suelo, _super);
        function Suelo(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.getGame().physics.enable(_this, Phaser.Physics.ARCADE);
            _this.name = 'suelo';
            _this.x = 0;
            _this.y = _this.getGame().world.y + _this.getGame().world.height - 30;
            _this.width = _this.getGame().width;
            game.add.existing(_this);
            return _this;
        }
        Suelo.prototype.setGame = function (value) {
            this.game = value;
        };
        Suelo.prototype.getGame = function () {
            return this.game;
        };
        return Suelo;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Suelo = Suelo;
})(JuegoCostanera || (JuegoCostanera = {}));

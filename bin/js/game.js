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
var Bonus = /** @class */ (function (_super) {
    __extends(Bonus, _super);
    function Bonus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bonus;
}(Phaser.Sprite));
/// <reference path="../tsDefinitions/phaser.d.ts" />
var Costanera = /** @class */ (function () {
    function Costanera(ancho, alto) {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
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
            setObstaculo: this.setObstaculo,
            getObstaculo: this.getObstaculo,
            setCursores: this.setCursores,
            getCursores: this.getCursores,
            setSaltarBtn: this.setSaltarBtn,
            getSaltarBtn: this.getSaltarBtn,
            getFacing: this.getFacing,
            setFacing: this.setFacing,
            getEmitter: this.getEmitter,
            setEmitter: this.setEmitter,
            collisionPerFrut: this.collisionPerFrut,
            collisionSuelFrut: this.collisionSuelFrut,
            moreDificult: this.moreDificult,
            listener: this.listener,
            getSuelo: this.getSuelo,
            setSuelo: this.setSuelo,
            getVida: this.getVida,
            setVida: this.setVida,
            getVidaTexto: this.getVidaTexto,
            setVidaTexto: this.setVidaTexto,
            getPuntos: this.getPuntos,
            setPuntos: this.setPuntos,
            getPuntosTexto: this.getPuntosTexto,
            setPuntosTexto: this.setPuntosTexto,
            getGameOver: this.getGameOver,
            setGameOver: this.setGameOver,
            getFrutaCantidad: this.getFrutaCantidad,
            setFrutaCantidad: this.setFrutaCantidad,
            getFrutaDificultad: this.getFrutaDificultad,
            setFrutaDificultad: this.setFrutaDificultad,
            getWait: this.getWait,
            setWait: this.setWait,
        }));
    }
    //--------------------setters y getters --------------------------------------
    Costanera.prototype.setWait = function (value) {
        this.wait = value;
    };
    Costanera.prototype.getWait = function () {
        return this.wait;
    };
    Costanera.prototype.setVida = function (value) {
        this.vida = value;
    };
    Costanera.prototype.getVida = function () {
        return this.vida;
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
    Costanera.prototype.setObstaculo = function (value) {
        this.obstaculo = value;
    };
    Costanera.prototype.getObstaculo = function () {
        return this.obstaculo;
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
    Costanera.prototype.setFacing = function (facing) {
        this.facing = facing;
    };
    Costanera.prototype.getFacing = function () {
        return this.facing;
    };
    Costanera.prototype.setEmitter = function (value) {
        this.emitter = value;
    };
    Costanera.prototype.getEmitter = function () {
        return this.emitter;
    };
    Costanera.prototype.setVidaTexto = function (value) {
        this.vidaTexto = value;
    };
    Costanera.prototype.getVidaTexto = function () {
        return this.vidaTexto;
    };
    Costanera.prototype.setPuntos = function (value) {
        this.puntos = value;
    };
    Costanera.prototype.getPuntos = function () {
        return this.puntos;
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
    Costanera.prototype.preload = function () {
        // add our logo image to the assets class under the
        // key 'logo'. We're also setting the background colour
        // so it's the same as the background colour in the image
        //this.getGame().load.image('obstaculo', 'assets/manzana.png');
        this.getGame().load.spritesheet('obstaculo', 'assets/fruitnveg32wh37.png', 32, 32);
        this.getGame().load.spritesheet('player', 'assets/Personaje.png', 36.5, 48);
        this.getGame().load.image('costanera', "assets/costanera.jpg");
        this.getGame().load.spritesheet('suelo', "assets/suelotile.png", this.getGame().width, 10, 100);
        this.getGame().load.image('gameover', "assets/gameover.png");
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
        var suelo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'suelo');
        this.setSuelo(suelo);
        this.getGame().physics.enable(this.getSuelo(), Phaser.Physics.ARCADE);
        suelo.name = 'suelo';
        suelo.x = 0;
        suelo.y = this.getGame().world.y + this.getGame().world.height - 30;
        suelo.width = this.getGame().width;
        //Personaje
        var personaje = this.getGame().add.sprite(100, 200, 'player');
        personaje.height = 200;
        personaje.width = 100;
        this.setPersonaje(personaje);
        this.getGame().physics.enable(this.getPersonaje(), Phaser.Physics.ARCADE);
        this.getPersonaje().body.collideWorldBounds = true;
        this.getPersonaje().body.gravity.y = 500;
        this.getPersonaje().body.setSize(20, 36.5, 5, 16);
        this.getPersonaje().animations.add('left', [9, 10, 11, 12, 13, 14], 10, true);
        this.getPersonaje().animations.add('turn', [4], 20, true);
        this.getPersonaje().animations.add('right', [1, 2, 3, 4, 5, 6], 10, true);
        this.setFacing('left');
        //Botones
        this.setCursores(this.getGame().input.keyboard.createCursorKeys());
        this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
        //Score
        this.setPuntos(0);
        var scoreString = 'Puntos : ';
        var scoreText = this.getGame().add.text(this.getGame().world.width / 2, 10, scoreString + this.getPuntos(), { font: '34px Arial', fill: '#fff' });
        this.setPuntosTexto(scoreText);
        //this.getPuntosTexto().text = this.getPuntos().toString();
        //  Lives
        this.setVida(5);
        //var lives = this.getGame().add.group();
        var liveText = this.getGame().add.text(10, 10, 'Vidas : ' + this.getVida(), { font: '34px Arial', fill: '#fff' });
        this.setVidaTexto(liveText);
        this.setFrutaDificultad(0);
    };
    Costanera.prototype.update = function () {
        // this.game.physics.arcade.collide(this.player, platforms);
        //this.getGame().physics.arcade.collide(this.getObstaculo(), this.getPersonaje(), this.collisionHandler, null, this);
        this.getGame().physics.arcade.collide(this.getEmitter(), this.getPersonaje(), this.collisionPerFrut, null, this);
        this.getGame().physics.arcade.collide(this.getEmitter(), this.getSuelo(), this.collisionSuelFrut, null, this);
        this.getPersonaje().body.velocity.x = 0;
        this.suelo.y = this.getGame().world.y + this.getGame().world.height - 30;
        this.getSuelo().body.gravity = false;
        this.getPersonaje().bringToTop();
        if (this.getCursores().left.isDown) {
            this.getPersonaje().body.velocity.x = -500;
            if (this.getFacing() != 'left') {
                this.getPersonaje().animations.play('left');
                this.setFacing('left');
            }
        }
        else if (this.getCursores().right.isDown) {
            this.getPersonaje().body.velocity.x = 500;
            if (this.getFacing() != 'right') {
                this.getPersonaje().animations.play('right');
                this.setFacing('right');
            }
        }
        else {
            if (this.getFacing() != 'idle') {
                this.getPersonaje().animations.stop();
                if (this.getFacing() == 'left') {
                    this.getPersonaje().frame = 8;
                }
                else {
                    this.getPersonaje().frame = 7;
                }
                this.setFacing('idle');
            }
        }
        if (this.getCursores().left.isDown && this.getSaltarBtn().isDown) {
            this.getPersonaje().body.velocity.x = -1500;
            if (this.getFacing() != 'left') {
                this.getPersonaje().animations.play('left');
                this.setFacing('left');
            }
        }
        else if (this.getCursores().right.isDown && this.getSaltarBtn().isDown) {
            this.getPersonaje().body.velocity.x = 1500;
            if (this.getFacing() != 'right') {
                this.getPersonaje().animations.play('right');
                this.setFacing('right');
            }
        }
        //GAMEOVER
        if (this.getVida() == 0) {
            var gameOverText = this.getGame().add.image(this.getGame().world.centerX - 130, this.getGame().world.centerY - 125, 'gameover');
        }
        //Emitter speed
        if (this.getFrutaDificultad() == 0) {
            //emitter
            var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
            this.setEmitter(emitter);
            this.getEmitter().width = this.getGame().world.width - 10;
            this.setFrutaCantidad(1);
            this.getGame().time.events.repeat(Phaser.Timer.SECOND + 3000, 0, this.moreDificult, this);
            this.getEmitter().setYSpeed(100, 200);
            this.getEmitter().setXSpeed(-1, 1);
            this.getEmitter().start(false, 2000, 1, 0);
            this.setFrutaDificultad(1);
        }
        if (this.getFrutaDificultad() == 1 && this.getPuntos() == 300) {
            this.setFrutaDificultad(2);
            this.getGame().time.events.repeat(Phaser.Timer.SECOND - 500, 0, this.moreDificult, this);
        }
        if (this.getFrutaDificultad() == 2 && this.getPuntos() == 900) {
            this.setFrutaDificultad(3);
            this.getGame().time.events.repeat(Phaser.Timer.SECOND - 500, 0, this.moreDificult, this);
        }
    };
    Costanera.prototype.moreDificult = function () {
        this.getEmitter().makeParticles('obstaculo', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], this.getFrutaCantidad(), true, false);
    };
    Costanera.prototype.collisionPerFrut = function (objetos, personaje) {
        // this.getGame().stage.backgroundColor = '#992d2d';
        //this.getPersonaje().body.velocity.y = -800;
        personaje.kill();
        if (personaje.kill()) {
            console.log(this.vida);
        }
        if (this.getVida() == 2) {
            personaje.kill(personaje);
            console.log(this.getVida());
        }
        this.setPuntos(this.getPuntos() + 50);
        this.getPuntosTexto().text = 'Puntos: ' + this.getPuntos().toString();
    };
    Costanera.prototype.collisionSuelFrut = function (objetos, suelo) {
        suelo.kill();
        this.setVida(this.getVida() - 1);
        this.getVidaTexto().text = 'Vidas : ' + this.getVida().toString();
        if (this.getVida() == 0) {
            objetos.kill();
            this.getPersonaje().body.collideWorldBounds = false;
        }
    };
    Costanera.prototype.listener = function () {
        //this.getPersonaje().revive();
    };
    return Costanera;
}());
// when the page has finished loading, create our game
window.onload = function () {
    var game = new Costanera(window.innerWidth, window.innerHeight);
};
var Fruta = /** @class */ (function (_super) {
    __extends(Fruta, _super);
    function Fruta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fruta;
}(Bonus));
/// <reference path="../tsDefinitions/phaser.d.ts" />
var Personaje = /** @class */ (function (_super) {
    __extends(Personaje, _super);
    function Personaje() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Personaje;
}(Phaser.Sprite));
var Roca = /** @class */ (function (_super) {
    __extends(Roca, _super);
    function Roca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Roca;
}(Bonus));

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

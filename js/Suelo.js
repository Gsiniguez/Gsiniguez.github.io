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

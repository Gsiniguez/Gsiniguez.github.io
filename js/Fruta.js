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

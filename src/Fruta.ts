// /// <reference path="../tsDefinitions/phaser.d.ts" />
module JuegoCostanera {
    export  class Fruta extends Bonus{
        emitter: Phaser.Particles.Arcade.Emitter;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y);
            var emitter = game.add.emitter(game.world.centerX, 5, 5);
            this.setEmitter(emitter);
            this.getEmitter().width = game.world.width-20;
			this.getEmitter().setYSpeed(100, 200);
			this.getEmitter().setXSpeed(-1, 1);
            this.getEmitter().start(false, 3000, 1, 0);
            
            game.add.existing(this);

        }

        setEmitter(value: Phaser.Particles.Arcade.Emitter){
			this.emitter = value
		}
	
		getEmitter(){
			return this.emitter;
		}
    
    }
    }
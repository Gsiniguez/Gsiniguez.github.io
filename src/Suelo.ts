// /// <reference path="../tsDefinitions/phaser.d.ts" />
module JuegoCostanera {
    export  class Suelo extends Bonus{
        emitter: Phaser.Particles.Arcade.Emitter;
        game: Phaser.Game;

        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y,frame);

            this.getGame().physics.enable(this,Phaser.Physics.ARCADE);
			this.name = 'suelo';
			this.x = 0;
			this.y = this.getGame().world.y+this.getGame().world.height-30;
            this.width = this.getGame().width;
            
            game.add.existing(this);

        }

        setGame(value){
            this.game = value;
        }

        getGame(){
            return this.game;
        }
    
    }
    }
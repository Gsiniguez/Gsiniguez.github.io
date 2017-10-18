// /// <reference path="../tsDefinitions/phaser.d.ts" />
module JuegoCostanera {
    export  class Personaje extends Phaser.Sprite{
        game: Phaser.Game;
        puntos: number;
        vida:number;
        facing:string;

        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);
                            
            this.height = 200;
			this.width = 100;		
			this.getGame().physics.enable(this,Phaser.Physics.ARCADE);
			this.body.collideWorldBounds = true;
			this.body.gravity.y = 500;
			this.body.setSize(20, 36.5, 5, 16);
			this.animations.add('left', [9, 10, 11, 12,13,14], 10, true);
			this.animations.add('turn', [4], 20, true);
			this.animations.add('right', [1, 2, 3, 4,5,6], 10, true);
			this.setFacing('left');      
            
            this.setPuntos(0);
            this.setVida (5);
            game.add.existing(this);

        }

        setGame(value){
            this.game = value;
        }

        getGame(){
            return this.game;
        }

        setVida(value){
            this.vida = value;
        }

        getVida(){
            return this.vida;
        }

        setPuntos(value){
			this.puntos = value;
		}
	
		getPuntos(){
			return this.puntos;
        }

        setFacing(facing: string){
			this.facing = facing;
		}
	
		getFacing(){
			return this.facing;
		}
        
    }
    }
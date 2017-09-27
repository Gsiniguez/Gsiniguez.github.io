/// <reference path="../tsDefinitions/phaser.d.ts" />

class Costanera
{
	game:Phaser.Game;
	ancho: number;
	alto:number;
	vida:number;
	personaje: Personaje;
	obstaculo: Fruta;
	suelo: Phaser.Sprite;
	cursores:Phaser.CursorKeys;
	saltarBtn:Phaser.Key;
	facing: string;
	emitter: Phaser.Particles.Arcade.Emitter;
	

//--------------------setters y getters --------------------------------------
	
	setVida(value:number){
		this.vida = value;
	}

	getVida(){
		return this.vida;
	}

	setSuelo(value:Phaser.Sprite){
		this.suelo = value;
	}	

	getSuelo(){
		return this.suelo;
	}

	setGame(game: Phaser.Game ){
		this.game = game;
	}

	getGame (){
		return this.game;
	}

	setAncho(ancho: number ){
		this.ancho = ancho;
	}

	getAncho (){
		return this.ancho;
	}

	setAlto(alto: number ){
		this.alto = alto;
	}

	getAlto (){
		return this.alto;
	}

	setPersonaje(personaje: Personaje ){
		this.personaje = personaje;
	}

	getPersonaje ():Personaje{
		return this.personaje;
	}

	setObstaculo(value: Fruta ){
		this.obstaculo = value;
	}

	getObstaculo ():Fruta{
		return this.obstaculo;
	}

	setCursores(cursores: Phaser.CursorKeys ){
		this.cursores = cursores;
	}

	getCursores (){
		return this.cursores;
	}

	setSaltarBtn(saltarBtn: Phaser.Key ){
		this.saltarBtn = saltarBtn;
	}

	getSaltarBtn (){
		return this.saltarBtn;
	}

	setFacing(facing: string){
		this.facing = facing;
	}

	getFacing(){
		return this.facing;
	}

	setEmitter(value: Phaser.Particles.Arcade.Emitter){
		this.emitter = value
	}

	getEmitter(){
		return this.emitter;
	}




	constructor(ancho: number,alto:number)
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
		// { preload:this.preload, create:this.create} - functions to call for our states
		this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
			preload:this.preload, 
			create:this.create, 
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
			listener: this.listener,
			getSuelo : this.getSuelo,
			setSuelo: this.setSuelo,
			getVida: this.getVida,
			setvida: this.setVida,
		} ));
	}
	
	preload()
	{
		// add our logo image to the assets class under the
		// key 'logo'. We're also setting the background colour
		// so it's the same as the background colour in the image
		//this.getGame().load.image('obstaculo', 'assets/manzana.png');
		this.getGame().load.spritesheet('obstaculo', 'assets/fruitnveg32wh37.png', 32, 32);
		this.getGame().load.spritesheet('player', 'assets/Personaje.png', 36.5, 48);
		this.getGame().load.image( 'costanera', "assets/costanera.jpg" );
		this.getGame().load.spritesheet('suelo', "assets/suelotile.png",this.getGame().width,10,100 );
		
		//Agregamos un comentario para probar subir cambios a GIT desde el editor
		//hacemos un cambio en el archivo
		
	}
	
	create()
	{
		// add the 'logo' sprite to the game, position it in the
		// center of the screen, and set the anchor to the center of
		// the image so it's centered properly. There's a lot of
		// centering in that last sentence

		//Seteamos la imagen del juego en la posicion '0,0'
		//y el ancho y alto de la misma según el tamaño de la ventana actual
		//fondo de pantalla
		var logo = this.getGame().add.sprite( this.getGame().world.centerX, this.getGame().world.centerY, 'costanera' );
		logo.x = 0;
		logo.y = 0;
		logo.height = this.getGame().height;
		logo.width = this.getGame().width;

		this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
		this.getGame().time.desiredFps = 30;

		this.getGame().physics.arcade.gravity.y = 250;

		
		//suelo
		var suelo = this.getGame().add.sprite(this.getGame().world.centerX,this.getGame().world.centerY,'suelo');
		this.setSuelo(suelo);
		this.getGame().physics.enable(this.getSuelo(),Phaser.Physics.ARCADE);
		suelo.name = 'suelo';
		suelo.x = 0;
		suelo.y = this.getGame().world.y+this.getGame().world.height-30;
		suelo.width = this.getGame().width;
		
				
		//Personaje
		var personaje = this.getGame().add.sprite(100, 200, 'player');
		personaje.height = 200;
		personaje.width = 100;
		this.setPersonaje(personaje);		
		this.getGame().physics.enable(this.getPersonaje(),Phaser.Physics.ARCADE);
		this.getPersonaje().body.collideWorldBounds = true;
		this.getPersonaje().body.gravity.y = 500;
		this.getPersonaje().body.setSize(20, 36.5, 5, 16);
		this.getPersonaje().animations.add('left', [9, 10, 11, 12,13,14], 10, true);
		this.getPersonaje().animations.add('turn', [4], 20, true);
		this.getPersonaje().animations.add('right', [1, 2, 3, 4,5,6], 10, true);
		this.setFacing('left');

		//obstaculo
		var obstaculo = this.getGame().add.sprite(20, 20, 'obstaculo');
		this.setObstaculo(obstaculo);
		
		obstaculo.name = 'obstaculo';
		
	
		this.getGame().physics.enable(obstaculo, Phaser.Physics.ARCADE);
		logo.inputEnabled = true;
		logo.events.onInputDown.add(this.listener, this);
		
		//this.getObstaculo().body.velocity.y = 10;
	
		//  This adjusts the collision body size.
		//  220x10 is the new width/height.
		//  See the offset bounding box for another example.
		this.getObstaculo().body.setSize(10, 10, 0, 0);
		
		this.setCursores(this.getGame().input.keyboard.createCursorKeys());
		this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));


		
		


		//emitter
		var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
		this.setEmitter(emitter);
		this.getEmitter().width = this.getGame().world.width-10;

		this.getEmitter().makeParticles('obstaculo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 2, true, false);
		

		
		// emitter.minParticleScale = 0.1;
		// emitter.maxParticleScale = 0.5;
	
		this.getEmitter().setYSpeed(100, 200);
		this.getEmitter().setXSpeed(-1, 1);
		this.getEmitter().start(false, 3000, 1, 0);
		//this.getEmitter().bounce.setTo(0.5, 0.5);
	}

	
	update () {
		
			// this.game.physics.arcade.collide(this.player, platforms);
			//this.getGame().physics.arcade.collide(this.getObstaculo(), this.getPersonaje(), this.collisionHandler, null, this);
			this.getGame().physics.arcade.collide(this.getEmitter(),this.getPersonaje(),this.collisionPerFrut,null, this);
			this.getGame().physics.arcade.collide(this.getEmitter(),this.getSuelo(),this.collisionSuelFrut,null,this);
						
			this.getPersonaje().body.velocity.x = 0;
			
			this.suelo.y = this.getGame().world.y+this.getGame().world.height-30;
			this.getSuelo().body.gravity = false;
		
			

			this.getPersonaje().bringToTop();
		
			if (this.getCursores().left.isDown)
			{
				this.getPersonaje().body.velocity.x = -500;
				if (this.getFacing() != 'left'){
						this.getPersonaje().animations.play('left');
						this.setFacing('left');
				}
			}
			else if (this.getCursores().right.isDown){
				this.getPersonaje().body.velocity.x = 500;
				if (this.getFacing() != 'right'){
						this.getPersonaje().animations.play('right');
						this.setFacing('right');
				}
			} else {
				if (this.getFacing() != 'idle'){
						this.getPersonaje().animations.stop();
			
						if (this.getFacing() == 'left'){
							this.getPersonaje().frame = 8;
						}
						else{
							this.getPersonaje().frame = 7;
						}
						this.setFacing('idle')
				}
			}
		
	
			
	}
	
	collisionPerFrut (objetos, personaje ) {
	// this.getGame().stage.backgroundColor = '#992d2d';
	 //this.getPersonaje().body.velocity.y = -800;
		personaje.kill();
		
		if(personaje.kill()){	
			console.log(this.vida);
		}
		if(this.getVida()==2){
			personaje.kill(personaje);
			console.log(this.getVida());
		}
	}


	collisionSuelFrut(objetos, suelo){
		suelo.kill();
		
		if (suelo.kill()){
			this.vida == this.vida + 1; 			
		}
		
	}



		
	listener () {
		this.getPersonaje().revive();
	}


	
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new Costanera(window.innerWidth,window.innerHeight);
}
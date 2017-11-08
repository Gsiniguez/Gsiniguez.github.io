/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Fruta.ts" />
/// <reference path="./Bonus.ts" />
module JuegoCostanera{

	class Costanera
	{
		game:Phaser.Game;
		ancho: number;
		alto:number;
		personaje: Personaje;
		fruta: Fruta;
		suelo: Suelo;
		cursores:Phaser.CursorKeys;
		saltarBtn:Phaser.Key;
		vidaTexto: Phaser.Text;
		puntosTexto: Phaser.Text;
		gameover: Phaser.Text;
		frutaCantidad: number;
		frutaDificultad:number;
		left:boolean;
		right:boolean;
		dash:boolean;
		
		
	
	//--------------------setters y getters --------------------------------------
		
		setLeft(value){
			this.left = value;
		}

		getLeft(){
			return this.left;
		}

		setRight(value){
			this.right = value;
		}

		getRight(){
			return this.right
		}

		setDash(value){
			this.dash = value;
		}

		getDash(){
			return this.dash;
		}

		setSuelo(value:Suelo){
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
	
		setVidaTexto(value){
			this.vidaTexto = value;
		}
	
		getVidaTexto(){
			return this.vidaTexto;
		}
	
		setPuntosTexto(value){
			this.puntosTexto = value
		}
	
		getPuntosTexto(){
			return this.puntosTexto;
		}
	
		setGameOver(value){
			this.gameover = value;
		}
	
		getGameOver(){
			return this.gameover;
		}
	
		setFrutaCantidad(value){
			this.frutaCantidad = value;
		}
	
		getFrutaCantidad(){
			return this.frutaCantidad;
		}
	
		setFrutaDificultad(value){
			this.frutaDificultad = value;
		}
	
		getFrutaDificultad(){
			return this.frutaDificultad;
		}

		setFruta(value:Fruta){
			this.fruta = value
		}

		getFruta(){
			return this.fruta;
		}
	


		constructor(ancho: number,alto:number)
		{
			// create our phaser game
			// 800 - width
			// 600 - height
			// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
			// 'content' - the name of the container to add our game to
			// { preload:this.preload, create:this.create} - functions to call for our states
			this.setGame(new Phaser.Game( ancho-20, alto-20, Phaser.CANVAS, 'content', { 
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
				getSuelo : this.getSuelo,
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
				setLeft:this.setLeft,
				getLeft: this.getLeft,
				listenerJump: this.listenerJump,
				listenerLeft: this.listenerLeft,
				listenerRight: this.listenerRight,
			} ));
		}

		preload()
		{
			// add our logo image to the assets class under the
			// key 'logo'. We're also setting the background colour
			// so it's the same as the background colour in the image
			//this.getGame().load.image('obstaculo', 'assets/manzana.png');
			this.getGame().load.spritesheet('fruta', 'assets/fruitnveg64wh37.png', 64, 64);
			this.getGame().load.spritesheet('player', 'assets/Personaje.png', 36.5, 48);
			this.getGame().load.image( 'costanera', "assets/Costanera.jpg" );
			this.getGame().load.spritesheet('suelo', "assets/suelotile.png",this.getGame().width,10,100 );
			this.getGame().load.image('gameover', "assets/gameover.png" )
			
			//Botones
			this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png',64,64);
			this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png',96,64);
			this.getGame().load.spritesheet('buttondash', 'assets/button-round.png',96,96);

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
			var suelo = new Suelo(this.getGame(),this.getGame().world.centerX,this.getGame().world.centerY,'suelo');
			this.setSuelo(suelo);
			


			//Personaje
			var personaje = new Personaje(this.getGame(),this.getGame().world.centerX, this.getGame().world.top, 'player');
			this.setPersonaje(personaje);
		

			//Botones
			this.setCursores(this.getGame().input.keyboard.createCursorKeys());
			this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));

			//Score text
			var scoreString = 'Puntos : ';
			var scoreText = this.getGame().add.text(this.getGame().world.width/2, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
			this.setPuntosTexto(scoreText);


			//Vida Text
			var liveText = this.getGame().add.text(10, 10, 'Vidas : ' + this.getPersonaje().getVida(), { font: '34px Arial', fill: '#fff' });
			this.setVidaTexto(liveText);


			this.setFrutaDificultad(0);	

			// create our virtual game controller buttons 
			//Boton de Dash
			var buttondash = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttondash', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
			buttondash.fixedToCamera = true;  //our buttons should stay on the same place  
			buttondash.events.onInputOver.add(this.listenerJump,this,0,true);
			buttondash.events.onInputOut.add(this.listenerJump,this,0,false);
			buttondash.events.onInputDown.add(this.listenerJump,this,0,true);
			buttondash.events.onInputUp.add(this.listenerJump,this,0,false);
			
			//Boton izquierda
			var buttonleft = this.getGame().add.button(30, this.getGame().world.height	- 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
			buttonleft.fixedToCamera = true;
			buttonleft.events.onInputOver.add(this.listenerLeft,this,0,true);
			buttonleft.events.onInputOut.add(this.listenerLeft,this,0,false);
			buttonleft.events.onInputDown.add(this.listenerLeft,this,0,true);
			buttonleft.events.onInputUp.add(this.listenerLeft,this,0,false);
		
			//Boton derecha
			var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
			buttonright.fixedToCamera = true;
			buttonright.events.onInputOver.add(this.listenerRight,this,0,true);
			buttonright.events.onInputOut.add(this.listenerRight,this,0,false);
			buttonright.events.onInputDown.add(this.listenerRight,this,0,true);
			buttonright.events.onInputUp.add(this.listenerRight,this,0,false);

		}


		update () {

			
			this.getPersonaje().body.velocity.x = 0;

			this.suelo.y = this.getGame().world.y+this.getGame().world.height-30;
			this.getSuelo().body.gravity = false;



			this.getPersonaje().bringToTop();

			if (this.getCursores().left.isDown || this.getLeft())
			{
				this.getPersonaje().body.velocity.x = -500;
				if (this.getPersonaje().getFacing() != 'left')
				{
						this.getPersonaje().animations.play('left');
						this.getPersonaje().setFacing('left');
				}
			}
			else if (this.getCursores().right.isDown || this.getRight())
			{
				this.getPersonaje().body.velocity.x = 500;
				if (this.getPersonaje().getFacing() != 'right')
				{
						this.getPersonaje().animations.play('right');
						this.getPersonaje().setFacing('right');
				}
			} else 
			{
				if (this.getPersonaje().getFacing() != 'idle')
				{
						this.getPersonaje().animations.stop();
				
						if (this.getPersonaje().getFacing() == 'left')
						{
							this.getPersonaje().frame = 8;
						}
						else
						{
							this.getPersonaje().frame = 7;
						}
						this.getPersonaje().setFacing('idle')
				}
			}
			 if ((this.getCursores().left.isDown || this.getLeft() )&& (this.getSaltarBtn().isDown || this.getDash()) )
			{
				this.getPersonaje().body.velocity.x = -1500;
				if (this.getPersonaje().getFacing() != 'left')
				{
						this.getPersonaje().animations.play('left');
						this.getPersonaje().setFacing('left');
				}
			}
			else if ((this.getCursores().right.isDown || this.getRight()) && (this.getSaltarBtn().isDown || this.getDash()) )
			{
				this.getPersonaje().body.velocity.x = 1500;
				if (this.getPersonaje().getFacing() != 'right')
				{
						this.getPersonaje().animations.play('right');
						this.getPersonaje().setFacing('right');
				}
			}

			if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse){ this.setRight(false); this.setLeft(false); this.setDash(false)} 

			//Emitter speed
			if(this.getFrutaDificultad()==0){
			//Fruta Emitter
			var fruta = new Fruta(this.getGame(),this.getGame().world.centerX, 5);
			this.setFruta(fruta);
			this.getGame().time.events.repeat(Phaser.Timer.SECOND*5 , 0, this.moreDificult, this);
			this.setFrutaCantidad(1);
			this.setFrutaDificultad(1);
			}

			if(this.getFrutaDificultad()==1 && this.getPersonaje().getPuntos()==300)
			{
				this.setFrutaDificultad(2);
				this.getGame().time.events.repeat(Phaser.Timer.SECOND+2000 , 0, this.moreDificult, this);
			}

			if(this.getFrutaDificultad()==2 && this.getPersonaje().getPuntos()==900)
			{
				this.setFrutaDificultad(3);
				this.getGame().time.events.repeat(Phaser.Timer.SECOND+2000 , 0, this.moreDificult, this);
			}

			//Collisiones
			// this.game.physics.arcade.collide(this.player, platforms);
			this.getGame().physics.arcade.collide(this.getFruta().getEmitter(),this.getPersonaje(),this.collisionPerFrut,null, this);
			this.getGame().physics.arcade.collide(this.getFruta().getEmitter(),this.getSuelo(),this.collisionSuelFrut,null,this);

		}

		moreDificult(){
			this.getFruta().getEmitter().makeParticles('fruta',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], this.getFrutaCantidad(), true, false);
		}

		personajeDie(){
			this.getPersonaje().exists = false;	
		}


		collisionPerFrut (objetos, personaje ) {
		// this.getGame().stage.backgroundColor = '#992d2d';
		//this.getPersonaje().body.velocity.y = -800;
			personaje.kill();

			if(personaje.kill()){	
				console.log(this.getPersonaje().vida);
			}

			this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 50);
			this.getPuntosTexto().text = 'Puntos: ' + this.getPersonaje().getPuntos().toString();	
		}

		collisionSuelFrut(objetos, suelo){
			suelo.kill();

			this.getPersonaje().setVida(this.getPersonaje().getVida()-1)
			this.getVidaTexto().text = 'Vidas : ' + this.getPersonaje().getVida().toString();

			if (this.getPersonaje().getVida() == 0){
				objetos.kill();
				this.getPersonaje().body.collideWorldBounds = false;		
				this.getGame().time.events.repeat(Phaser.Timer.SECOND+2000 , 0, this.personajeDie, this);		
				//GAMEOVER
				var gameOverText = this.getGame().add.image(this.getGame().world.centerX-130,this.getGame().world.centerY-125,'gameover');			
				//Reset text
				var resetText = this.getGame().add.text(this.getGame().world.centerX-100,this.getGame().world.centerY-190,"Press F5 to Restart.", { font: '34px Arial', fill: '#fff' })
			}
		}

		listenerJump(key,arg,arg2){
			this.setDash(arg2);
		}

		listenerLeft(key,arg,arg2){
			this.setLeft(arg2);
		}

		listenerRight(key,arg,arg2){
			this.setRight(arg2);
		}
	
	}

	// when the page has finished loading, create our game
	window.onload = () => {
		var game = new Costanera(window.innerWidth,window.innerHeight);
	}
}
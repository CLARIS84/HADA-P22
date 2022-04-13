var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada,hadaImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	hadaImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada
	hada=createSprite(150,600)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	hada.addAnimation("hada",hadaImg);
	hada.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);
	console.log(hada.x);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (starBody.position.y > 550) {
	Matter.Body.setStatic(starBody,true); 
	}
  drawSprites();

}

function keyPressed() {
switch (keyCode){
	case(DOWN_ARROW): 
		Matter.Body.setStatic(starBody,false); 
		break;
	case(RIGHT_ARROW): 
		hada.x=hada.x+10;
		break;
	case(LEFT_ARROW): 
		hada.x=hada.x-10;
		break;
	}
/* OTRA OPCION PARA EL CONTROL DEL HADA:
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
		}
	else if(keyCode===RIGHT_ARROW){
			hada.x=hada.x+10;
			}
			else if(keyCode===LEFT_ARROW){
				hada.x=hada.x-10;
			}
*/	
}

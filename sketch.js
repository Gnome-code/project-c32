
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 
var division = []
var particles = []
var plinkos = []
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(240, 800, 490, 20)
  for (var k=0; k <=innerWidth; k= k+80){
		division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  

  for (var j = 40; j <= width; j = j + 50)
	{
		plinkos.push(new Plinko(j, 75));
  }
  

	for (var j = 15; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinko(j, 175));
  }

  for (var w = 40; w <= width; w = w + 50)
	{
		plinkos.push(new Plinko(w, 275));
  }
  

	for (var w = 15; w <= width - 10; w = w + 50)
	{
		plinkos.push(new Plinko(w, 375));
  }


 
  Engine.run(engine);
}

function draw() {
  background("black");  
  ground.display();
  noStroke();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }


  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
 
  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }
}

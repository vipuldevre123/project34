
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
const Mouse = Matter.Mouse; 
const Constraint = Matter.Constraint; 
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt); 
	canvasmouse.pixelRatio = pixelDensity(); 
	let options = { mouse: canvasmouse }; 
	mConstraint = MouseConstraint.create(engine, options); 
	World.add(world, mConstraint);


	//Create the Bodies Here.
	Bob1 = new Bob(200,600,40);
	Bob2 = new Bob(240,600,40);
	Bob3 = new Bob(280,600,40);
	Bob4 = new Bob(320,600,40);
	Bob5 = new Bob(360,600,40);
	Ground = new Ground(400,50,600,10);
	constraint1=
	{
	 bodyA:Bob1.body, bodyB:Ground.body, stiffness :0.04,
	 }
	var pendulum1=Constraint.create(constraint1)
	World.add(world, pendulum1);

	constraint2=
	{
	 bodyA:Bob2.body, bodyB:Ground.body, stiffness :0.04,
	 }
	var pendulum2=Constraint.create(constraint2)
	World.add(world, pendulum2);

	constraint3=
	{
	 bodyA:Bob3.body, bodyB:Ground.body, stiffness :0.04,
	 }
	var pendulum3=Constraint.create(constraint3)
	World.add(world, pendulum3);

	constraint4=
	{
	 bodyA:Bob4.body, bodyB:Ground.body, stiffness :0.04,
	 }
	var pendulum4=Constraint.create(constraint4)
	World.add(world, pendulum4);

	constraint5=
	{
	 bodyA:Bob5.body, bodyB:Ground.body, stiffness :0.04,
	 }
	var pendulum5=Constraint.create(constraint5)
	World.add(world, pendulum5);
	
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  drawSprites();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Ground.display();
  line(Bob1.body.position.x,Bob1.body.position.y,Ground.body.position.x-80,Ground.body.position.y);
  line(Bob2.body.position.x,Bob2.body.position.y,Ground.body.position.x-40,Ground.body.position.y);
  line(Bob3.body.position.x,Bob3.body.position.y,Ground.body.position.x,Ground.body.position.y);
  line(Bob4.body.position.x,Bob4.body.position.y,Ground.body.position.x+40,Ground.body.position.y);
  line(Bob5.body.position.x,Bob5.body.position.y,Ground.body.position.x+80,Ground.body.position.y);
}

/*function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-50});
}
}*/

function mouseDragged(){
	Matter.body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}

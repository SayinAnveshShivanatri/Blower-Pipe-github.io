const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;

var ball;
var button;
function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 115, height / 2, 20);
  blower = new Blower(width / 2 + 70, height / 2 + 100, 150, 20)
  blowerMouth = new Blowermouth(width / 2 + 115, height / 2 + 70, 50, 40);
  button = createImg("pig-vector-25856425.jpg");
  button.position(width / 2, height - 50);
  // button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background(225, 255, 255);
  Engine.update(engine)

  ball.show()
  blower.show();
  blowerMouth.show();
}


function blow() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 })
}












































// Create the Ball, Blower, and Blowermouth classes for creating a rectangular body.
// Create the objects for each of these classes in the sketch.js file.
// Display the object using show() in the draw() function of sketch.js.
// Create a button using the createButton() function.
// Create a function blow().
// In the function blow() use the Matter.Body.applyForce() function to apply the vertical force on the ball.
// On the mousePressed() property of the button, call the function blow().
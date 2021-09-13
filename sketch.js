function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
// Create the Ball, Blower, and Blowermouth classes for creating a rectangular body.
// Create the objects for each of these classes in the sketch.js file.
// Display the object using show() in the draw() function of sketch.js.
// Create a button using the createButton() function.
// Create a function blow().
// In the function blow() use the Matter.Body.applyForce() function to apply the vertical force on the ball.
// On the mousePressed() property of the button, call the function blow().
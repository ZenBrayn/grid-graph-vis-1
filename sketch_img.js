function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
  noLoop();
  
  print(displayHeight);
    
  x_center = displayWidth * 0.5;
  y_center = displayHeight * 0.5;
  
  pt_size = 50;
  ln_size = pt_size * 0.25;
  spacing = pt_size * 10;
  
  pt_color = color(100, 1);
  ln_color = color(200, 1);
  color_state = 1;
  
  n_row = 4;
  n_col = 8;
  
  frame_rate = 25;
  frameRate(frame_rate);
}


function draw() {
  translate(-100, -100);
  translate(150, 50)
  drawViz("single");
  saveCanvas("grid-1.png")
}

function setup() {
    
  x_center = displayWidth * 0.5;
  y_center = displayHeight * 0.5;
  
  pt_size = 10;
  ln_size = pt_size * 0.25;
  spacing = pt_size * 10;
  
  pt_color = color(100, 1);
  ln_color = color(200, 1);
  color_state = 1;
  
  n_row = 1;
  n_col = 1;
  
  createCanvas(spacing * n_col + 200, spacing * n_row + 200);
  background(0);
  noStroke();

  frame_rate = 25;
  frameRate(frame_rate);
}

function draw() {
  drawViz("single");
}

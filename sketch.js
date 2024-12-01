let bubbles = [];

function setup() {
  createCanvas(400, 400);
  let radius = 150;
  let centerX = width/2;
  let centerY = height/2;
  
  for( i = 0; i < 20; i++){
  let angle = TWO_PI / 20 *i
  let x = centerX + radius*cos(angle);
  let y = centerY + radius*sin(angle);
  bubbles[i] = new Bubble(x, y, 40);

  }
  
  
  
}

function draw() {
  background(230, 10, 30);
  
  for (let i = 0; i < bubbles.length ; i++){
    
  bubbles[i].show();
  bubbles[i].move();
    
  }
  
  
   }
  
class Bubble{
    constructor(x, y, r){
      this.x = x;
      this.y = y;
      this.r = r;
    }
 
    show(){
      blendMode(DIFFERENCE)
      circle(this.x, this.y, this.r*2);
      fill(255, 16, 240)
      noStroke();
      blendMode(BLEND)
      
      }
      
    move(){
      this.x = this.x + random(1,-1);
      this.y = this.y + random(1,-1);
    
      
    
    }
  
}


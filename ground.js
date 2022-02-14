class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
      //making ground static
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    //create a rectangle- refering body
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    //function or method
    var pos = this.body.position;
    //
    push();
    //we insert something
    rectMode(CENTER);
    //RECTANGLE- CENTER.... CIRCLE- ELLIPSE
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
    //we take out something SO IT DOESNT APPLY EVERYWHERE
  }
  
}



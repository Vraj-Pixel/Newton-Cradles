class Bob {
    constructor(x,y,radius){
      this.body = Bodies.circle(x,y,radius);
      World.add(world, this.body);
    }
  
    display() {
      var pos=this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
  
      
  
      
  }
}
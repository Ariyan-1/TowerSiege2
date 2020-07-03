class Block {
    constructor(x,y,width,height) {
           
      this.Visibility=255
      this.width = width
      this.height = height
      this.body=Bodies.rectangle(x,y,width,height);
      
     }
    
    display(){
      var pose=this.body.position;
      var angle=this.body.angle;
      //console.log(this.body.speed)
      if(this.body.speed>3){
        World.add(world,this.body)
      }

      else{
      World.remove(world,this.body);
      tint(255,this.Visibility)
      push();
      //this.Visibility=this.Visibility-5;
      translate(pose.x, pose.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height,50,50);
      pop();
      }
    }
  };
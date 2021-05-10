class Umbrella{
    constructor(x,y,width,height){
        
        var options = {
           isStatic : true 
       }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 300 ;
        this.height = 200 ;
      this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position ;
        push()
        strokeWeight(4);
        //rectMode(CENTER);
        //fill("white");
       // rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop()
    }
}
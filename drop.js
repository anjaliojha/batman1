class Drop{
    constructor(x,y){
        var options = {
           isStatic : false ,
           friction : 0.01 ,
           restitution : 0.1 
          }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = r ;
        World.add(world,this.body);
    }

     update(){
         if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)});
         }
     }

    display(){
        var pos = this.body.position ;
        push()
        strokeWeight(4);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos,y,this.radius,this.radius);

        pop()
    }
}
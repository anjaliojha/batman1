const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var maxDrops=100;
var drops=[];

function preload(){
    
}

function setup(){


    createCanvas(500,650);
    engine = Engine.create();
	world = engine.world;

   

    if(frameCount % 160=== 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,600), random(0,400)));
        }

    }
    man = new Umbrella(160,350);

	Engine.run(engine);
     

    
}

function draw(){
    background("BLACK");
    man.display();

Engine.update(engine);
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }
    
}   


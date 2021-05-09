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

    man = new Umbrella(160,350,500,500);
    if(frameCount%160===0){
       
    }
	Engine.run(engine);
     

    
}

function draw(){
    background("black");
    man.display();
    
}   


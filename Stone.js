class Stone {
    constructor(x,y){
    var options = {
    restirution:0,
    friction:1
    }
    this.stone = Bodies.rectangle(x,y,50,50,options);
    this.image = loadImage("Pluckingmangoes/stone.png");
    World.add(world,this.stone);
    
    
    
    
    }
    display(){
        var pos=this.stone.position;
        var angle=this.stone.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        image(this.image,0,0,50,50);
        pop();
    
    
    }
    }
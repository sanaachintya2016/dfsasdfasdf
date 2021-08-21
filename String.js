class String{
    constructor(b1,p2){
        var options = {
            bodyA: b1 ,
            pointB:p2,
            stiffness: 0.02,
            length: 10
        }
        
        this.pointB = p2
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

fly(){

this.string.bodyA= null

}
    attach(body){

        this.string.bodyA = body;

    }
   display(){ 


   line(this.string.bodyA.position.x, this.string.bodyA.position.y,this.string.pointB.x,this.string.pointB.y);
}

   
}
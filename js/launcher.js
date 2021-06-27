class Launcher{
    constructor(bodyA,pointB){
    var chain_options={
        bodyA:bodyA,
        pointB:pointB,
        length:5,
        stiffness:0.01,
        
    }
    
    this.pointB=pointB
        this.launcher=Constraint.create(chain_options)
        World.add(world,this.launcher)
    }
    display(){
    
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position
    var pointB=this.pointB
    strokeWeight(5.5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    
    
    }
    
    fly(){
        this.launcher.bodyA=null
    }
    

    attach(body){
        this.launcher.bodyA=body
    }
}
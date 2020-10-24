class Rope{
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    var options = {
        bodyA:body1, 
        bodyB:body2,
        //stiffness:0.7,
        //length:300,
        pointB:{x:this.offsetX, y:this.offsetY}
}
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        //push();
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
        //pop();
    }
}
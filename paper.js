class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, 10, options);
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x,this.y,60,60);
    }
} 
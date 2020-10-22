class Ground2{
    constructor(x,y,width,height){
        var options= {
            isStatic:true
        }
        this.image = loadImage("ground.gif");
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        push();
    imageMode(CENTER);
    fill("blue");
    stroke("white");
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
}
}
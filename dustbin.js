class uni{
    constructor(x,y,width,height){
       
        this.image = loadImage("uni.gif")
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
     
    }
    display(){
        push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
}
}
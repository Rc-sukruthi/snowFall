class Snowclass{
    constructor(x,y){
        var options={
            friction= 0.3,
            density= 0.5,
            visibility: 255
        }
       this.r=40;
       this.body= Bodies.circle(x,y,this.r,options);
    
        this.snowImage = loadImage("snow5.webp");
        this.trajectory =[];
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    if(pos.y>300){
        this.body.visibility=0
    }
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r)
}
    
}
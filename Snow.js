class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            //isStatic:true
            
        }
        this.r = 9;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        //this.color = color(random(0,225),random(0,225),random(0,225))
        World.add(world, this.body);
    }
    display() {
    
        var pos = this.body.position;
        var angle = this.body.angle;
        image(this.image, this.body.position.x, this.body.position.y,50,50);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
       // fill("white");
        ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);
        pop();
    }

};
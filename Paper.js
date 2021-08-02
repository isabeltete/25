class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			
			}
		this.x=x;
		this.y=y;
		this.r=80;
        this.image=loadImage("paper.png");
		
		this.body=Bodies.circle(this.x, this.y, (50)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			fill(0,100,0)
			imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop()
			
	}
}
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
       let w=this.width;
       let h=this.height;
       let out1=w * h;
       console.log(`Area of Rectangle ${out1}`);
    }
    getPerimeter(){
        let w=this.width;
        let h=this.height;
        let out2= 2*(w+h);
        console.log(`Perimeter of Rectangle ${out2}`);
    }
}
 const c1 = new Rectangle(12,9);
 c1.getArea();
 c1.getPerimeter();
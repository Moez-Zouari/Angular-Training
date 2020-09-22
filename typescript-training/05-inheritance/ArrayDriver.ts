import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10 , 15);
let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle (15,15,100,200);


//-----Declarer tableau de shape vide
let theShapes : Shape[] = [];

// Add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
}




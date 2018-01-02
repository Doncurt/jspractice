class Animal{
  constructor(name){
    this.name= name
    }
    get behavior(){
      return this.behavior;
    }

}

class Cat extends Animal {
  constructor(name, usesLitterBox){
    super(name);
    this._usesLitterBox= usesLitterBox
  }
}

class Shape{
constructor(sides){
  this.sides= sides
}
  get area(){
    return sides * sides;

  }
}
class Circle extends Shape{
  super()
  constructor(radius){
    this.radius= radius
  }

}
Circle.prototype.area1 = function(){
    return Math.PI * (Math.pow(radius, radius))
};

let SimpleCircle= new Circle(3.45);

console.log(simpleCircle.area1);

var person = {
  firstName : "Donovan",
  lastName : " adams",
  fullName: function (){
    return this.firstName + " " + this. lastName
  }

}
var mary ={
  firstName: "mary",
  lastName: "smith",
}
console.log(person.fullName.call(mary));
console.log(Object.getOwnPropertyDescriptors(person));

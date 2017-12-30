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

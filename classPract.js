class Animal{
  constructor(name){
    this.name= name
    }
    get behavior(){
      return this.behavior;
    }

}

class Cat extends Animal {
  constructor(name, usesLitterBox){}
    super(name);
    this._usesLitterBox= usesLitterBox
  }
}

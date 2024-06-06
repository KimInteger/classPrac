class Animal {
  constructor(type,live){
    this.type = type;
    this.live = live;
  };

  move(){
    console.log('I can move!');
  }
};

class Bird extends Animal {
  constructor(type,live,name) {
    super(type,live);
    this.name = name;
  };

  static fly(){
    console.log('I can fly!');
  }
};

let pJ = new Bird('비행','하늘','피죤');
// console.log(pJ);
console.dir(pJ.move);
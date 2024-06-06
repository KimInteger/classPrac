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

  fly(){
    console.log('I can fly!');
  }
};
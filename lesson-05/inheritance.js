class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting.`);
    }

    stop() {
        console.log(`${this.brand} ${this.model} is stopping.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    openTrunk() {
        console.log(`Opening the trunk of the ${this.brand} ${this.model}.`);
    }

  stop() {
    console.log(`${this.brand} ${this.model} is stopping!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
  }

  set newDoorsCount(count) {
    this.doors = count;
  }

  get doorsCount() {
    return this.doors;
  }
}

const myCar = new Car('Toyota', 'Camry', 4);
console.log(myCar);
myCar.openTrunk();
myCar.start();
myCar.stop();
myCar.toString()

myCar.newDoorsCount = 5
myCar.doorsCount
console.log(myCar);

const yourCar = new Car('Honda', 'Civic', 4);
console.log(yourCar);

myCar.toString = function () {return 'hello hello hello'}


function Animal(name) {
  this.name = name;
  this.type = 'Dog';
  this.bark = function() {
    console.log(`${this.name} Woof! Woof!`);
  };
}

// const dog = new Animal('Buddy');
// console.log(dog);
// const dog1 = new Animal('Fluffy');
// dog.bark()
// dog1.bark()

class Dog {
  constructor(name) {
    this.name = name;
    this.type = 'Dog';
  }

  bark() {
    console.log(`${this.name} Woof! Woof!`);
  }
}
//
// const dog = new Dog('Buddy');
// dog.bark()

const dog1 = {
  name: 'Fluffy',
  type: 'Dog',
  bark: function () {
    console.log(`${this.name} Woof! Woof!`);
  }
};

dog1.bark()

const dog2 = {
  name: 'Sharik',
  type: 'Dog',
};

dog1.bark.call(dog2)


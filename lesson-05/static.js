class Person {
  static #car = 'Toyota';
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {
    console.log(`Hello ${Person.#car}!`);
    // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  greet1() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
// person1.greet();

Person.greet()

person1.greet1()
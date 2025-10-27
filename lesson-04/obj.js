const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  setAge: function(newAge) {
    if (newAge > 0) {
      this.age = newAge;
    } else {
      console.log("Please enter a valid age.");
    }
  },
  family: {
    spouse: "Bob",
    children: ["Charlie", "Daisy"]
  }
}

const person2 = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  setAge: function(newAge) {
    if (newAge > 0) {
      this.age = newAge;
    } else {
      console.log("Please enter a valid age.");
    }
  },
  family: {
    spouse: "Bob",
    children: ["Charlie", "Daisy"]
  }
}

const person3 = person;
console.log(person === person3);
console.log(person);
console.log(person3);

person3.age = 35;
console.log(person);

// person3 = {};
// let car = {};
// let car2 = {};
//
// console.log(car === car2)

person2.age = 29;
person2.car = "Toyota";
console.log(person2);
person2['address'] = "123 Main St";
console.log(person2);

person2['Mariage date'] = "2020-06-15";
console.log(person2);

const hobby = "ice hockey";
const bussiness = {
  name: "Tech Solutions",
  employees: 100,
  location: "New York",
  services: ["Software Development", "IT Consulting", "Cloud Services"],
  established: 2010,
  isActive: true,
  _privateInfo: "Confidential Data"
};

person2[hobby] = '123';
console.log(person2);

for (let key in bussiness) {
  console.log(key, bussiness[key]);
}

console.log(Object.keys(bussiness));
console.log(Object.values(bussiness));
console.log(Object.entries(bussiness));

console.log(bussiness[0]);


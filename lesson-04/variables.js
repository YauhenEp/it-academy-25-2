var bool = true;
let num = 42;
const str = "Hello, World!";


console.log("Boolean:", bool);
console.log("Number:", num);
console.log("String:", str);

num = 100;
console.log("Updated Number:", num);

bool = false; // Redeclaring var is allowed
console.log("Redeclared Boolean:", bool);

// str = "New String"; // This would cause an error
// console.log("Redeclared String:", str); // Uncommenting these lines will throw an error

num = 200; // This would cause an  error
console.log("Redeclared Number:", num); // Uncommenting these lines will throw an error

let newNum = 300; // This is allowed
console.log("declared Number:", newNum);
{
  let newNum = 400; // This is a different variable in a new block scope
  console.log("Block Scoped Number:", newNum);
}
console.log("Outer Block Scoped Number:", newNum);


var newNum1 = 300; // This is allowed
console.log("declared Number:", newNum1);
{
  var newNum1 = 400; // This is a different variable in a new block scope
  console.log("Block Scoped Number:", newNum1);
}
console.log("Outer Block Scoped Number:", newNum1);
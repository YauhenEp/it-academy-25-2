const array = [1, 2, 3, 4, 5];

const array1 = [1, [], {}, 'string', true, null, undefined];

console.log(array[0]);

for (let i = 0; i < array.length; i++) {
  console.log(array[i] + 1);
}

for (const item of array) {
  console.log(item + 100);
}

console.log(array.length)

array.map(item => console.log(item + 1000))
array.forEach(item => console.log(item + 10000))
const newArray = array.filter(item => item > 3)
console.log(newArray)

//[1, 2, 3, 4, 5]
const sum = array.reduce((acc, item) => acc + item, 1000)
console.log(sum)
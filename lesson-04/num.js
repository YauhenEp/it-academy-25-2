let num = 10 / 0;
console.log(num);

let num2 = 10 / 'efdsfd';
console.log(num2);

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(BigInt.MAX_SAFE_INTEGER)
console.log(BigInt.MIN_SAFE_INTEGER)

let number = '10px';
let number2 = 15;
console.log(typeof number);
const convertedNumber = Number(number);

console.log(typeof convertedNumber);
console.log(convertedNumber);
console.log(typeof +number);
console.log(+number);
console.log(typeof parseInt(number, 10));
console.log(parseInt(number, 10));

console.log(parseInt(number, 8));
console.log(parseInt(number, 16));
console.log((10).toString(2));
console.log(number2.toString(2));

const num3 = 0.3;
const num4 = 0.1 + 0.2;
console.log(num3 === +num4.toFixed(1));

console.log(Math.floor(Math.random() * (10000 - 1) + 1))

console.log(Math.floor(10.9))
console.log(Math.ceil(10.1))
console.log(Math.round(10.49))
console.log(Math.round(10.5))
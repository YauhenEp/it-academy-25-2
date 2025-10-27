let isVariable = true;
console.log("Boolean:", isVariable);
console.log("Boolean:", !isVariable);

let isTrue = 1 && 'hello' &&  {} &&  [] && 42;
console.log("isTrue:", isTrue);

isTrue = 1 && 'hello' &&  0 &&  [] && 42;
console.log("isTrue:", isTrue);

isTrue = 0 || '' ||  null ||  undefined || 0n;
console.log("isTrue:", isTrue);

isTrue = 1 || '' ||  null ||  undefined || 0n;
console.log("isTrue:", isTrue);

const a = 'str';

if(a !== 'string') {

}

console.log(1 === true);
console.log(0 === false);

const b = new Boolean('true');

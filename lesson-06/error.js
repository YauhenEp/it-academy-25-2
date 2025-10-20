try {
    console.log(a)
    let a = 10
} catch (err) {
    console.log(err)
} finally {
    console.log('I am always here')
}

console.log('Hello');

try {
    let a = 10/0;
    if (a === Infinity) throw new Error('Prohibiten divide by 0')
} catch (err) {
    console.log(err)
}
console.log('Buy');
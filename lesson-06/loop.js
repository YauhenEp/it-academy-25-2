let a = 10;

while(a < 20) {
    if( a === 17) {
        break
    }
    console.log('a is ', a)
    a++
}

let b = 10;
do {
    if( b === 17) {
        b++
        continue
    }
    console.log('b is ', b)
    b++
} while(b < 20)


for (let i = 10; i < 20; i++) {
    console.log('i is ', i)
}
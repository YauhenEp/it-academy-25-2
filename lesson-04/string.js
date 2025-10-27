let str = "Hello World!"
let str2 = 'Bye World!'
let str3 = `Keep going!`

let str4 = "Genry " + str + " " + str2 + " " + str3 + `!`
console.log(str4)

let str5 = `Genry ${str} ${str2} ${str3}!`
console.log(str5)

console.log(str5[6])
console.log(str5[0])
console.log(str5.charAt(0))
console.log(str5.length)

console.log(str5.toUpperCase())
console.log(str5.toLowerCase())

console.log(str5.indexOf('World'))
console.log(str5.lastIndexOf('World'))

console.log(str5.replace('World', 'Hell'))
const newStr = str5.replace(/World/g, 'Hell')
console.log(newStr)

console.log(str5.slice(10, 15))

console.log(str5.split(' '))

console.log(str5.match(/World/))

console.log(str5.includes('World!!'))
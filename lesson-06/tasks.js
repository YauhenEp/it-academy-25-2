// "Hello world from JS" ➜ "JS from world Hello"
// const words = "Hello world from JS"
// const reverseWords = words.split(' ').reverse().join(' ')
// console.log(words.split(' ').reverse())
// console.log(reverseWords)

// palindrome "A man a plan a canal Panama"

// const palindrom = "A man a plan a canal Panama"
// const checkPalindrom = palindrom.toLowerCase().split(' ').reverse().map(str => str.split('').reverse().join('')).join('')
// console.log(palindrom.toLowerCase().split(' '))
// console.log(palindrom.toLowerCase().split(' ').reverse())
// console.log(palindrom.toLowerCase().split(' ').reverse().map(str => str.split('').reverse().join('')))
// console.log(checkPalindrom)
// console.log(palindrom.toLowerCase().split(' ').join('') === checkPalindrom)

// const checkPalindrom2 = palindrom.toLowerCase().replace(/\s/g, '')
// console.log(checkPalindrom2)
// console.log(palindrom.toLowerCase().split(' ').join('') === checkPalindrom2)

// Создай функцию, которая считает количество гласных (a, e, i, o, u, y) в строке.
//"Programming is fun" ➜ 5

// const str = "Programming is funaaa";
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
//         sum++
//     }
// }
// console.log(sum)

// let sum1 = 0;
// const letters = 'aeiouy';
// for (let i = 0; i < str.length; i++) {
//     for(let j = 0; j < letters.length; j++) {
//         if(str[i] === letters[j]) {
//             sum1++
//             break
//         }
//     }
// }

// console.log(sum1)
// const regular = /[aeiouy]/gi

//Напиши функцию, которая возвращает самое длинное слово из строки. 

// hello world from javascript" ➜ "Hello World From Javascript"

const sentense = 'hello world from javascript';
let newSentense = sentense.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(" ")
console.log(newSentense)
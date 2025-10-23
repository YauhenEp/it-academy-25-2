// Создай функцию, которая удаляет все дубликаты из массива.
//[1, 2, 2, 3, 4, 4, 5] ➜ [1, 2, 3, 4, 5]

let array = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 1, 5]

// let newArray = []
// let numberOfArray = array[0]
// for(let i = 0; i < array.length; i++) {
//     newArray[0] = array[0]
// }

// const newArray = array.filter((item, index) => array.indexOf(item) === index)
// console.log(newArray)


// function clearArray(arr) {
//     console.log([...new Set(arr)])
//     return [...new Set(arr)]
// }
// const array1 = clearArray(array)

// console.log(array1)

// let arrayStr = ['abc', 'asd', 'asc', 'abc', 'asd', 'asd']

// clearArray(arrayStr)


// Верни сумму только положительных элементов массива.
// [-2, 3, 5, -1, 0, 7] ➜ 15

const arrayOfNubers = [-2, 3, 5, -1, 0, 7]

let sum = 0;
for(let i = 0; i < arrayOfNubers.length; i++) {
    if(arrayOfNubers[i] > 0) {
        sum += arrayOfNubers[i]
    }
}


const reduceSum = arrayOfNubers.filter(item => item > 0).reduce((acc, cur) => acc + cur)
console.log(sum)
console.log(reduceSum)
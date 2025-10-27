const fse = require('fs-extra');
const axios = require('axios');
const {operationWithFolders} = require('./async')

const folderOne = './folder1'
const file = 'file.txt'
const folderTwo = './folder2'
const folderThree = './folder3'

// fse.emptyDir(folderOne, () => {
//     fse.createFile(folderOne + '/' + file, () => {
//         fse.emptyDir(folderTwo, () => {
//             fse.move(folderOne + '/' + file, folderTwo + '/' + file, () =>{
//                 fse.emptyDir(folderThree, () => {
//                     fse.copy(folderTwo + '/' + file, folderThree + '/' + file, () => {
//                         fse.remove(folderOne)
//                         fse.remove(folderTwo)
//                         fse.remove(folderThree)
//                     })
//                 })
//             })
//         })
//     })
// })

// fse.emptyDir(folderOne)
// .then(() => {
//     return fse.createFile(folderOne + '/' + file)
// })
// .then(() => {
//     fse.emptyDir(folderTwo);
//     fse.emptyDir(folderThree);
// })
// .then(() => {
//     return fse.move(folderOne + '/' + file, folderTwo + '/' + file)
// })
// .then(() => {
//     return fse.copy(folderTwo + '/' + file, folderThree + '/' + file)
// })
// .then(() => {
//     fse.remove(folderOne)
//     fse.remove(folderTwo)
//     fse.remove(folderThree)
// })


// const promiseResult = new Promise((res, rej) => {
//     res(axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities'))
// })
// .then((data) => {
//     console.log(data)
//     return data.status * 5
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     return console.log('Error - ', err)
// })
// .finally(() => {
//     console.log('I am always here')
// })

// const resolvedPromise = Promise.resolve(123)
// const rejectedPromise = Promise.reject(456).catch((rejectedPromise) => console.log(rejectedPromise))
// console.log(resolvedPromise)

function getPromise(status, timeout = 0) {
  return new Promise((res, rej) => {
    if(status === 'reject') {
      setTimeout(() => {
        rej(status)
      }, timeout)
    }
    setTimeout(() => {
      res(status)
    }, timeout)
  })
}
// Promise.all([getPromise('1'), getPromise(123), getPromise(54), getPromise(85), getPromise('reject')])
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log("error - ", err)
// })

// Promise.allSettled([getPromise('1'), getPromise(123), getPromise(54), getPromise(85), getPromise('reject')])
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log("error - ", err)
// })

// Promise.race([getPromise('1', 1000), getPromise(123, 2000), getPromise(54, 800), getPromise(85, 850), getPromise('reject', 700), getPromise(12345, 699)])
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log("error - ", err)
// })

Promise.any([getPromise('1', 1000), getPromise(123, 2000), getPromise(54, 800), getPromise(85, 850), getPromise('reject', 700), getPromise(12345, 701)])
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log("error - ", err)
})

operationWithFolders()
const fse = require('fs-extra');
const axios = require('axios');
const Class = require('./class');
const secondClass = require('./secondClass')

const folderOne = './folder1'
const file = 'file.txt'
const folderTwo = './folder2'
const folderThree = './folder3'

const firstClass = new Class()

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

async function operationWithFolders() {
    console.log(0)
    await fse.emptyDir(folderOne)
    console.log(1)
    await fse.createFile(folderOne + '/' + file)
    await fse.emptyDir(folderTwo);
    await fse.emptyDir(folderThree);
    await fse.move(folderOne + '/' + file, folderTwo + '/' + file)
    await fse.copy(folderTwo + '/' + file, folderThree + '/' + file)
    await fse.remove(folderOne)
    await fse.remove(folderTwo)
    await fse.remove(folderThree)
}
// operationWithFolders()
// console.log(123)

firstClass.sayhi();
secondClass.sayHello()

module.exports = {operationWithFolders}
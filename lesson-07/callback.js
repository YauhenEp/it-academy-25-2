const fse = require('fs-extra')

const folderOne = './folder1'
const file = 'file.txt'
const folderTwo = './folder2'
const folderThree = './folder3'

fse.emptyDir(folderOne, () => {
    fse.createFile(folderOne + '/' + file, () => {
        fse.emptyDir(folderTwo, () => {
            fse.move(folderOne + '/' + file, folderTwo + '/' + file, () =>{
                fse.emptyDir(folderThree, () => {
                    fse.copy(folderTwo + '/' + file, folderThree + '/' + file, () => {
                        fse.remove(folderOne)
                        fse.remove(folderTwo)
                        fse.remove(folderThree)
                    })
                })
            })
        })
    })
})



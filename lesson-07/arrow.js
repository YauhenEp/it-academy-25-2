let array = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 1, 5]

const newArray = array.filter((item, index) => array.indexOf(item) === index)
console.log(newArray)


const newArray1 = array.filter(function (item, index) {
    return  array.indexOf(item) === index
})
console.log(newArray1)

const arrayMap =  array.map(number => number + 1)
console.log(arrayMap)


const dog = {
    name: 'sharik',
    voice: 'gav',
    getVoice: () => {
        console.log(`${this.name} do ${this.voice}`)
    }
}

dog.getVoice()

const cat = {
    name: 'murka',
    voice: 'miay',
}

dog.getVoice.apply(cat)
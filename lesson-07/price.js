// getPriceWithTaxes(33, 19.5)

function getPriceWithTaxes(price, taxes = 25) {
    // console.log(this)
    console.log(arguments)
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(`sum equal ${sum}`)
    console.log(price + (price * taxes / 100))
    return price + (price * taxes / 100);
}


getPriceWithTaxes(100, 23, 25, 11, 23, 99, 34, 96)
// getPriceWithTaxes(10, 20)
// getPriceWithTaxes(14.6, 23)


// getTaxes(40, 12)
// let getTaxes = function (price, taxRate) {
//     console.log(price * taxRate / 100)
//     return price * taxRate / 100
// } 

// getTaxes(12, 20)

// const priceObj = {
//     price: 134,
//     tax: 27
// }

// getPriceWithTaxes.call(this, 10, 34)
// getPriceWithTaxes.apply(priceObj, [priceObj.price, priceObj.tax])

// const price = getPriceWithTaxes.bind(priceObj)

// price(90, 22)


// const dog = {
//     name: 'sharik',
//     voice: 'gav',
//     getVoice: function() {
//         console.log(`${this.name} do ${this.voice}`)
//         // console.log(this.name + ' do ' + this.voice)
//     }
// }

// dog.getVoice()

const cat = {
    name: 'murka',
    voice: 'miay',
}

// dog.getVoice.call(cat)
// dog.getVoice.apply(cat)
// const catVoice = dog.getVoice.bind(cat)
// catVoice()

function getPriceWithTaxesAndAkciz(price, taxes, ...akciz) {
    // console.log(this)
    console.log(akciz)
    let sum = 0
    for(let i = 0; i < akciz.length; i++) {
        sum += akciz[i]
    }
    console.log(`akciz sum equal ${sum}`)
    console.log(price + (price * taxes / 100))
    return price + (price * taxes / 100);
}

getPriceWithTaxesAndAkciz(100, 23, 25, 11, 23, 99, 34, 96)

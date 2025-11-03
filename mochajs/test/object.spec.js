const { expect } = require('chai');
const { createObject, getPromise } = require('../testFile');

describe('create object test suite', function() {
    it('name and surname should be in object we do not pass atributes', async () => {
        const resultObj = createObject();
        expect(resultObj).to.haveOwnProperty('name');
        expect(resultObj).to.haveOwnProperty('surname')
    })

    it('should be age parameter when we pass age as rest attribute', async () => {
        const resultObj = createObject('name', 'surname', {age: 18});
        expect(resultObj).to.haveOwnProperty('age');
        expect(resultObj.age).to.equal(18);
    })
    
    it('should be age parameter when we pass age as rest attribute', async () => {
        const resultPromise = await getPromise(10, 3000)
        expect(resultPromise).to.equal(10);
    })
})
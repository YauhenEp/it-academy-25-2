const { createObject, getPromise } = require('../../testFile');

describe('create object test suite', function() {
    // beforeAll(async () => {
    //     console.log('I am running before all tests');
    // })

    // beforeEach(async () => {
    //     console.log('I am running before EACH test');
    // })

    // afterAll(async () => {
    //     console.log('I am running after all tests');
    // })

    // afterEach(async () => {
    //     console.log('I am running after EACH test');
    // })

    it('name and surname should be in object we do not pass atributes', async () => {
        const {expect} = require('chai')
        const resultObj = createObject();
        expect(resultObj).to.haveOwnProperty('name');
        expect(resultObj).to.haveOwnProperty('surname')
    })

    it('should be age parameter when we pass age as rest attribute', async () => {
        const {expect} = require('chai')
        const resultObj = createObject('name', 'surname', {age: 18});
        expect(resultObj).to.haveOwnProperty('age');
        expect(resultObj.age).to.equal(18);
    })
    
    it('should return promise after 3 seconds', async () => {
        const resultPromise = await getPromise(10, 3000)
        expect(resultPromise).toEqual(10);
    })
})
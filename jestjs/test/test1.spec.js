const { createObject, getPromise } = require('../testFile');
// const {expect} = require('chai');
// const {jest} = require('@jest/globals')

const mockFn = jest.fn();

describe('create object test suite', function() {
    const a = new mockFn();
    const b = new mockFn()
    beforeAll(async () => {
        console.log('I am running before all tests');
    })

    beforeEach(async () => {
        console.log('I am running before EACH test');
    })

    afterAll(async () => {
        console.log('I am running after all tests');
    })

    afterEach(async () => {
        console.log('I am running after EACH test');
    })

    it('name and surname should be in object we do not pass atributes', async () => {
        const resultObj = createObject();
        expect(resultObj.name).toBeDefined;
        expect(resultObj.surname).toBeDefined
    })

    it('should be age parameter when we pass age as rest attribute', async () => {
        const resultObj = createObject('name', 'surname', {age: 18});
        expect(resultObj.age).toBeDefined;
        expect(resultObj.age).toEqual(18);
    })
    
    it('should return promise after 3 seconds', async () => {
        const resultPromise = await getPromise(10, 3000)
        expect(resultPromise).toEqual(10);
    })

    it('check mock', async () => {
        console.log(a);
        console.log(b)
    })

    it.each([
        ['string', 1000],
        [13, 1000],
        [true, 1000]
    ])('should return promise %p after %p seconds', async (promise, timeout) => {
        const resultPromise = await getPromise(promise, timeout)
        expect(resultPromise).toEqual(promise);
    })

})
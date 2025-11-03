const {expect} = require('chai')

describe('our first test suite', function() {
    before(async () => {
        console.log('I am running before all tests');
    })

    beforeEach(async () => {
        console.log('I am running before EACH test');
    })

    after(async () => {
        console.log('I am running after all tests');
    })

    afterEach(async () => {
        console.log('I am running after EACH test');
    })

    it('our first test case', async() => {
        expect(true).to.equal(true)
    })

    it('our second test case', async () => {
        expect('string').to.contain('str')
    })

    it('our third test case', async () => {
        expect([1, 2, 4]).to.contain(2)
    });

    [
        {string: 'fall', substr: 'fa'},
        {string: 'spring', substr: 'ing'},
        {string: 'autumn', substr: 'tu'},
    ].forEach((obj) => {
        it(`string ${obj.string} should contain substring ${obj.substr}`, async() => {
            expect(obj.string).to.contain(obj.substr)
        })
    })
})
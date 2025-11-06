const axios = require('axios');
const validar = require('jsonschema');
const getUserSchema = require('../schemas/get-users.v1.json')

describe.skip('API test User ', function() {
    let userResponse;
    beforeAll(async () => {
        userResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users');
    })

    test('GET Users should return 200 when send valid request', async () => {
        await expect(userResponse.status).toEqual(200)
    });

    test('GET Users should return valid response body', async () => {
        const validationResult = await validar.validate(userResponse.data, getUserSchema);
        await expect(validationResult.valid).toEqual(true)
    });

    test('GET Users should return 400 when send invalid url', async () => {
        let userResponse;
        try {
            userResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users133');
        } catch(err) {
            userResponse = err.response;
        }
        await expect(userResponse.status).toEqual(404)
    });
})
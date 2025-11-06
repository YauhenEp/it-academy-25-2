const {sendHttpRequest} = require('../helpers/sendHTTPRequest')
const validar = require('jsonschema');
const getUserSchema = require('../schemas/get-users.v1.json')

describe('API test User ', function() {
    let userResponse;
    beforeAll(async () => {
        const param = {
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Users'
        }
        userResponse = await sendHttpRequest(param);
    })

    test('GET Users should return 200 when send valid request', async () => {
        await expect(userResponse.status).toEqual(200)
    });

    test('GET Users should return valid response body', async () => {
        await expect(userResponse).toBeValidSchema(getUserSchema)
    });

    test('GET Users should return 400 when send invalid url', async () => {
        let userResponse;
        const param = {
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Users1213'
        }
        try {
            userResponse = await sendHttpRequest(param);
        } catch(err) {
            userResponse = err.response;
        }
        await expect(userResponse.status).toEqual(404)
    });
})
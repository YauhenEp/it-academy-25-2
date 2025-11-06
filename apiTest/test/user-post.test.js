const axios = require('axios');
const validar = require('jsonschema');
const postUserSchema = require('../schemas/post-users.v1.json')

describe.skip('API test User creation', function() {
    let userResponse;
    beforeAll(async () => {
        userResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
            "Content-Type": "application/json; v=1.0"
        }, {
            "id": 11,
            "userName": "User 11",
            "password": "Password11"
        });
    })

    test('POST Users should return 200 when send valid request', async () => {
        console.log(userResponse);
        await expect(userResponse.status).toEqual(200)
    });

    test('POST Users should return valid response body', async () => {
        const validationResult = await validar.validate(userResponse.data, postUserSchema);
        console.log(validationResult);
        await expect(validationResult.valid).toEqual(true)
    });

    test('POST Users should return 404 when send invalid url', async () => {
        let userResponse;
        try {
            userResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users133',
                {
                    "Content-Type": "application/json; v=1.0"
                }, {
                    "id": 11,
                    "userName": "User 11",
                    "password": "Password11"
                }
            );
        } catch(err) {
            userResponse = err.response;
        }
        await expect(userResponse.status).toEqual(404)
    });

    test('POST Users should return 400 when do not pass password', async () => {
        let userResponse;
        try {
            userResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users',
                {
                    "Content-Type": "application/json; v=1.0",
                    "accept": "*/*",
                    "Host": "fakerestapi.azurewebsites.net",
                    "Origin": "https://fakerestapi.azurewebsites.net"
                }, {
                    "id": 11,
                    "userName": "User 11",
                }
            );
        } catch(err) {
            userResponse = err.response;
        }
        await expect(userResponse.status).toEqual(400)
    });
})
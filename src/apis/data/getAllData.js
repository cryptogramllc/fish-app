const axios = require('axios');

const getAllData = async () => {
    try {
        const config = {
            method: 'get',
            url: 'http://localhost:8001/gofish?apikey=abrradiology',
            headers: {},
        };

        const response = await axios(config)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

module.exports = getAllData;

const axios = require("axios");

async function registerUser(name) {

    const response = await axios.post("/users", {name});
    return response.data

}

module.exports = registerUser

// console.log(response);
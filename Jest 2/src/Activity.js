const axios = require("axios");

async function getActivity() {

    const response = await axios.get("https://www.boredapi.com/api/activity");
    return response.data.activity

}

module.exports = getActivity
// getActivity().then(console.log) // remove before running test
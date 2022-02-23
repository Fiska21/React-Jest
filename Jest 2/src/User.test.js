const axios = require("axios") ;
const registerUser = require ("./User.js")

jest.mock("axios")

test("registerUser", async () => {

    axios.post.mockResolvedValue({
        data: {
          "userid" : "some-user-id"
        },
    })

    const activity = await registerUser();
    expect(activity).toEqual({"userid":"some-user-id"})
})
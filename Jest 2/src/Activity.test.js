
const axios = require("axios")
const getActivity = require("./Activity.js")

jest.mock("axios")

test("getActivity", async () => {

    axios.get.mockResolvedValue({
        data: {
            "activity": "Plant a tree",
            "type": "recreational",
            "participants": 1,
            "price": 0.3,
            "link": "",
            "key": "1942393",
            "accessibility": 0.3
        },
    })

    const activity = await getActivity();
    expect(activity).toEqual("Plant a tree")
})

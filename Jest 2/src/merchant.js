const httpMocks = require("node-mocks-http")
const {getById} = require("./merchants")

const mockFindOneMerchant = jest.fn();
jest.mock("../../storage",() => {
    return {
        models: {
            merchant:{
                findOne: () => mockFindOneMerchant
            }
        }
    }
})

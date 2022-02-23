// const { sum } = require("./sum")

// test("1+2 equals to  3" , () => {
//     const result = sum(1,2);
//     expect (result).toBe(3) ;
// } )

const { kilometerToMeter } = require("./sum")
test(
    "kilometerToMeter", () => {

        const result = kilometerToMeter(3)
        expect(result).toBe(3000)
    })

const { meterToKilometer } = require("./sum")
test(
    "meterToKilometer tes", () => {
        const result = meterToKilometer(5000);
        expect(result).toBe(5)
    }
)

const { circumference} = require("./sum")
test(
    "circumference of 1000 coin",() => {
        const result = circumference(10)
        expect(result).toBeCloseTo(62.831853,3)
    }
)
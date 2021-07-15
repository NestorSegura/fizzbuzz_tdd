
const { fizzBuzz } = require('./fizz-buzz')

describe("testing fizzbuzz function", () => {

    test("test buzz", () => {
        const expected = 'buzz'
        expect(fizzBuzz(5)).toBe(expected)

    })

    test("test fizz", () => {
        const expected = 'fizz'
        expect(fizzBuzz(3)).toBe(expected)
    })

    test("test fizzBuzz", () => {
        const expected = 'fizzBuzz'
        expect(fizzBuzz(15)).toBe(expected)
    })

    test("test output number",  () => {
        expect(fizzBuzz(1)).toBe(1);
    })

})
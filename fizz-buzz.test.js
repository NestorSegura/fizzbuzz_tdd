
const { fizzBuzz } = require('./fizz-buzz')

describe("testing fizzbuzz function", () => {

    test("test buzz", () => {
        const expected = 'buzz'
        expect(fizzBuzz(5)).toBe(expected)
        expect(fizzBuzz(10)).toBe(expected)
        expect(fizzBuzz(20)).toBe(expected)
        expect(fizzBuzz(25)).toBe(expected)
        expect(fizzBuzz(35)).toBe(expected)

    })

    test("test fizz", () => {
        const expected = 'fizz'
        expect(fizzBuzz(3)).toBe(expected)
        expect(fizzBuzz(6)).toBe(expected)
        expect(fizzBuzz(9)).toBe(expected)
        expect(fizzBuzz(12)).toBe(expected)
        expect(fizzBuzz(18)).toBe(expected)
    })

    test("test fizzBuzz", () => {
        const expected = 'fizzBuzz'
        expect(fizzBuzz(15)).toBe(expected)
        expect(fizzBuzz(30)).toBe(expected)
        expect(fizzBuzz(45)).toBe(expected)
        expect(fizzBuzz(60)).toBe(expected)
        expect(fizzBuzz(75)).toBe(expected)
    })

    test("test output number",  () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
        expect(fizzBuzz(7)).toBe(7);
        expect(fizzBuzz(8)).toBe(8);
    })

})
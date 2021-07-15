
const fizzBuzz = (number) => {

    if (number % 5 === 0) {
        return 'buzz'
    }
    
    if (number % 3 === 0) {
        return 'fizz'
    }

}

module.exports = {
    fizzBuzz
}
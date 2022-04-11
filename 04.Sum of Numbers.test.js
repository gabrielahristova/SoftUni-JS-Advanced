const expect = require('chai').expect;
const sum = require('./04. Sum of Numbers');

describe('Sum of Numbers', function () {
    it('Should return the sum of the numbers in the array', function () {
        let numbers = [1, 2, 3, 4, 5];
        let expectedSum = 15;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    })
})

it('Should return the sum with negative numbers in the array', function () {
    let numbers = [1, 2, 3, 4, -5];
        let expectedSum = 5;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
})

it('Should return zero when only zeroes is given', function () {
    let numbers = [0, 0, 0, 0];
        let expectedSum = 0;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
})
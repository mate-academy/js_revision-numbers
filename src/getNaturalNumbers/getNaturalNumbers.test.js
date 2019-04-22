'use strict';

const getNaturalNumbers = require('./getNaturalNumbers');

describe('Testing getNaturalNumbers', () => {
  test('Should return array of numbers for N > 1', () => {
    expect(getNaturalNumbers(11))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test('Should single number array for N = 1', () => {
    expect(getNaturalNumbers(1))
      .toEqual([1]);
  });
});

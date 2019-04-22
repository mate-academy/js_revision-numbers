'use strict';

const getDivisors = require('./getDivisors');

describe('Testing getDivisors', () => {
  test('Should return single number array for 1', () => {
    expect(getDivisors(1))
      .toEqual([1]);
  });

  test('Should return array of divisors for N > 1', () => {
    expect(getDivisors(24))
      .toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
  });
});

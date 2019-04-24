'use strict';

const getDivisorsCount = require('./getDivisorsCount');

describe('Testing getDivisorsCount', () => {
  test('Should return 1 for 1', () => {
    expect(getDivisorsCount(1))
      .toBe(1);
  });

  test('Should return a count of divisors for N > 1', () => {
    expect(getDivisorsCount(24))
      .toBe(8);
  });
});

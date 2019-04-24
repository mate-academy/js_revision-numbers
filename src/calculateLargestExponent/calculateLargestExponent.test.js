'use strict';

const calculateLargestExponent = require('./calculateLargestExponent');

describe('Testing calculateLargestExponent', () => {
  test('Should return bigger exponentiation when (M pow N) > (N pow M)', () => {
    expect(calculateLargestExponent(4, 3))
      .toBe(81);
  });

  test('Should return bigger exponentiation when (M pow N) < (N pow M)', () => {
    expect(calculateLargestExponent(2, 5))
      .toBe(32);
  });

  test('Should return 1 when one of the arguments is 0',
    () => {
      expect(calculateLargestExponent(3, 0))
        .toBe(1);
    });

  test('Should return another argument when one of the arguments is 1',
    () => {
      expect(calculateLargestExponent(56, 1))
        .toBe(56);
    });

  test('Should return any of the expressions when numbers are equal', () => {
    expect(calculateLargestExponent(4, 4))
      .toBe(256);
  });
});

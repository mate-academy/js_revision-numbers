'use strict';

const generateRandomInteger = require('./generateRandomInteger');

describe('Testing generateRandomInteger', () => {
  test('Should return 1 for 1', () => {
    expect(generateRandomInteger(1))
      .toBe(1);
  });

  test('Should return integer', () => {
    const number = generateRandomInteger(10);
    expect(number % Math.trunc(number))
      .toBe(0);
  });

  test('Should generate numbers in range [1, N] when called many times',
    () => {
      let min = 200;
      let max = 0;
      for (let i = 1; i < 1000; i += 1) {
        const number = generateRandomInteger(200);
        min = number < min ? number : min;
        max = number > max ? number : max;
      }
      expect(min)
        .toBeGreaterThanOrEqual(1);
      expect(max)
        .toBeLessThanOrEqual(200);
    });
});

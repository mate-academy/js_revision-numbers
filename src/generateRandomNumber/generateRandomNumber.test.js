'use strict';

const generateRandomNumber = require('./generateRandomNumber');

describe('Testing generateRandomNumber', () => {
  test('Should generate numbers in range [1, 10) when called many times',
    () => {
      let min = 10;
      let max = 0;
      for (let i = 1; i < 1000; i += 1) {
        const number = generateRandomNumber();
        min = number < min ? number : min;
        max = number > max ? number : max;
      }
      expect(min)
        .toBeGreaterThanOrEqual(1);
      expect(max)
        .toBeLessThan(10);
    });
});

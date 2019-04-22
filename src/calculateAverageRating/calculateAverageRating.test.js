'use strict';

const calculateAverageRating = require('./calculateAverageRating');

describe('Testing calculateAverageRating', () => {
  test('Should return 0 for zero rates', () => {
    expect(calculateAverageRating(0, 0, 0, 0, 0))
      .toBe(0);
  });

  test('Should process only rated numbers', () => {
    expect(calculateAverageRating(0, 0, 0, 0, 5))
      .toBe(5);
  });

  test('Should return correct average rating', () => {
    expect(calculateAverageRating(1, 2, 0, 45, 11))
      .toBeCloseTo(4.07, 2);
  });

  test('Should process big numbers', () => {
    expect(calculateAverageRating(
      1234, 2151235, 351351345, 4112351, 1123151))
      .toBeCloseTo(3.01, 2);
  });
});

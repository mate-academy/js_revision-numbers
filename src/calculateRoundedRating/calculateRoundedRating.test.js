'use strict';

const calculateRoundedRating = require('./calculateRoundedRating');

describe('Testing calculateRoundedRating', () => {
  test('Should round 0 to 0', () => {
    expect(calculateRoundedRating(0))
      .toBe(0);
  });

  test('Should round average of half points to the upper integer.', () => {
    expect(calculateRoundedRating(2.5))
      .toBe(3);
  });

  test(`Should round rating smaller than average of half points to the lower 
    point.`,
  () => {
    expect(calculateRoundedRating(3.49999))
      .toBe(3);
  });

  test('Should round integer numbers to the integer', () => {
    expect(calculateRoundedRating(4))
      .toBe(4);
  });

  test('Should round right end of rating interval correctly.', () => {
    expect(calculateRoundedRating(4.9))
      .toBe(5);
  });
});

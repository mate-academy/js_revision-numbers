'use strict';

const isEven = require('./isEven');

describe('Testing isEven', () => {
  test('Should return true for even number', () => {
    expect(isEven(2))
      .toBe(true);
  });

  test('Should return false for odd number', () => {
    expect(isEven(3))
      .toBe(false);
  });

  test('Should return true zero', () => {
    expect(isEven(0))
      .toBe(true);
  });

  test('Should process big numbers', () => {
    expect(isEven(2384528374))
      .toBe(true);
  });
});

'use strict';

const isDivisible = require('./isDivisible');

describe('Testing isDivisible', () => {
  test('Should return true for division without remainder', () => {
    expect(isDivisible(10, 5))
      .toBe(true);
  });

  test('Should return false for division with remainder', () => {
    expect(isDivisible(10, 3))
      .toBe(false);
  });

  test('Should return true for zero number', () => {
    expect(isDivisible(0, 1000))
      .toBe(true);
  });

  test('Should process big numbers', () => {
    expect(isDivisible(2384528374, 354))
      .toBe(false);
  });
});

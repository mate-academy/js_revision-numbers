'use strict';

const exponentiation = require('./exponentiation');

describe('Testing exponentiation', () => {
  test('Should process a number to the power of 2', () => {
    expect(exponentiation(3, 2))
      .toBe(9);
  });

  test('Should do correct exponentiation for exponent > 2', () => {
    expect(exponentiation(3, 10))
      .toBe(59049);
  });

  test('Exponentiation with base = 0 should return 0', () => {
    expect(exponentiation(0, 104567423))
      .toBe(0);
  });

  test('Exponentiation with exponent = 0 should return 1', () => {
    expect(exponentiation(382475293, 0))
      .toBe(1);
  });

  test('Exponentiation with exponent = 1 should return base', () => {
    expect(exponentiation(342523, 1))
      .toBe(342523);
  });
});

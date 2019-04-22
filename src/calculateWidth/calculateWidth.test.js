'use strict';

const calculateWidth = require('./calculateWidth');

describe('Testing calculateWidth', () => {
  test('Should return correct width', () => {
    expect(calculateWidth('150px', '10%'))
      .toBe(15);
  });

  test('Should return correct width if result is float number', () => {
    expect(calculateWidth('150px', '15%'))
      .toBe(22.5);
  });

  test('Should return correct width for percentage > 100', () => {
    expect(calculateWidth('1350px', '200%'))
      .toBe(2700);
  });

  test('Should return 0 for zero percentage', () => {
    expect(calculateWidth('1350px', '0%'))
      .toBe(0);
  });

  test('Should return 0 for zero width', () => {
    expect(calculateWidth('0px', '25%'))
      .toBe(0);
  });

  test('Should return 0 if width is incorrect.', () => {
    expect(calculateWidth('px1200px', '10%'))
      .toBe(0);
  });

  test('Should return 0 if percentage is incorrect.', () => {
    expect(calculateWidth('1200px', '%10%'))
      .toBe(0);
  });
});

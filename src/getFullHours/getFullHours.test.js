'use strict';

const getFullHours = require('./getFullHours');

describe('Testing getFullHours', () => {
  test('Should return 0 for 0', () => {
    expect(getFullHours(0))
      .toBe(0);
  });

  test('Should return 0 minutes < 60', () => {
    expect(getFullHours(59))
      .toBe(0);
  });

  test('Should return correct number of full hours', () => {
    expect(getFullHours(453))
      .toBe(7);
  });

  test('Should process big numbers', () => {
    expect(getFullHours(45323847569))
      .toBe(755397459);
  });
});

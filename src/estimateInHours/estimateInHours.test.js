'use strict';

const estimateInHours = require('./estimateInHours');

describe('Testing estimateInHours', () => {
  test('Should return 0 for zero tasks', () => {
    expect(estimateInHours(10, 0))
      .toBe(0);
  });

  test('Should return 1 for productivity > tasks', () => {
    expect(estimateInHours(10, 5))
      .toBe(1);
  });

  test(
    `Should return correct amount of full hours needed to complete all given 
    tasks`,
    () => {
      expect(estimateInHours(3, 34))
        .toBe(12);
    });

  test('Should process big numbers', () => {
    expect(estimateInHours(45323847569, 2837465283765))
      .toBe(63);
  });
});

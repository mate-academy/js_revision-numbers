'use strict';

const formatTime = require('./formatTime');

describe('Testing formatTime', () => {
  test('Should return double zero of minutes for full hours', () => {
    expect(formatTime(60))
      .toBe('1:00');
  });

  test('Should return zero of hours for minutes < 60', () => {
    expect(formatTime(59))
      .toBe('0:59');
  });

  test('Should return zero of hours and double zero of minutes for 0', () => {
    expect(formatTime(0))
      .toBe('0:00');
  });

  test('Should format time correctly', () => {
    expect(formatTime(453))
      .toBe('7:33');
  });

  test('Should process big numbers', () => {
    expect(formatTime(45323847569))
      .toBe('755397459:29');
  });
});

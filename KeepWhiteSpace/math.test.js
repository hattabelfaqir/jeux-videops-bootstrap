import { Vec, getTimeStr } from './math.js';

describe('Vec', () => {
  test('new Vec(1, 2) returns {x: 1, y: 2}', () => {
    expect(new Vec(1, 2)).toEqual({x: 1, y: 2});
  });

  test('new Vec(1, 2).add(new Vec(3, 4)) returns {x: 4, y: 6}', () => {
    expect(new Vec(1, 2).add(new Vec(3, 4))).toEqual({x: 4, y: 6});
  });

  test('new Vec(0,0).add(new Vec(0,0)) reurns {x:0, y:0}', () => {
    expect(new Vec(0, 0).add(new Vec(0, 0))).toEqual({x:0, y:0});
  });

  test('new Vec(1, 2).mul(-2, 3) returns {x: -2, y: 6}', () => {
    expect(new Vec(1, 2).mul(-2, 3)).toEqual({x: -2, y: 6});
  });

  test('new Vec(5,5).mul(2) returns {x:10, y:10}', () => {
    expect(new Vec(5, 5).mul(2)).toEqual({x:10, y:10});
  });

  test('new Vec(1, 2).dot(new Vec(2, 1)) returns 4', () => {
    expect(new Vec(1, 2).dot(new Vec(2, 1))).toBe(4);
  });

  test('new Vec(3, 4).dot(new Vec(0, 0)) returns 0', () => {
    expect(new Vec(3, 4).dot(new Vec(0, 0))).toBe(0);
  });

  test('new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)) returns 24', () => {
    expect(new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3))).toBe(24);
  });


  test('complex dot product returns 57', () => {
    const result = new Vec(1, 2).dot(
      new Vec(1, 2).add(
        new Vec(
          new Vec(1, 2).dot(new Vec(2, 1)),
          new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3))
        )
      )
    );
    expect(result).toBe(57);
  });

  test('new Vec(1, 2).add(3) returns {x: NaN, y: NaN}', () => {
    expect(new Vec(1, 2).add(3)).toEqual({x: NaN, y: NaN});
  });

  test('new Vec(1, 1).cross(new Vec(-42, -42)) returns 0', () => {
    expect(new Vec(1, 1).cross(new Vec(-42, -42))).toBe(0);
  });

  test('new Vec(0, 0).cross(new Vec(5, 5)) returns 0', () => {
    expect(new Vec(0, 0).cross(new Vec(5, 5))).toBe(0);
  });
});

describe('getTimeStr', () => {
  test('getTimeStr(424242) returns "7:04.24"', () => {
    expect(getTimeStr(424242)).toBe('7:04.24');
  });

  test('getTimeStr(-123456) returns "-3:-4.-4"', () => {
    expect(getTimeStr(-123456)).toBe('-3:-4.-4');
  });

  test('getTimeStr(0) returns "0:00.00"', () => {
    expect(getTimeStr(0)).toBe('0:00.00');
  });
});

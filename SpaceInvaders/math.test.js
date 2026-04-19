import {
  clamp,
  lerp,
} from './src/ts/math/math.ts';

import {
  toVector,
  distance,
} from './src/ts/math/polar-vector.ts';

import {
  normalize,
  dot,
  add,
  subtract,
} from './src/ts/math/vector.ts';

describe('clamp', () => {
  test('clamp(1, 10, 2) returns 2', () => {
    expect(clamp(1, 10, 2)).toBe(2);
  });

  test('clamp(1, 10, -12) returns 1', () => {
    expect(clamp(1, 10, -12)).toBe(1);
  });

  test('clamp(1, 10, 10) returns 10', () => {
    expect(clamp(1, 10, 10)).toBe(10);
  });

  test('clamp(1, 10, 1) returns 1', () => {
    expect(clamp(1, 10, 1)).toBe(1);
  });
});

describe('lerp', () => {
  test('lerp(1, 10, 2) returns 19', () => {
    expect(lerp(1, 10, 2)).toBe(19);
  });

  test('lerp(1, 10, -12) returns -107', () => {
    expect(lerp(1, 10, -12)).toBe(-107);
  });

  test('lerp(0, 10, 0.5) returns 5', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
});

describe('distance', () => {
  test('distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }) returns 98.30248290540649', () => {
    expect(distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 })).toBe(98.30248290540649);
  });

  test('distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 }) returns 141.76346189546945', () => {
    expect(distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 })).toBe(141.76346189546945);
  });
});

describe('toVector', () => {
  test('toVector({ angle: 5, radius: 50 }) returns {x: 14.183109273161312, y: -47.946213733156924}', () => {
    expect(toVector({ angle: 5, radius: 50 })).toEqual({x: 14.183109273161312,y: -47.946213733156924});
  });
});

describe('normalize', () => {
  test('normalize({ x: 5, y: 50 }) returns {x: 0.09950371902099892, y: 0.9950371902099892}', () => {
    expect(normalize({ x: 5, y: 50 })).toEqual({x: 0.09950371902099892,y: 0.9950371902099892});
  });
});

describe('dot', () => {
  test('dot({ x: 5, y: 50 }, { x: 10, y: 100 }) returns 5050', () => {
    expect(dot({ x: 5, y: 50 }, { x: 10, y: 100 })).toBe(5050);
  });

  test('dot({ x: 0, y: 0 }, { x: 5, y: 50 }) returns 0', () => {
    expect(dot({ x: 0, y: 0 }, { x: 5, y: 50 })).toBe(0);
  });
});

describe('add', () => {
  test('add({ x: 5, y: 50 }, { x: 10, y: 100 }) returns {x: 15, y: 150}', () => {
    expect(add({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: 15, y: 150 });
  });
});

describe('subtract', () => {
  test('subtract({ x: 5, y: 50 }, { x: 10, y: 100 }) returns {x: -5, y: -50}', () => {
    expect(subtract({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: -5, y: -50 });
  });
});

import {
  clamp,
  lerp,
  mapLinear,
  randFloat,
  randFloatSpread,
} from './src/math.js';

describe('randFloatSpread', () => {
  test('randFloatSpread(1) <= 1 returns true', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  });
  
  test('randFloatSpread(1) >= -1 returns true', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  });
})

describe('mapLinear', () => {
  test('mapLinear(1,2,3,4,5) returns 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });
  
  test('mapLinear(1,20,3,40,5) returns 0.882...', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });
})

describe('lerp', () => {
  test('lerp(1,3,20) returns 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });
  test('lerp(1.3,-7,2) returns -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
})

describe('clamp', () => {
  test('clamp(5,0,10) returns 5', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  
  test('clamp(-1,0,10) returns 0', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });
  
  test('clamp(15,0,10) returns 10', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
})

describe('randFloat', () => {
  test('randFloat(0,10) is between 0 and 10', () => {
    var result = randFloat(0, 10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });
  
  test('randFloat(5,5) returns 5', () => {
    expect(randFloat(5, 5)).toBe(5);
  });
})

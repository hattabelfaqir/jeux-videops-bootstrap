/**
 * @param {number} min
 * @param {number} max
 * @param {number} v
 * @return {number}
 */
export function clamp(min: number, max: number, v: number) {
  return v > max ? max : v < min ? min : v;
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} v
 * @return {number}
 */
export function lerp(start: number, end: number, v: number) {
  return start + (end - start) * v;
}

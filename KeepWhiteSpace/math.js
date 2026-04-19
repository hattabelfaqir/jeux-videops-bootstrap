/** 2D vector. */
class Vec {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Vec} v
   * @return {Vec}
   */
  add(v) {
    return new Vec(this.x + v.x, this.y + v.y);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {Vec}
   */
  mul(x, y) {
    const sy = y || x;
    return new Vec(this.x * x, this.y * sy);
  }

  /**
   * @param {Vec} v
   * @return {number}
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * @param {Vec} v
   * @return {number}
   */
  cross(v) {
    return this.x * v.y - v.x * this.y;
  }

  /**
   * @param {number} dx
   * @param {number} dy
   */
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

/**
 * @param {number} dt
 * @return {string}
 */
function getTimeStr(dt) {
  const timeMs = `${Math.floor((dt % 1000) / 10)}0`.slice(0, 2);
  const timeS = `0${Math.floor(dt / 1000) % 60}`.slice(-2);
  const timeM = Math.floor(dt / 1000 / 60);
  return `${timeM}:${timeS}.${timeMs}`;
}

export {Vec, getTimeStr};

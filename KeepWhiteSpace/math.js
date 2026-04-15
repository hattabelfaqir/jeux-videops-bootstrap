class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vec(this.x + v.x, this.y + v.y);
  }

  mul(x, y) {
    var y = y || x;
    return new Vec(this.x * x, this.y * y);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - v.x * this.y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

function getTimeStr(dt) {
  const timeMs = `${Math.floor((dt % 1000) / 10)}0`.slice(0, 2);
  const timeS = `0${Math.floor(dt / 1000) % 60}`.slice(-2);
  const timeM = Math.floor(dt / 1000 / 60);
  return `${timeM}:${timeS}.${timeMs}`;
}

export { Vec, getTimeStr };

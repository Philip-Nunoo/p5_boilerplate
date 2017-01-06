class Bullet {
  constructor(p, x, y, xDir, yDir) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.xDir = xDir;
    this.yDir = yDir;
  }

  show() {
    this.p.fill(32);
    this.p.rect(this.x, this.y, 10, 10);
  }

  move() {
    this.x = this.x + this.xDir * 3;
    this.y = this.y + this.yDir * 3;
  }
}

export default Bullet;

import Bullet from './bullet';

const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';

class Shape {

  constructor(p) {
    this.p = p;
    this.x = p.width/2;
    this.y = p.height/2;

    this.yDir = 0;
    this.xDir = 0;

    this.xFireDir = 0;
    this.yFireDir = -1;
  }

  show() {
    this.p.fill(255);
    this.p.rect(this.x, this.y, 10, 10);
  }

  moveVertical() {
    this.y = this.y + this.yDir*5;
  }

  moveHorizontal(x) {
    this.x = this.x + this.xDir*5;
  }

  setDirection(direction) {
    switch (direction) {
      case UP:
        this.xDir = this.xFireDir = 0;
        this.yDir = this.yFireDir = -1;
        break;
      case DOWN:
        this.xDir = this.xFireDir = 0;
        this.yDir = this.yFireDir = 1;
        break;
      case LEFT:
        this.xDir = this.xFireDir = -1;
        this.yDir = this.yFireDir = 0;
        break;
      case RIGHT:
        this.xDir = this.xFireDir = 1;
        this.yDir = this.yFireDir = 0;
        break;
      default:
        this.xDir = 0;
        this.yDir = 0;
        return;

    }
  }

  fire() {
    return new Bullet(this.p, this.x, this.y, this.xFireDir, this.yFireDir);
  }
}

Shape.LEFT = LEFT;
Shape.RIGHT = RIGHT;
Shape.UP = UP;
Shape.DOWN = DOWN;

export default Shape;

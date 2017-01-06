import Shape from './shape';
import Bullet from './bullet';

const SPACE_BAR = 32;
const UP_ARROW = 38;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;

const App = (p) => {
  let shape, bullets = [];

  p.setup = () => {
    p.createCanvas(600, 400);
    shape = new Shape(p);
  }

  p.draw = () => {
    p.background(0);
    shape.show();

    shape.moveVertical();
    shape.moveHorizontal();

    for (var i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].move();
    }
  }

  p.keyPressed = () => {
    switch (p.keyCode) {
      case UP_ARROW:
        shape.setDirection(Shape.UP);
        break;
      case LEFT_ARROW:
        shape.setDirection(Shape.LEFT);
        break;
      case RIGHT_ARROW:
        shape.setDirection(Shape.RIGHT);
        break;
      case DOWN_ARROW:
        shape.setDirection(Shape.DOWN);
        break;
      case SPACE_BAR:
        bullets.push(shape.fire(Shape.DOWN));
        break;
      default:
        return;
    }
  }

  p.keyReleased = () => {
    switch (p.keyCode) {
      case UP_ARROW:
        shape.setDirection(0);
        break;
      case LEFT_ARROW:
        shape.setDirection(0);
        break;
      case RIGHT_ARROW:
        shape.setDirection(0);
        break;
      case DOWN_ARROW:
        shape.setDirection(0);
        break;
      default:
        return;
    }
  }

}

export default App;

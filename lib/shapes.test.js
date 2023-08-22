const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should render a circle given a color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Triangle', () => {
  it('should render a triangle given a color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150 30, 250 150, 50 150" fill="blue" />');
  });
});

describe('Square', () => {
  it('should render a square given a color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
  });
});
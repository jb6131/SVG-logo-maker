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
    expect(shape.render()).toEqual('<polygon points="150 10, 280 160, 20 160" fill="blue" />');
  });
});

describe('Square', () => {
  it('should render a square given a color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="green" />');
  });
});
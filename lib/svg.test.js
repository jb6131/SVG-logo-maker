const generateSVG = require('./svg');
const shape = require('./shapes');

describe('generateSVG', () => {
  it('generates an SVG of a blue Circle with white text that says SVG', () => {
    const circle = new shape.Circle();
    circle.setColor("blue");

    const svg = generateSVG(circle, "SVG", "white");

    expect(svg).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="blue" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
    </svg>`);
  });

  it('generates an SVG of a green Triangle with red text that says XYZ', () => {
    const triangle = new shape.Triangle();
    triangle.setColor("green");

    const svg = generateSVG(triangle, "XYZ", "red");

    expect(svg).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="150 30, 250 150, 50 150" fill="green" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">XYZ</text>
      
    </svg>`);
  });

  it('generates an SVG of a purple Square with yellow text that says ABC', () => {
    const square = new shape.Square();
    square.setColor("purple");

    const svg = generateSVG(square, "ABC", "yellow");

    expect(svg).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="100" y="50" width="100" height="100" fill="purple" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">ABC</text>
      
    </svg>`);
  });
});
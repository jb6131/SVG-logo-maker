class Circle {
  constructor() {
    this.radius = 80;
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.points = "150 30, 250 150, 50 150";
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.sideLength = 100;
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="100" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square };
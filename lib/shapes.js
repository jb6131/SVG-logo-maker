class Circle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150 30, 250 150, 50 150" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square };
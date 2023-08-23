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
    return `<polygon points="150 10, 280 160, 20 160" fill="${this.color}" />`;
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
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square };
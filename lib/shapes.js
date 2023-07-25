class Shape {
    shapeColour(colour) {
      this.colour = colour;
    }
  
    render() {
      return '';
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.colour}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.colour}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="100" y="100" width="100" height="100" fill="${this.colour}" />`;
    }
  }

  module.exports = {Circle, Triangle, Square};

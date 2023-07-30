const { Circle, Triangle, Square } = require("./shapes");
class Shape {
  shapeColour(colour) {
    this.colour = colour;
  }
}

// Tests to check if a colour input is generated to my shapes classes
describe("Shapes rendered with colour", () => {
  test("Circle rendered blue!", () => {
    const shape = new Circle();
    shape.shapeColour("blue");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="110" r="50" fill="blue" />`
    );
  });

  test("Triangle rendered red!", () => {
    const shape = new Triangle();
    shape.shapeColour("red");
    expect(shape.render()).toEqual(
      `<polygon points="150,50 100,150 200,150" fill="red" />`
    );
  });

  test("Square rendered white!", () => {
    const shape = new Square();
    shape.shapeColour("white");
    expect(shape.render()).toEqual(
      `<rect x="100" y="60" width="100" height="100" fill="white" />`
    );
  });
});

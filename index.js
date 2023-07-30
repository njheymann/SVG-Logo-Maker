const fs = require("fs");
const inquirer = require("inquirer");
const Shape = require("./lib/shapes");

// Function to create a file when generateSVG prompts are finished.
const createSVGFile = (svgContent) => {
  fs.writeFile("logo.svg", svgContent, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
};

// Function to create a string based on user inputs
const generateSVG = (initials, textColor, logoShape, shapeColor) => {
  let shape;
  switch (logoShape) {
    case "circle":
      shape = new Shape.Circle();
      break;
    case "triangle":
      shape = new Shape.Triangle();
      break;
    case "square":
      shape = new Shape.Square();
      break;
  }

  shape.shapeColour(shapeColor);
  const renderedShape = shape.render();
  const text = `<text x="50%" y="60%" text-anchor="middle" fill="${textColor}" font-size="30">${initials}</text>`;

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderedShape}${text}</svg>`;
};
// Inquirer questions
const runInquirer = async () => {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "initials",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "logoShape",
      message: "Choose a logo shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (color keyword or hexadecimal number):",
    },
  ]);

  const { initials, textColor, logoShape, shapeColor } = userInput;
  const svgContent = generateSVG(initials, textColor, logoShape, shapeColor);
  createSVGFile(svgContent);
};

runInquirer();

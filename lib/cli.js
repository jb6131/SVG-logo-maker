const inquirer = require('inquirer');
const path = require('path');
const { writeFile } = require('fs/promises');
const shapeObject = require('./shapes');
const generateSVG = require('./svg');

const validateInput = (input) => {
  if (input.length > 3) {
    return 'Please only enter up to 3 characters!';
  }
  return true;
}

class CLI {
  async run() {
    const userInput = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to 3 characters for your logo:',
          validate: validateInput
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the color you would like the text to be (color keyword or hexadecimal number):'
        },
        {
          type: 'list',
          name: 'chosenShape',
          message: 'Select which shape you would like the logo to be:',
          choices: ['Circle', 'Triangle', 'Square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the color you would like the shape to be (color keyword or hexadecimal number):'
        }
      ]);

      let shape;

      if (userInput.chosenShape === 'Circle') {
        shape = new shapeObject.Circle();
      } else if (userInput.chosenShape === 'Triangle') {
        shape = new shapeObject.Triangle();
      } else if (userInput.chosenShape === 'Square') {
        shape = new shapeObject.Square();
      }

      shape.setColor(userInput.shapeColor);

      writeFile(path.join(__dirname, '..', 'output', 'logo.svg'), generateSVG(shape, userInput.text, userInput.textColor));

      console.log('Generated logo.svg');
  }
}

module.exports = CLI;
const { Circle, Triangle, Square } = require('./shapes'); 

describe('Shapes Rendering', (color) => {
  test.each([
    [Circle, `'${color}', '<circle cx="150" cy="100" r="50" fill="${color}" />'`],
    [Triangle, `'${color}', '<polygon points="150,50 100,150 200,150" fill="${color}" />'`],
    [Square, `'${color}', '<rect x="100" y="100" width="100" height="100" fill="${color}" />'`],
    
  ])
});
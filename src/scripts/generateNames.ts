const fs = require('fs');
const path = require('path');
const { generateAnimalNames } = require('../utils/nameGeneratorUtil');

const animals = ['alpaca', 'bat', 'ant', 'alligator', 'ape'];

animals.forEach(animal => {
  const names = generateAnimalNames(animal);
  const fileContent = {
    animal,
    names: {
      male: names.male,
      female: names.female
    }
  };

  const filePath = path.join(__dirname, '..', 'data', `${animal}_names.json`);
  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
  console.log(`Generated ${animal}_names.json with ${names.male.length} male names and ${names.female.length} female names`);
}); 
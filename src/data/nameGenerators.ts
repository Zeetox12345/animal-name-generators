import { AnimalNames, AnimalType } from './types';
import antNames from './ant_names.json';
import alpacaNames from './alpaca_names.json';
import batNames from './bat_names.json';
import alligatorNames from './alligator_names.json';
import apeNames from './ape_names.json';

// Map to store all loaded name generators
const nameGenerators: Record<string, AnimalNames> = {
  ant: antNames as AnimalNames,
  alpaca: alpacaNames as AnimalNames,
  bat: batNames as AnimalNames,
  alligator: alligatorNames as AnimalNames,
  ape: apeNames as AnimalNames,
};

/**
 * Gets multiple random names from the specified animal generator and gender
 * @param animal The type of animal to generate names for
 * @param gender The gender of the names to generate ('male' or 'female')
 * @param count The number of names to generate
 * @returns An array of random names
 */
export function getRandomNames(animal: AnimalType, gender: 'male' | 'female', count: number = 10): string[] {
  const generator = nameGenerators[animal.toLowerCase()];
  if (!generator) {
    throw new Error(`No name generator found for animal type: ${animal}`);
  }

  const names = generator.names[gender];
  if (!names || names.length === 0) {
    throw new Error(`No ${gender} names found for animal type: ${animal}`);
  }

  const selectedNames: string[] = [];
  const usedIndexes = new Set<number>();

  while (selectedNames.length < Math.min(count, names.length)) {
    const randomIndex = Math.floor(Math.random() * names.length);
    if (!usedIndexes.has(randomIndex)) {
      selectedNames.push(names[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return selectedNames;
}

/**
 * Gets all available animal types that have name generators
 * @returns Array of available animal types
 */
export function getAvailableAnimals(): string[] {
  return Object.keys(nameGenerators);
}

/**
 * Adds a new name generator to the collection
 * @param generator The name generator to add
 */
export function addNameGenerator(generator: AnimalNames) {
  nameGenerators[generator.animal.toLowerCase()] = generator;
} 
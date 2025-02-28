import { AnimalNames, AnimalType } from './types';
import antNames from './ant_names.json';
import alpacaNames from './alpaca_names.json';
import batNames from './bat_names.json';
import alligatorNames from './alligator_names.json';
import apeNames from './ape_names.json';
import bearNames from './bear_names.json';
import beeNames from './bee_names.json';
import beetleNames from './beetle_names.json';
import birdNames from './bird_names.json';
import butterflyNames from './butterfly_names.json';
import capybaraNames from './capybara_names.json';
import catNames from './cat_names.json';
import chickenNames from './chicken_names.json';
import chameleonNames from './chameleon_names.json';
import chipmunkNames from './chipmunk_names.json';
import cheetahNames from './cheetah_names.json';
import cowNames from './cow_names.json';
import crabNames from './crab_names.json';
import cricketNames from './cricket_names.json';
import crocodileNames from './crocodile_names.json';
import deerNames from './deer_names.json';
import dogNames from './dog_names.json';
import dolphinNames from './dolphin_names.json';
import donkeyNames from './donkey_names.json';
import duckNames from './duck_names.json';
import eagleNames from './eagle_names.json';
import elephantNames from './elephant_names.json';
import ferretNames from './ferret_names.json';
import fishNames from './fish_names.json';
import flamingoNames from './flamingo_names.json';
import flyNames from './fly_names.json';
import foxNames from './fox_names.json';
import frogNames from './frog_names.json';
import giraffeNames from './giraffe_names.json';
import goatNames from './goat_names.json';

// Map to store all loaded name generators
const nameGenerators: Record<string, AnimalNames> = {
  ant: antNames as AnimalNames,
  alpaca: alpacaNames as AnimalNames,
  bat: batNames as AnimalNames,
  alligator: alligatorNames as AnimalNames,
  ape: apeNames as AnimalNames,
  bear: bearNames as AnimalNames,
  bee: beeNames as AnimalNames,
  beetle: beetleNames as AnimalNames,
  bird: birdNames as AnimalNames,
  butterfly: butterflyNames as AnimalNames,
  capybara: capybaraNames as AnimalNames,
  cat: catNames as AnimalNames,
  chicken: chickenNames as AnimalNames,
  chameleon: chameleonNames as AnimalNames,
  chipmunk: chipmunkNames as AnimalNames,
  cheetah: cheetahNames as AnimalNames,
  cow: cowNames as AnimalNames,
  crab: crabNames as AnimalNames,
  cricket: cricketNames as AnimalNames,
  crocodile: crocodileNames as AnimalNames,
  deer: deerNames as AnimalNames,
  dog: dogNames as AnimalNames,
  dolphin: dolphinNames as AnimalNames,
  donkey: donkeyNames as AnimalNames,
  duck: duckNames as AnimalNames,
  eagle: eagleNames as AnimalNames,
  elephant: elephantNames as AnimalNames,
  ferret: ferretNames as AnimalNames,
  fish: fishNames as AnimalNames,
  flamingo: flamingoNames as AnimalNames,
  fly: flyNames as AnimalNames,
  fox: foxNames as AnimalNames,
  frog: frogNames as AnimalNames,
  giraffe: giraffeNames as AnimalNames,
  goat: goatNames as AnimalNames,
};

/**
 * Generates a random name for the specified animal
 * @param animal The type of animal to generate a name for
 * @returns A random name
 */
export function generateAnimalName(animal: AnimalType): string {
  const gender = Math.random() < 0.5 ? 'male' : 'female';
  const names = getRandomNames(animal, gender, 1);
  return names[0] || 'No name found';
}

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
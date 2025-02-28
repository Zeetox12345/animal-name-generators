export interface AnimalNames {
  animal: string;
  names: {
    male: string[];
    female: string[];
  };
}

// Type to represent all available animal generators
export type AnimalType = 'ant' | 'alpaca' | 'bat' | 'alligator' | 'ape' | 'bear' | 'bee' | 'beetle' | 'bird' | 'butterfly' | 'capybara' | 'cat' | 'chicken' | 'chameleon' | 'chipmunk' | 'cheetah' | 'cow' | 'crab' | 'cricket' | 'crocodile' | 'deer' | 'dog' | 'dolphin' | 'donkey' | 'duck' | 'eagle' | 'elephant' | 'ferret' | 'fish' | 'flamingo' | 'fly' | 'fox' | 'frog' | 'giraffe' | 'goat' | string; // Add more animal types as they are added 
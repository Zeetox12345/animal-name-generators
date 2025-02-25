export interface AnimalNames {
  animal: string;
  names: {
    male: string[];
    female: string[];
  };
}

// Type to represent all available animal generators
export type AnimalType = 'ant' | 'alpaca' | 'bat' | 'alligator' | 'ape' | 'bear' | 'bee' | 'beetle' | 'bird' | 'butterfly' | 'capybara' | 'cat' | 'chicken' | 'chameleon' | 'chipmunk' | 'cheetah' | 'cow' | 'crab' | 'cricket' | 'crocodile' | string; // Add more animal types as they are added 
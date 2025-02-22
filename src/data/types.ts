export interface AnimalNames {
  animal: string;
  names: {
    male: string[];
    female: string[];
  };
}

// Type to represent all available animal generators
export type AnimalType = 'ant' | 'alpaca' | 'bat' | 'alligator' | 'ape' | string; // Add more animal types as they are added 
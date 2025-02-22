
export interface AnimalNameLists {
  descriptive: string[];
  funny: string[];
  cute: string[];
  male: string[];
  female: string[];
}

export interface AnimalData {
  facts: string[];
  names: AnimalNameLists;
}

export const animalData: Record<string, AnimalData> = {
  ant: {
    facts: [
      "Ants can lift up to 50 times their own body weight",
      "There are over 12,000 known species of ants found across the globe",
      "Ants communicate primarily through pheromones and touch",
      "Some ant colonies can have millions of members working together",
      "Ants have been farming fungi for food for over 50 million years",
      "Queen ants can live up to 30 years, while worker ants typically live 1-3 years",
      "Ants don't have ears; they feel vibrations through their feet and legs"
    ],
    names: {
      descriptive: [
        "Atlas the Worker",
        "Titan the Mighty",
        "Scout the Explorer",
        "Forager the Brave",
        "Guardian the Protector",
        "Hunter the Swift",
        "Soldier the Brave",
        "Worker the Diligent",
        "Queen's Guard",
        "Colony Leader"
      ],
      funny: [
        "Antsy Pants",
        "Sir Stings-a-lot",
        "Queen Bee-tles",
        "Picnic Raider",
        "Tiny Titan",
        "Sugar Rush",
        "Crumb Snatcher",
        "Hill Builder",
        "Sandwich Thief",
        "Mini Mighty"
      ],
      cute: [
        "Tiny Tim",
        "Dotty",
        "Pepper",
        "Cookie",
        "Crumb",
        "Midge",
        "Nibbles",
        "Pip",
        "Bean",
        "Scout"
      ],
      male: [
        "Anthony",
        "Armstrong",
        "Atlas",
        "Ace",
        "Ajax",
        "Ash",
        "Axel",
        "Archer",
        "Alpine",
        "Atom",
        "Antler",
        "Admiral",
        "Alpha",
        "Armor",
        "August",
        "Azure",
        "Apex",
        "Arrow",
        "Avalon",
        "Aether"
      ],
      female: [
        "Antoinette",
        "Aurora",
        "Amber",
        "April",
        "Aria",
        "Autumn",
        "Ash",
        "Astrid",
        "Azalea",
        "Antigua",
        "Artemis",
        "Athena",
        "Amara",
        "Alba",
        "Astra",
        "Aspen",
        "Azure",
        "Angel",
        "Aura",
        "Aster"
      ]
    }
  },
  bat: {
    facts: [
      "Bats are the only mammals naturally capable of true and sustained flight",
      "They can consume up to 1,200 mosquitoes in a single hour",
      "Some bat species can live for up to 30 years or more",
      "They navigate using echolocation, producing sounds up to 200 pulses per second",
      "There are over 1,400 known species of bats worldwide",
      "Bats are vital pollinators for many plants and help disperse seeds",
      "They can fly at speeds of up to 100 miles per hour"
    ],
    names: {
      descriptive: [
        "Shadow the Swift",
        "Echo the Night",
        "Dusk the Silent",
        "Phantom the Dark",
        "Storm the Stealthy",
        "Midnight Runner",
        "Twilight Wing",
        "Sonar Scout",
        "Night Flyer",
        "Moon Dancer"
      ],
      funny: [
        "Batman Jr.",
        "Count Wingula",
        "Sir Squeaks",
        "Lord Flappy",
        "Duke of Dark",
        "Batty McBatface",
        "Captain Cave",
        "Prince of Darkness",
        "Wing Commander",
        "Radar O'Reilly"
      ],
      cute: [
        "Luna",
        "Pip",
        "Shadow",
        "Echo",
        "Star",
        "Squeaky",
        "Nibbles",
        "Cloudy",
        "Misty",
        "Biscuit"
      ],
      male: [
        "Ace",
        "Atlas",
        "Ash",
        "Axel",
        "Aero",
        "Arrow",
        "Alpha",
        "Azure",
        "Apex",
        "Asher",
        "Apollo",
        "Ares",
        "Astro",
        "Avalon",
        "Arctic",
        "Aurora",
        "August",
        "Axion",
        "Aegis",
        "Argon"
      ],
      female: [
        "Aurora",
        "Aria",
        "Astrid",
        "Alba",
        "Aura",
        "Artemis",
        "Autumn",
        "Azure",
        "Amara",
        "Athena",
        "Andromeda",
        "Arwen",
        "Astra",
        "Angel",
        "Aspen",
        "Amber",
        "April",
        "Arden",
        "Avalon",
        "Azalea"
      ]
    }
  },
  alpaca: {
    facts: [
      "Alpacas are members of the camelid family, related to llamas and camels",
      "Their soft, luxurious fiber comes in 22 natural colors",
      "Alpacas communicate through gentle humming sounds and body language",
      "They have excellent memory and can recognize individual humans",
      "Alpacas are environmentally friendly, with padded feet that don't damage terrain",
      "Their fiber is hypoallergenic and water-resistant",
      "Alpacas live 15-20 years on average"
    ],
    names: {
      descriptive: [
        "Cloud the Fluffy",
        "Storm the Graceful",
        "Mist the Gentle",
        "Shadow the Wise",
        "Luna the Soft",
        "Wool Master",
        "Highland King",
        "Mountain Queen",
        "Valley Dancer",
        "Meadow Walker"
      ],
      funny: [
        "Sir Spits-a-lot",
        "Wooliam",
        "Alpacacino",
        "Fluff Master",
        "Llamazing",
        "No Probllama",
        "Chill Pill",
        "Drama Llama",
        "Fuzzy Logic",
        "Cotton Candy"
      ],
      cute: [
        "Fluffy",
        "Marshmallow",
        "Cotton",
        "Cupcake",
        "Bubble",
        "Mochi",
        "Waffle",
        "Cookie",
        "Pudding",
        "Muffin"
      ],
      male: [
        "Apollo",
        "Atlas",
        "Andes",
        "Astro",
        "Alpine",
        "Aspen",
        "August",
        "Aztec",
        "Avalon",
        "Aurora",
        "Archer",
        "Axel",
        "Alto",
        "Aegis",
        "Aether",
        "Apex",
        "Azure",
        "Ash",
        "Argon",
        "Arctic"
      ],
      female: [
        "Aurora",
        "Aria",
        "Autumn",
        "Angel",
        "Alba",
        "Aspen",
        "Athena",
        "Amara",
        "Astra",
        "Azalea",
        "Artemis",
        "Astrid",
        "Avalon",
        "Amber",
        "April",
        "Azure",
        "Arden",
        "Arwen",
        "Aura",
        "Alpine"
      ]
    }
  },
  ape: {
    facts: [
      "Apes are considered among the most intelligent primates in the animal kingdom",
      "They share approximately 98% of their DNA with humans",
      "Great apes can learn and use sign language to communicate",
      "They live in complex social groups with strong family bonds",
      "Apes use sophisticated tools in the wild to gather food",
      "They have distinct personalities and emotional intelligence",
      "Some apes can recognize themselves in mirrors, showing self-awareness"
    ],
    names: {
      descriptive: [
        "Sage the Wise",
        "Zeus the Strong",
        "Nova the Bright",
        "Atlas the Mighty",
        "Leo the Brave",
        "Thunder Chief",
        "Forest King",
        "Mountain Lord",
        "Jungle Sage",
        "Wisdom Keeper"
      ],
      funny: [
        "Sir Swings-a-lot",
        "Banana Boss",
        "Kong Jr.",
        "Professor Primate",
        "Chief Chimp",
        "Doctor Bananas",
        "Lord of the Vines",
        "Captain Coconut",
        "Duke of Trees",
        "Sir Monkey Business"
      ],
      cute: [
        "Bubbles",
        "Milo",
        "Charlie",
        "Koko",
        "Gizmo",
        "Ziggy",
        "Pip",
        "Scout",
        "Bean",
        "Mochi"
      ],
      male: [
        "Atlas",
        "Ares",
        "Apollo",
        "Axel",
        "Ajax",
        "Ash",
        "Alpha",
        "Archer",
        "August",
        "Asher",
        "Ace",
        "Aegis",
        "Aether",
        "Apex",
        "Azure",
        "Aurora",
        "Arctic",
        "Avalon",
        "Alto",
        "Argon"
      ],
      female: [
        "Athena",
        "Aurora",
        "Aria",
        "Amara",
        "Alba",
        "Autumn",
        "Aspen",
        "Astra",
        "Azure",
        "Artemis",
        "Angel",
        "Astrid",
        "Avalon",
        "Amber",
        "April",
        "Aura",
        "Arden",
        "Alpine",
        "Azalea",
        "Arwen"
      ]
    }
  },
  alligator: {
    facts: [
      "Alligators have survived on Earth for over 37 million years",
      "They can replace up to 3,000 teeth throughout their lifetime",
      "Adult alligators can go up to two years without eating",
      "Female alligators are extremely protective mothers",
      "Alligators can run up to 11 mph on land and swim up to 20 mph",
      "They have the strongest bite force of any living animal",
      "Alligators can live up to 50 years in the wild"
    ],
    names: {
      descriptive: [
        "Rex the Ruler",
        "Titan the Fierce",
        "Shadow the Silent",
        "Storm the Swift",
        "Thunder the Mighty",
        "River King",
        "Swamp Master",
        "Marsh Hunter",
        "Delta Force",
        "Bayou Boss"
      ],
      funny: [
        "Snappy",
        "Gator-ade",
        "Croc-star",
        "Sir Chomps",
        "Scale Master",
        "Captain Crunch",
        "Lord of the Logs",
        "Duke of Scales",
        "Tooth Fairy",
        "Mr. Snappers"
      ],
      cute: [
        "Chompy",
        "Scales",
        "Ziggy",
        "Snap",
        "Pepper",
        "Nibbles",
        "Bubbles",
        "Cookie",
        "Peanut",
        "Mochi"
      ],
      male: [
        "Ajax",
        "Apex",
        "Ares",
        "Axel",
        "Atlas",
        "Aztec",
        "Arrow",
        "Avalon",
        "Ace",
        "Alpha",
        "Apollo",
        "Aegis",
        "Aether",
        "Arctic",
        "Ash",
        "Asher",
        "August",
        "Azure",
        "Alto",
        "Argon"
      ],
      female: [
        "Athena",
        "Artemis",
        "Aurora",
        "Astra",
        "Alma",
        "Aspen",
        "Azure",
        "Amara",
        "Alba",
        "Alexandria",
        "Angel",
        "Astrid",
        "Autumn",
        "Avalon",
        "Amber",
        "April",
        "Aura",
        "Arden",
        "Alpine",
        "Azalea"
      ]
    }
  }
};

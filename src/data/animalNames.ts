import antNames from './ant_names.json';
import alpacaNames from './alpaca_names.json';
import alligatorNames from './alligator_names.json';
import apeNames from './ape_names.json';
import bearNames from './bear_names.json';
import beeNames from './bee_names.json';
import beetleNames from './beetle_names.json';
import birdNames from './bird_names.json';
import butterflyNames from './butterfly_names.json';

// Helper function to get random names from an array
function getRandomNames(names: string[], count: number): string[] {
  const shuffled = [...names].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

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
      male: getRandomNames(antNames.names.male, 30),
      female: getRandomNames(antNames.names.female, 30)
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
      male: getRandomNames(alpacaNames.names.male, 30),
      female: getRandomNames(alpacaNames.names.female, 30)
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
      male: getRandomNames(apeNames.names.male, 30),
      female: getRandomNames(apeNames.names.female, 30)
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
      male: getRandomNames(alligatorNames.names.male, 30),
      female: getRandomNames(alligatorNames.names.female, 30)
    }
  },
  bear: {
    facts: [
      "Bears are incredibly strong and can run at speeds of up to 35 mph",
      "They have an excellent sense of smell, up to 7 times better than a bloodhound",
      "Bears are highly intelligent and have excellent memory",
      "They can stand up and walk on their hind legs",
      "Bears are excellent swimmers and can climb trees",
      "Most bears are omnivores, eating both plants and meat",
      "Bears can sleep for up to 7 months during winter hibernation"
    ],
    names: {
      descriptive: [
        "Grizzly the Mighty",
        "Thunder the Strong",
        "Shadow the Silent",
        "Forest King",
        "Mountain Lord",
        "River Guardian",
        "Storm the Fierce",
        "Frost the Brave",
        "Cave Master",
        "Highland Chief"
      ],
      funny: [
        "Sir Grizzlington",
        "Baron von Bear",
        "Captain Honeypaws",
        "Lord Fuzzyface",
        "Duke of Salmon",
        "Sir Snooze-a-lot",
        "Professor Pawsome",
        "Count Cubby",
        "King Kodiak",
        "Doctor Bearington"
      ],
      cute: [
        "Honey",
        "Teddy",
        "Bubbles",
        "Fuzzy",
        "Cubby",
        "Snuggles",
        "Peanut",
        "Cookie",
        "Marshmallow",
        "Gummy"
      ],
      male: getRandomNames(bearNames.names.male, 30),
      female: getRandomNames(bearNames.names.female, 30)
    }
  },
  bee: {
    facts: [
      "Bees can recognize human faces",
      "They do a special dance to communicate with other bees",
      "A single bee can visit up to 5,000 flowers in a day",
      "Honey bees never sleep",
      "Bees can fly at speeds of up to 20 mph",
      "They are responsible for pollinating about one-third of the world's food crops",
      "A honey bee visits between 50-100 flowers during one collection trip"
    ],
    names: {
      descriptive: [
        "Buzz the Swift",
        "Nectar Hunter",
        "Pollen Seeker",
        "Queen's Guard",
        "Hive Defender",
        "Flower Dancer",
        "Wing Warrior",
        "Honey Maker",
        "Garden Scout",
        "Royal Worker"
      ],
      funny: [
        "Sir Stings-a-lot",
        "Queen Bee-utiful",
        "Lord Buzzington",
        "Captain Honeycomb",
        "Duke of Nectar",
        "Professor Pollen",
        "Doctor Bumble",
        "Lady Buzz-a-lot",
        "Count Stinger",
        "Baron von Bee"
      ],
      cute: [
        "Bumble",
        "Honey",
        "Buzzy",
        "Sunny",
        "Pollen",
        "Flower",
        "Nectar",
        "Daisy",
        "Blossom",
        "Sweet"
      ],
      male: getRandomNames(beeNames.names.male, 30),
      female: getRandomNames(beeNames.names.female, 30)
    }
  },
  beetle: {
    facts: [
      "Beetles make up about 25% of all known animal species",
      "Some beetles can lift up to 850 times their own body weight",
      "Beetles have existed for over 300 million years",
      "They come in a wide variety of colors and patterns",
      "Some beetles produce light through bioluminescence",
      "Beetles play important roles in pollination and decomposition",
      "There are over 350,000 known species of beetles"
    ],
    names: {
      descriptive: [
        "Shell Master",
        "Ground Warrior",
        "Forest Crawler",
        "Armor Bearer",
        "Earth Explorer",
        "Night Walker",
        "Shell Guardian",
        "Leaf Seeker",
        "Wood Wanderer",
        "Stone Traveler"
      ],
      funny: [
        "Sir Scuttles",
        "Captain Crawly",
        "Lord Legs-a-lot",
        "Duke of Dirt",
        "Professor Shell",
        "Doctor Antenna",
        "Baron Beetle",
        "Count Carapace",
        "King Mandible",
        "Lady Bug-a-lot"
      ],
      cute: [
        "Spotty",
        "Shell",
        "Dots",
        "Crawly",
        "Shiny",
        "Tiny",
        "Sparkle",
        "Jewel",
        "Glitter",
        "Shimmer"
      ],
      male: getRandomNames(beetleNames.names.male, 30),
      female: getRandomNames(beetleNames.names.female, 30)
    }
  },
  bird: {
    facts: [
      "Birds are the only living creatures that have feathers",
      "Some birds can mimic human speech and other sounds",
      "The fastest bird is the peregrine falcon, diving at speeds over 240 mph",
      "Birds have hollow bones to help them fly",
      "Some birds can sleep with one eye open",
      "Birds have excellent color vision and can see ultraviolet light",
      "The smallest bird is the bee hummingbird, only 2 inches long"
    ],
    names: {
      descriptive: [
        "Sky Soarer",
        "Wind Rider",
        "Cloud Dancer",
        "Storm Flyer",
        "Dawn Singer",
        "Air Master",
        "Wing Commander",
        "Feather Swift",
        "Song Weaver",
        "Star Chaser"
      ],
      funny: [
        "Sir Tweets-a-lot",
        "Captain Feathers",
        "Lord Wing-ding",
        "Duke of Dawn",
        "Professor Plume",
        "Doctor Birdsong",
        "Baron Beaky",
        "Count Chirps",
        "King Warble",
        "Lady Songbird"
      ],
      cute: [
        "Chirpy",
        "Feather",
        "Song",
        "Flutter",
        "Sunny",
        "Sky",
        "Cloud",
        "Star",
        "Dawn",
        "Angel"
      ],
      male: getRandomNames(birdNames.names.male, 30),
      female: getRandomNames(birdNames.names.female, 30)
    }
  },
  butterfly: {
    facts: [
      "Butterflies taste with their feet",
      "They can see ultraviolet light that humans cannot see",
      "A butterfly's wingspan ranges from 1/2 inch to 11 inches",
      "They can fly at speeds of 12-25 miles per hour",
      "Butterflies go through four stages of transformation",
      "Some butterflies migrate thousands of miles",
      "They have a lifespan of just 2-4 weeks on average"
    ],
    names: {
      descriptive: [
        "Wing Dancer",
        "Silk Flyer",
        "Garden Spirit",
        "Flower Seeker",
        "Rainbow Glider",
        "Petal Drifter",
        "Sun Chaser",
        "Wind Rider",
        "Color Weaver",
        "Sky Painter"
      ],
      funny: [
        "Sir Flutter-by",
        "Lady Wing-ding",
        "Duke of Dots",
        "Professor Pollen",
        "Doctor Dazzle",
        "Baron Butterfly",
        "Count Colors",
        "Queen Flutter",
        "Princess Petals",
        "Lord Lepidoptera"
      ],
      cute: [
        "Flutter",
        "Sparkle",
        "Rainbow",
        "Sunny",
        "Glitter",
        "Shimmer",
        "Twinkle",
        "Angel",
        "Star",
        "Blossom"
      ],
      male: getRandomNames(butterflyNames.names.male, 30),
      female: getRandomNames(butterflyNames.names.female, 30)
    }
  }
};

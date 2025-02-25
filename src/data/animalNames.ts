import antNames from './ant_names.json';
import alpacaNames from './alpaca_names.json';
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
  },
  capybara: {
    facts: [
      "Capybaras are the largest rodents in the world",
      "They are semi-aquatic mammals and excellent swimmers",
      "They are highly social animals and live in groups",
      "Capybaras can sleep in water, keeping their nose above the surface",
      "They are herbivores and eat mainly grass",
      "They can hold their breath underwater for up to 5 minutes",
      "Capybaras are native to South America"
    ],
    names: {
      descriptive: [
        "River King",
        "Marsh Walker",
        "Gentle Giant",
        "Water Prince",
        "Grass Grazer",
        "Swim Master",
        "Social Sage",
        "Meadow Lord",
        "Pool Pioneer",
        "Wetland Wanderer"
      ],
      funny: [
        "Sir Swims-a-lot",
        "Captain Chonk",
        "Lord Fluffington",
        "Duke of Puddle",
        "Professor Paddle",
        "Sir Splashes",
        "Baron von Bath",
        "Count Chillax",
        "King Lounge",
        "Master Munch"
      ],
      cute: [
        "Puddles",
        "Bubbles",
        "Splash",
        "Marshy",
        "Coconut",
        "Peanut",
        "Waddles",
        "Nibbles",
        "Mochi",
        "Cookie"
      ],
      male: getRandomNames(capybaraNames.names.male, 30),
      female: getRandomNames(capybaraNames.names.female, 30)
    }
  },
  cat: {
    facts: [
      "Cats spend 70% of their lives sleeping",
      "A cat's nose print is unique, like a human's fingerprint",
      "Cats can rotate their ears 180 degrees",
      "They can make over 100 different vocal sounds",
      "A cat's whiskers are about the same width as its body",
      "Cats can't taste sweetness",
      "They can run at speeds of up to 30 mph"
    ],
    names: {
      descriptive: [
        "Shadow Walker",
        "Midnight Hunter",
        "Luna Whisper",
        "Storm Chaser",
        "Silent Stalker",
        "Night Watcher",
        "Dusk Runner",
        "Moon Dancer",
        "Star Gazer",
        "Dawn Patrol"
      ],
      funny: [
        "Sir Meow-a-lot",
        "Lord Whiskertons",
        "Captain Pawsome",
        "Professor Purrington",
        "Duke of Naps",
        "Lady Litterbox",
        "Count Catula",
        "Baron von Scratch",
        "Princess Purrfect",
        "Doctor Whiskerpants"
      ],
      cute: [
        "Mochi",
        "Sushi",
        "Biscuit",
        "Waffle",
        "Pickle",
        "Noodle",
        "Cookie",
        "Muffin",
        "Pudding",
        "Dumpling"
      ],
      male: getRandomNames(catNames.names.male, 30),
      female: getRandomNames(catNames.names.female, 30)
    }
  },
  chicken: {
    facts: [
      "Chickens can remember over 100 different faces of people or animals",
      "They can dream, just like humans and other mammals",
      "A mother hen talks to her chicks while they're still in the eggs",
      "Chickens can run up to 9 miles per hour",
      "They have full-color vision and can see more colors than humans",
      "Chickens are the closest living relatives to the T-Rex",
      "They can learn from each other and can be taught tricks"
    ],
    names: {
      descriptive: [
        "Feather King",
        "Coop Commander",
        "Dawn Caller",
        "Yard Patrol",
        "Flock Leader",
        "Nest Guardian",
        "Roost Master",
        "Farm Sentinel",
        "Meadow Scout",
        "Barnyard Boss"
      ],
      funny: [
        "Colonel Sanders",
        "Sir Clucks-a-lot",
        "Mother Clucker",
        "Captain Coop",
        "Lord of the Wings",
        "Duke of Yolk",
        "Princess Layer",
        "Count Chickula",
        "Baron von Bawk",
        "Lady Omelet"
      ],
      cute: [
        "Nugget",
        "Peeps",
        "Sunny",
        "Pip",
        "Chirpy",
        "Fluffy",
        "Buttercup",
        "Dumpling",
        "Noodle",
        "Biscuit"
      ],
      male: getRandomNames(chickenNames.names.male, 30),
      female: getRandomNames(chickenNames.names.female, 30)
    }
  },
  chameleon: {
    facts: [
      "Chameleons can move their eyes independently of each other",
      "Their tongues can be twice the length of their body",
      "They change color to communicate, not just for camouflage",
      "Most chameleons have prehensile tails that act like a fifth limb",
      "They can see in both ultraviolet and visible light",
      "Some species can shoot their tongues out at 0.07 seconds",
      "They don't have external ears but can still detect sound"
    ],
    names: {
      descriptive: [
        "Color Master",
        "Rainbow King",
        "Scale Shifter",
        "Spectrum Lord",
        "Prism Prince",
        "Hue Hunter",
        "Shade Walker",
        "Tint Tracker",
        "Chrome Commander",
        "Palette Pioneer"
      ],
      funny: [
        "Sir Changes-a-lot",
        "Captain Rainbow",
        "Professor Prismatic",
        "Doctor Spectrum",
        "Lord of Hues",
        "Duke of Disguise",
        "Baron von Blend",
        "Count Colorful",
        "Master of Mimicry",
        "King Kaleidoscope"
      ],
      cute: [
        "Rainbow",
        "Skittles",
        "Prism",
        "Pixel",
        "Ziggy",
        "Bubble",
        "Sprinkles",
        "Sparkle",
        "Twinkle",
        "Marble"
      ],
      male: getRandomNames(chameleonNames.names.male, 30),
      female: getRandomNames(chameleonNames.names.female, 30)
    }
  },
  chipmunk: {
    facts: [
      "Chipmunks can store up to 8 pounds of food in their burrows",
      "They can climb trees headfirst and swim",
      "Their cheek pouches can stretch to three times the size of their head",
      "They're excellent diggers and create complex tunnel systems",
      "Chipmunks hibernate but wake up every few days to eat",
      "They can run up to 21 miles per hour",
      "Each chipmunk has its own unique voice and call"
    ],
    names: {
      descriptive: [
        "Acorn Hunter",
        "Forest Scout",
        "Burrow King",
        "Swift Runner",
        "Cheek Stuffer",
        "Tree Climber",
        "Nut Gatherer",
        "Woodland Prince",
        "Trail Blazer",
        "Grove Guardian"
      ],
      funny: [
        "Sir Stuffs-a-lot",
        "Captain Cheeks",
        "Lord Nutkin",
        "Duke of Snacks",
        "Professor Peanut",
        "Baron von Burrow",
        "Count Chatter",
        "Master Munchkin",
        "Doctor Digger",
        "King Kernel"
      ],
      cute: [
        "Peanut",
        "Acorn",
        "Nibbles",
        "Cookie",
        "Nutkin",
        "Chip",
        "Pip",
        "Scout",
        "Ziggy",
        "Munchkin"
      ],
      male: getRandomNames(chipmunkNames.names.male, 30),
      female: getRandomNames(chipmunkNames.names.female, 30)
    }
  },
  cheetah: {
    facts: [
      "Cheetahs are the fastest land animals, capable of reaching speeds up to 70 mph (113 km/h)",
      "A cheetah can accelerate from 0 to 60 mph in just three seconds",
      "Cheetahs have semi-retractable claws that help with traction during high-speed chases",
      "They have distinctive black tear marks running from their eyes to their mouth that help reduce glare from the sun",
      "Cheetahs can maintain their top speed for only about 20-30 seconds before overheating",
      "Unlike other big cats, cheetahs cannot roar but instead make chirping and purring sounds",
      "Female cheetahs are solitary, while males often form small groups called coalitions"
    ],
    names: {
      descriptive: [
        "Swift Runner",
        "Spotted Sprinter",
        "Savannah Racer",
        "Dash Master",
        "Speed Hunter",
        "Velocity King",
        "Nimble Tracker",
        "Rapid Chaser",
        "Blur Stalker",
        "Lightning Paws"
      ],
      funny: [
        "Speedy Spotty",
        "Zoom Zoom",
        "Sir Runs-a-lot",
        "Captain Quickpaws",
        "Turbo Kitty",
        "Dash Dottington",
        "Professor Fastfeet",
        "The Flash Cat",
        "Rocket Whiskers",
        "Bolt Furry"
      ],
      cute: [
        "Spotty",
        "Dash",
        "Zippy",
        "Dotty",
        "Sprint",
        "Blitz",
        "Speedy",
        "Flicker",
        "Bolt",
        "Zoom"
      ],
      male: getRandomNames(cheetahNames.names.male, 30),
      female: getRandomNames(cheetahNames.names.female, 30)
    }
  },
  cow: {
    facts: [
      "Cows have an excellent sense of smell and can detect odors up to 5 miles away",
      "A cow's stomach has four compartments to help digest tough plant materials",
      "Cows can produce up to 200,000 glasses of milk in their lifetime",
      "They have almost 360-degree panoramic vision but struggle to see directly in front of them",
      "Cows form close friendships and can become stressed when separated from their friends",
      "They can recognize over 100 other cows and remember them for years",
      "Cows spend about 8 hours each day eating and 8 hours chewing cud"
    ],
    names: {
      descriptive: [
        "Meadow Grazer",
        "Gentle Giant",
        "Pasture Queen",
        "Field Wanderer",
        "Dairy Duchess",
        "Grass Muncher",
        "Farm Guardian",
        "Spotted Sage",
        "Peaceful Grazer",
        "Milk Maiden"
      ],
      funny: [
        "Sir Moo-a-lot",
        "Lady Milksalot",
        "Count Cud",
        "Duchess of Dairy",
        "Baron von Beef",
        "Professor Pasture",
        "Captain Cowbell",
        "Madame Mooington",
        "Lord Legen-dairy",
        "Queen Udderly"
      ],
      cute: [
        "Moo Moo",
        "Daisy",
        "Buttercup",
        "Clover",
        "Patches",
        "Spot",
        "Milky",
        "Cream",
        "Blossom",
        "Bella"
      ],
      male: getRandomNames(cowNames.names.male, 30),
      female: getRandomNames(cowNames.names.female, 30)
    }
  },
  crab: {
    facts: [
      "Crabs can walk in any direction, but usually move sideways",
      "They can regenerate lost limbs during the molting process",
      "There are over 4,500 species of crabs found worldwide",
      "Some crabs can live up to 100 years",
      "Crabs breathe through gills located under their carapace",
      "They communicate by waving their claws and creating sounds",
      "Crabs are omnivores and will eat almost anything they can find"
    ],
    names: {
      descriptive: [
        "Shell Defender",
        "Tide Walker",
        "Sand Scuttler",
        "Claw Master",
        "Shore Wanderer",
        "Wave Dancer",
        "Reef Guardian",
        "Ocean Crawler",
        "Pincer Warrior",
        "Beach Patroller"
      ],
      funny: [
        "Sir Pinch-a-lot",
        "Captain Claw",
        "Lord Sideways",
        "Duke of Scuttle",
        "Professor Shell",
        "Doctor Snapper",
        "Baron von Bubble",
        "Count Carapace",
        "King Krusty",
        "Lady Claw-dia"
      ],
      cute: [
        "Pinchy",
        "Snappy",
        "Bubbles",
        "Shell",
        "Sandy",
        "Scuttle",
        "Claws",
        "Pebble",
        "Shelly",
        "Crabby"
      ],
      male: getRandomNames(crabNames.names.male, 30),
      female: getRandomNames(crabNames.names.female, 30)
    }
  },
  cricket: {
    facts: [
      "Only male crickets chirp, using their wings to create the sound",
      "Crickets hear through organs located on their front legs",
      "The frequency of a cricket's chirp is related to the temperature",
      "Crickets can jump up to 30 times their body length",
      "They are omnivores, eating plants, insects, and even fabric",
      "Crickets have been kept as pets for over 2,000 years in some cultures",
      "A cricket's age can be estimated by counting the number of molts it has undergone"
    ],
    names: {
      descriptive: [
        "Night Singer",
        "Meadow Chirper",
        "Grass Hopper",
        "Twilight Musician",
        "Field Serenader",
        "Dusk Performer",
        "Garden Minstrel",
        "Summer Songster",
        "Evening Virtuoso",
        "Leaf Jumper"
      ],
      funny: [
        "Sir Chirps-a-lot",
        "Captain Clickety",
        "Lord Leap-a-lot",
        "Duke of Dusk",
        "Professor Ping",
        "Doctor Decibel",
        "Baron von Bounce",
        "Count Chirpula",
        "King Kricket",
        "Lady Leg-springs"
      ],
      cute: [
        "Chirpy",
        "Hoppy",
        "Cricket",
        "Jiminy",
        "Ping",
        "Melody",
        "Jumper",
        "Squeaky",
        "Twinkle",
        "Harmony"
      ],
      male: getRandomNames(cricketNames.names.male, 30),
      female: getRandomNames(cricketNames.names.female, 30)
    }
  },
  crocodile: {
    facts: [
      "Crocodiles have existed for about 200 million years, surviving the extinction of dinosaurs",
      "They can go through 4,000 teeth in their lifetime as new ones continuously replace old ones",
      "Crocodiles can hold their breath underwater for up to 2 hours when resting",
      "They can run on land at speeds up to 11 mph (17 km/h) for short distances",
      "A crocodile's bite force is among the strongest of any animal, up to 3,700 pounds per square inch",
      "They can live up to 70-100 years in the wild",
      "Crocodiles are social animals and can use tools for hunting"
    ],
    names: {
      descriptive: [
        "River King",
        "Swamp Ruler",
        "Ancient Guardian",
        "Scale Master",
        "Water Hunter",
        "Marsh Sovereign",
        "Tooth Titan",
        "Delta Watcher",
        "Armored Predator",
        "Bank Stalker"
      ],
      funny: [
        "Sir Snaps-a-lot",
        "Captain Crunch",
        "Lord Leatherskin",
        "Duke of Dentures",
        "Professor Plunge",
        "Doctor Deathroll",
        "Baron von Bite",
        "Count Chomp",
        "King Kroc",
        "Lady Jaws"
      ],
      cute: [
        "Snappy",
        "Chompy",
        "Scales",
        "Toothy",
        "Swampy",
        "Ripple",
        "Gator",
        "Croc",
        "Bitey",
        "Marsh"
      ],
      male: getRandomNames(crocodileNames.names.male, 30),
      female: getRandomNames(crocodileNames.names.female, 30)
    }
  }
};

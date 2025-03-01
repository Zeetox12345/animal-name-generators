import antNames from './ant_names.json';
import alpacaNames from './alpaca_names.json';
import alligatorNames from './alligator_names.json';
import apeNames from './ape_names.json';
import batNames from './bat_names.json';
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
import gooseNames from './goose_names.json';
import guineaPigNames from './guinea_pig_names.json';
import hamsterNames from './hamster_names.json';
import hedgehogNames from './hedgehog_names.json';
import hermitCrabNames from './hermit_crab_names.json';

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
      male: getRandomNames(batNames.names.male, 30),
      female: getRandomNames(batNames.names.female, 30)
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
  },
  deer: {
    facts: [
      "Deer can jump up to 10 feet high and 30 feet in length",
      "A deer's sense of smell is 1,000 times more sensitive than a human's",
      "Male deer (bucks) grow and shed their antlers annually",
      "Deer are excellent swimmers and can swim up to 15 mph",
      "They can rotate their ears 180 degrees to detect sounds from all directions",
      "A deer's heart rate can range from 40 to 200 beats per minute",
      "Deer have been known to form bonds with other species, including humans"
    ],
    names: {
      descriptive: [
        "Forest Wanderer",
        "Swift Runner",
        "Meadow Grazer",
        "Antler Crown",
        "Woodland Prince",
        "Dawn Leaper",
        "Silent Stepper",
        "Dusk Watcher",
        "Velvet Antler",
        "Grove Guardian"
      ],
      funny: [
        "Sir Prongs-a-lot",
        "Captain Hoofbeat",
        "Lord Leapington",
        "Duke of Deerfield",
        "Professor Prance",
        "Doctor Deerlight",
        "Baron von Buck",
        "Count Antlers",
        "King Bambi",
        "Lady Doe-eyes"
      ],
      cute: [
        "Bambi",
        "Spots",
        "Fawn",
        "Thumper",
        "Bucky",
        "Willow",
        "Maple",
        "Clover",
        "Hazel",
        "Autumn"
      ],
      male: getRandomNames(deerNames.names.male, 30),
      female: getRandomNames(deerNames.names.female, 30)
    }
  },
  dog: {
    facts: [
      "Dogs have a sense of smell that is up to 100,000 times stronger than humans",
      "A dog's nose print is unique, similar to a human's fingerprint",
      "Dogs can hear sounds at four times the distance humans can",
      "The average dog can learn about 165 words",
      "Dogs dream just like humans, and puppies and senior dogs dream more frequently",
      "A dog's normal body temperature is between 101 and 102.5 degrees Fahrenheit",
      "Dogs have three eyelids, including one specifically for protection and lubrication"
    ],
    names: {
      descriptive: [
        "Loyal Companion",
        "Faithful Guardian",
        "Brave Protector",
        "Swift Runner",
        "Keen Tracker",
        "Gentle Friend",
        "Noble Canine",
        "Playful Spirit",
        "Devoted Watcher",
        "Steadfast Ally"
      ],
      funny: [
        "Sir Barks-a-lot",
        "Captain Woofington",
        "Lord Waggington",
        "Duke of Dogville",
        "Professor Paws",
        "Doctor Droolittle",
        "Baron von Bark",
        "Count Canine",
        "King Kibble",
        "Lady Licks-a-lot"
      ],
      cute: [
        "Buddy",
        "Max",
        "Bella",
        "Luna",
        "Charlie",
        "Cooper",
        "Daisy",
        "Bailey",
        "Sadie",
        "Milo"
      ],
      male: getRandomNames(dogNames.names.male, 30),
      female: getRandomNames(dogNames.names.female, 30)
    }
  },
  dolphin: {
    facts: [
      "Dolphins sleep with one eye open and only half their brain at a time",
      "They can recognize themselves in mirrors, showing self-awareness",
      "Dolphins have unique whistles that serve as names for individual identification",
      "They can swim at speeds of up to 25 mph (40 km/h)",
      "Dolphins have excellent eyesight both in and out of water",
      "They are among the few animals that use tools, using sponges to protect their snouts while foraging",
      "Dolphins have been known to help humans and other animals in distress"
    ],
    names: {
      descriptive: [
        "Wave Dancer",
        "Ocean Glider",
        "Tide Rider",
        "Sea Acrobat",
        "Reef Explorer",
        "Current Surfer",
        "Deep Diver",
        "Echo Caller",
        "Blue Voyager",
        "Splash Jumper"
      ],
      funny: [
        "Sir Splashes-a-lot",
        "Captain Clickington",
        "Lord Leapington",
        "Duke of Deepwater",
        "Professor Porpoise",
        "Doctor Dive",
        "Baron von Bubble",
        "Count Cetacean",
        "King Flipper",
        "Lady Leap"
      ],
      cute: [
        "Finn",
        "Splash",
        "Echo",
        "Bubbles",
        "Wave",
        "Flipper",
        "Sunny",
        "Blue",
        "Pearl",
        "Coral"
      ],
      male: getRandomNames(dolphinNames.names.male, 30),
      female: getRandomNames(dolphinNames.names.female, 30)
    }
  },
  donkey: {
    facts: [
      "Donkeys have an excellent memory and can recognize areas and other donkeys from 25 years ago",
      "Their large ears help them hear desert predators from up to 60 miles away",
      "Donkeys can live up to 50 years with proper care",
      "They are highly intelligent and can learn tasks quickly",
      "Donkeys are social animals that form strong bonds with companions",
      "They have a reputation for stubbornness, but this is actually careful consideration before acting",
      "Donkeys have a different braying sound than horses, making a 'hee-haw' noise"
    ],
    names: {
      descriptive: [
        "Steadfast Worker",
        "Patient Carrier",
        "Wise Companion",
        "Desert Traveler",
        "Mountain Climber",
        "Loyal Helper",
        "Strong Hauler",
        "Gentle Guardian",
        "Farm Companion",
        "Trail Guide"
      ],
      funny: [
        "Sir Brays-a-lot",
        "Captain Hee-Haw",
        "Lord Long-ears",
        "Duke of Donkeyville",
        "Professor Plod",
        "Doctor Determined",
        "Baron von Bray",
        "Count Carrot",
        "King Kick",
        "Lady Longears"
      ],
      cute: [
        "Eeyore",
        "Burrito",
        "Dusty",
        "Clover",
        "Daisy",
        "Pepper",
        "Pebbles",
        "Smokey",
        "Rusty",
        "Patches"
      ],
      male: getRandomNames(donkeyNames.names.male, 30),
      female: getRandomNames(donkeyNames.names.female, 30)
    }
  },
  duck: {
    facts: [
      "Ducks have waterproof feathers due to an oil produced by a gland near their tail",
      "They can sleep with one eye open to watch for predators",
      "A duck's quack doesn't echo, and no one knows why",
      "Some duck species can fly as high as 21,000 feet",
      "Ducks have excellent vision and can see in color",
      "Baby ducks communicate with their mothers while still in the egg",
      "Ducks have three eyelids to protect their eyes while swimming"
    ],
    names: {
      descriptive: [
        "Webfoot the Swimmer",
        "Quacker the Loud",
        "Paddler the Swift",
        "Feather the Waterproof",
        "Waddler the Cute",
        "Diver the Deep",
        "Splasher the Playful",
        "Floater the Buoyant",
        "Migrator the Traveler",
        "Dabbler the Forager"
      ],
      funny: [
        "Sir Quacks-a-lot",
        "Waddle McFluff",
        "Bill Nye the Duck Guy",
        "Quackers & Cheese",
        "Bread Winner",
        "Duck Norris",
        "Quack Sparrow",
        "Aflac",
        "Howard the Duck",
        "Ducktective"
      ],
      cute: [
        "Puddles",
        "Waddles",
        "Quackers",
        "Ducky",
        "Bubbles",
        "Pebbles",
        "Splash",
        "Fluffy",
        "Sunny",
        "Daisy"
      ],
      male: getRandomNames(duckNames.names.male, 30),
      female: getRandomNames(duckNames.names.female, 30)
    }
  },
  eagle: {
    facts: [
      "Eagles have excellent eyesight and can spot prey from up to 2 miles away",
      "They can fly at speeds of up to 200 mph when diving",
      "Eagles build massive nests called eyries that can weigh up to a ton",
      "They mate for life and can live up to 30 years in the wild",
      "The bald eagle became the national symbol of the United States in 1782",
      "Eagles have approximately 7,000 feathers on their bodies",
      "They can swim using powerful wing strokes when they catch fish too heavy to lift"
    ],
    names: {
      descriptive: [
        "Soar the Majestic",
        "Talon the Fierce",
        "Summit the High",
        "Apex the Hunter",
        "Regal the Proud",
        "Sky Ruler",
        "Wind Rider",
        "Storm Chaser",
        "Peak Watcher",
        "Cloud Dancer"
      ],
      funny: [
        "Sir Screech-a-lot",
        "Captain America",
        "Freedom Feathers",
        "Baldy McEagleface",
        "Talon Tina",
        "Beaky Blinders",
        "Professor Wings",
        "Feather Weather",
        "Nest Egg",
        "Wingman"
      ],
      cute: [
        "Sunny",
        "Goldie",
        "Pip",
        "Skye",
        "Feathers",
        "Beaky",
        "Fluffy",
        "Soary",
        "Swoop",
        "Glide"
      ],
      male: getRandomNames(eagleNames.names.male, 30),
      female: getRandomNames(eagleNames.names.female, 30)
    }
  },
  elephant: {
    facts: [
      "Elephants are the largest land animals on Earth",
      "They have the longest pregnancy of any mammal—22 months",
      "An elephant's trunk has over 40,000 muscles and can lift up to 700 pounds",
      "Elephants can recognize themselves in mirrors, showing self-awareness",
      "They communicate through vibrations felt through their feet",
      "Elephants mourn their dead and may revisit the remains of family members",
      "They can live up to 70 years in the wild"
    ],
    names: {
      descriptive: [
        "Thunder the Mighty",
        "Titan the Wise",
        "Mammoth the Strong",
        "Tusk the Great",
        "Gentle Giant",
        "Jungle King",
        "Savanna Queen",
        "Memory Keeper",
        "Wisdom Walker",
        "Trumpet Master"
      ],
      funny: [
        "Sir Trunks-a-lot",
        "Dumbo Junior",
        "Peanut Butter",
        "Tusk Manager",
        "Earl of Grey",
        "Wrinkles McGee",
        "Big Ears",
        "Stompy McStompface",
        "Trunk Funk",
        "Tusker Tucker"
      ],
      cute: [
        "Ellie",
        "Peanut",
        "Bubbles",
        "Trunk",
        "Tootsie",
        "Pebbles",
        "Biscuit",
        "Cuddles",
        "Buttons",
        "Snuggles"
      ],
      male: getRandomNames(elephantNames.names.male, 30),
      female: getRandomNames(elephantNames.names.female, 30)
    }
  },
  ferret: {
    facts: [
      "Ferrets sleep for 14-18 hours per day",
      "They are crepuscular, meaning they are most active at dawn and dusk",
      "A group of ferrets is called a 'business'",
      "Ferrets have been domesticated for over 2,500 years",
      "They can squeeze through holes as small as 1 inch in diameter",
      "Ferrets have a natural musky odor produced by glands in their skin",
      "They can't see very well but have excellent senses of smell and hearing"
    ],
    names: {
      descriptive: [
        "Swift the Agile",
        "Whisper the Silent",
        "Nimble the Quick",
        "Shadow the Stealthy",
        "Dash the Fast",
        "Tunnel Explorer",
        "Curious Seeker",
        "Playful Dancer",
        "Mischief Maker",
        "Clever Hunter"
      ],
      funny: [
        "Sir Weasels-a-lot",
        "Furry Fury",
        "Noodle Doodle",
        "Sock Thief",
        "Bandit Mask",
        "Wiggles McSneak",
        "Captain Chaos",
        "Sneaky Pete",
        "Weasel Wobble",
        "Fuzzy Logic"
      ],
      cute: [
        "Noodle",
        "Mochi",
        "Peanut",
        "Waffles",
        "Biscuit",
        "Snickers",
        "Twix",
        "Marshmallow",
        "Jellybean",
        "Cookie"
      ],
      male: getRandomNames(ferretNames.names.male, 30),
      female: getRandomNames(ferretNames.names.female, 30)
    }
  },
  fish: {
    facts: [
      "There are over 34,000 known species of fish in the world",
      "Fish were the first vertebrates to evolve on Earth",
      "Some species of fish can fly, while others can climb trees",
      "The smallest fish is the Paedocypris, measuring just 7.9mm long",
      "Fish have specialized organs called lateral lines that detect water currents and vibrations",
      "Some fish, like the parrotfish, can change their gender during their lifetime",
      "Goldfish have a memory span of up to three months, not just a few seconds"
    ],
    names: {
      descriptive: [
        "Shimmer the Bright",
        "Ripple the Swift",
        "Bubble the Playful",
        "Flash the Quick",
        "Coral the Colorful",
        "Wave Rider",
        "Reef Dancer",
        "Current Glider",
        "Ocean Explorer",
        "Depth Diver"
      ],
      funny: [
        "Sir Swims-a-lot",
        "Bubble Buddy",
        "Gill-bert",
        "Fin-tastic",
        "Scale Force",
        "Captain Nemo",
        "Swim Shady",
        "Cod Almighty",
        "Salmon-ella",
        "Tuna Turner"
      ],
      cute: [
        "Bubbles",
        "Finley",
        "Splash",
        "Goldie",
        "Nemo",
        "Pearl",
        "Coral",
        "Guppy",
        "Flipper",
        "Sparkle"
      ],
      male: getRandomNames(fishNames.names.male, 30),
      female: getRandomNames(fishNames.names.female, 30)
    }
  },
  flamingo: {
    facts: [
      "Flamingos get their pink color from the beta-carotene in their diet",
      "They can stand on one leg for hours without getting tired",
      "A group of flamingos is called a 'flamboyance'",
      "They can live up to 50 years in the wild",
      "Flamingos filter-feed by turning their heads upside down",
      "Baby flamingos are born with gray feathers that gradually turn pink",
      "They can fly at speeds of up to 35 miles per hour"
    ],
    names: {
      descriptive: [
        "Blush the Elegant",
        "Coral the Graceful",
        "Rose the Tall",
        "Flametta the Pink",
        "Scarlet the Vibrant",
        "Lagoon Dancer",
        "Sunset Wader",
        "Marsh Balancer",
        "Feather Elegance",
        "Pink Majesty"
      ],
      funny: [
        "Sir Stands-a-lot",
        "Pinky Promise",
        "Flamingle Bells",
        "Leg Day Champion",
        "Pretty in Pink",
        "Shrimp Cocktail",
        "Lawn Ornament",
        "Flamingoals",
        "Pink Floyd",
        "Wader Hater"
      ],
      cute: [
        "Pinky",
        "Rosie",
        "Coral",
        "Blush",
        "Peaches",
        "Taffy",
        "Bubble Gum",
        "Cotton Candy",
        "Cherry",
        "Blossom"
      ],
      male: getRandomNames(flamingoNames.names.male, 30),
      female: getRandomNames(flamingoNames.names.female, 30)
    }
  },
  fly: {
    facts: [
      "Flies have only two wings, unlike most other flying insects which have four",
      "House flies taste with their feet, which have taste receptors",
      "A fly can react to an approaching swatter in just 100 milliseconds",
      "Flies can walk upside down on ceilings due to sticky pads on their feet",
      "Some flies, like fruit flies, are essential for scientific research",
      "Flies play an important role in decomposition and nutrient recycling",
      "There are over 120,000 species of flies worldwide"
    ],
    names: {
      descriptive: [
        "Buzzer the Swift",
        "Zippy the Quick",
        "Hover the Agile",
        "Dart the Nimble",
        "Whizz the Fast",
        "Zoom the Speedy",
        "Flitter the Elusive",
        "Wing the Graceful",
        "Soar the High-flyer",
        "Glide the Smooth"
      ],
      funny: [
        "Sir Buzz-a-lot",
        "Annoying Andy",
        "Pesky Pete",
        "Swat Dodger",
        "Window Banger",
        "Fruit Loop",
        "Buzz Lightyear",
        "Tiny Terror",
        "Ninja Fly",
        "Escape Artist"
      ],
      cute: [
        "Tiny",
        "Buzzy",
        "Flutter",
        "Pepper",
        "Dot",
        "Speck",
        "Zippy",
        "Whisper",
        "Flick",
        "Pixel"
      ],
      male: getRandomNames(flyNames.names.male, 30),
      female: getRandomNames(flyNames.names.female, 30)
    }
  },
  fox: {
    facts: [
      "Foxes are members of the dog family Canidae",
      "A group of foxes is called a 'skulk' or 'leash'",
      "Foxes have whiskers on their legs and face to help them navigate",
      "Red foxes are the most widespread carnivore species in the world",
      "Foxes communicate with over 40 different sounds",
      "A fox's tail (or 'brush') can help it balance and keep warm in cold weather",
      "Foxes have excellent hearing and can detect prey underground"
    ],
    names: {
      descriptive: [
        "Rusty the Red",
        "Swift the Hunter",
        "Shadow the Stealthy",
        "Amber the Clever",
        "Blaze the Fiery",
        "Sly the Cunning",
        "Nimble the Agile",
        "Wiley the Wise",
        "Flicker the Quick",
        "Ember the Bright"
      ],
      funny: [
        "Sir Pounce-a-lot",
        "Chicken Chaser",
        "Bushy Tail",
        "Sneaky Pete",
        "Fantastic Mr.",
        "Socks",
        "Bandit",
        "Trickster",
        "Firefox",
        "Foxy McFoxface"
      ],
      cute: [
        "Kit",
        "Roxy",
        "Ginger",
        "Copper",
        "Rusty",
        "Amber",
        "Cinnamon",
        "Maple",
        "Autumn",
        "Pepper"
      ],
      male: getRandomNames(foxNames.names.male, 30),
      female: getRandomNames(foxNames.names.female, 30)
    }
  },
  frog: {
    facts: [
      "Frogs don't drink water but absorb it through their skin",
      "A group of frogs is called an 'army'",
      "Some frogs can jump over 20 times their body length",
      "There are over 5,000 species of frogs worldwide",
      "Frogs completely shed their skin about once a week",
      "Some frogs can change color depending on light, temperature, or mood",
      "The glass frog has transparent skin, allowing you to see its internal organs"
    ],
    names: {
      descriptive: [
        "Leaper the High-jumper",
        "Croaker the Loud",
        "Splash the Swimmer",
        "Pond King",
        "Hopper the Quick",
        "Lily the Pad-dweller",
        "Emerald the Green",
        "Ribbit the Vocal",
        "Marsh the Wetland-lover",
        "Speckle the Spotted"
      ],
      funny: [
        "Sir Hops-a-lot",
        "Jeremiah",
        "Kermit",
        "Toad-ally Awesome",
        "Frogger",
        "Prince Charming",
        "Wart",
        "Jumpy McJumpface",
        "Tongue Twister",
        "Fly Catcher"
      ],
      cute: [
        "Puddles",
        "Lily",
        "Pickle",
        "Hoppy",
        "Tiny",
        "Speckles",
        "Emerald",
        "Pebble",
        "Dewdrop",
        "Sprout"
      ],
      male: getRandomNames(frogNames.names.male, 30),
      female: getRandomNames(frogNames.names.female, 30)
    }
  },
  giraffe: {
    facts: [
      "Giraffes are the tallest living animals, with males reaching up to 18 feet",
      "A giraffe's neck contains only seven vertebrae, the same as humans",
      "Giraffes have the highest blood pressure of any land animal",
      "Baby giraffes can stand within 30 minutes of birth and run within 10 hours",
      "Giraffes sleep for only about 30 minutes to two hours per day",
      "Each giraffe has a unique pattern of spots, like human fingerprints",
      "Giraffes have 18-20 inch long tongues that are typically bluish-black in color"
    ],
    names: {
      descriptive: [
        "Towering Heights",
        "Skyreacher the Tall",
        "Patches the Spotted",
        "Stretch the Long",
        "Savannah the Graceful",
        "Horizon the Far-seer",
        "Lofty the High",
        "Speckle the Patterned",
        "Acacia the Leaf-eater",
        "Gentle Giant"
      ],
      funny: [
        "Shorty",
        "Neck-olas",
        "Spots McGee",
        "High Maintenance",
        "Cloud Kisser",
        "Skyscraper",
        "Stretch Armstrong",
        "Ceiling Fan Inspector",
        "Weather Reporter",
        "Tall Tale"
      ],
      cute: [
        "Patches",
        "Spots",
        "Taffy",
        "Freckles",
        "Sunny",
        "Caramel",
        "Stretch",
        "Twiggy",
        "Dotty",
        "Maple"
      ],
      male: getRandomNames(giraffeNames.names.male, 30),
      female: getRandomNames(giraffeNames.names.female, 30)
    }
  },
  goat: {
    facts: [
      "Goats were one of the first animals to be domesticated by humans, around 10,000 years ago",
      "Goats have rectangular pupils that allow them to see 320-340 degrees around them",
      "They have excellent balance and can climb trees and steep mountains",
      "Goats are very social animals and can become depressed if kept alone",
      "They have accents! Goats living in different regions develop distinct calls",
      "Goats have four stomachs to help them digest tough plant material",
      "Baby goats (kids) can stand and walk within minutes of being born"
    ],
    names: {
      descriptive: [
        "Mountain King",
        "Cliff Jumper",
        "Nimble Hooves",
        "Bearded One",
        "Horned Guardian",
        "Valley Climber",
        "Meadow Grazer",
        "Highland Wanderer",
        "Rocky the Climber",
        "Summit Seeker"
      ],
      funny: [
        "Sir Bleats-a-Lot",
        "Goatzilla",
        "Billy the Kid",
        "Lawn Mower",
        "Tin Can Muncher",
        "Beard Master",
        "Head Butter",
        "Yoga Goat",
        "Escape Artist",
        "Fainting Frank"
      ],
      cute: [
        "Pebbles",
        "Buttons",
        "Clover",
        "Daisy",
        "Nibbles",
        "Peanut",
        "Sprinkles",
        "Toffee",
        "Marshmallow",
        "Blossom"
      ],
      male: getRandomNames(goatNames.names.male, 30),
      female: getRandomNames(goatNames.names.female, 30)
    }
  },
  goose: {
    facts: [
      "Geese are highly territorial and protective of their young",
      "They mate for life and can live up to 25 years in the wild",
      "Geese fly in a V formation to conserve energy during migration",
      "They have excellent vision and can see almost 360 degrees around them",
      "Geese have strong family bonds and raise their young together",
      "They communicate with over 10 different calls for various situations",
      "Geese have serrated beaks that help them grip slippery food"
    ],
    names: {
      descriptive: [
        "Sky Voyager",
        "Feathered Guardian",
        "Lake Patroller",
        "Honking Sentinel",
        "Migration Leader",
        "Pond Protector",
        "Wing Commander",
        "Flock Navigator",
        "Territorial Watcher",
        "Waterway Warden"
      ],
      funny: [
        "Honk Master",
        "Sir Hisses-a-Lot",
        "Bread Bandit",
        "Park Patroller",
        "Feathered Fury",
        "Pond Boss",
        "Goosezilla",
        "Waddle King",
        "Hiss Machine",
        "Lawn Invader"
      ],
      cute: [
        "Pebble",
        "Feather",
        "Waddles",
        "Fluff",
        "Piper",
        "Bubbles",
        "Quill",
        "Ripple",
        "Downy",
        "Puff"
      ],
      male: getRandomNames(gooseNames.names.male, 30),
      female: getRandomNames(gooseNames.names.female, 30)
    }
  },
  guineaPig: {
    facts: [
      "Guinea pigs are not actually pigs, but rodents native to South America",
      "They purr when content, similar to cats",
      "Guinea pigs are born with their eyes open and fully furred",
      "They have an excellent memory and can recognize their owners",
      "Guinea pigs need vitamin C in their diet as they cannot produce it naturally",
      "They communicate through a variety of sounds including whistles, purrs, and rumbles",
      "Guinea pigs can live up to 8 years with proper care"
    ],
    names: {
      descriptive: [
        "Caramel Fluff",
        "Silky Whiskers",
        "Gentle Explorer",
        "Curious Nibbler",
        "Contented Purrer",
        "Fuzzy Navigator",
        "Wheeker the Vocal",
        "Tiny Adventurer",
        "Pocket Companion",
        "Velvet Paws"
      ],
      funny: [
        "Sir Squeaksalot",
        "Potato the Round",
        "Fluffernutter",
        "Captain Wheek",
        "Piggy Smalls",
        "Hairy Potter",
        "Veggie Vacuum",
        "Furry Fury",
        "Squeak Machine",
        "Hay Destroyer"
      ],
      cute: [
        "Bean",
        "Buttons",
        "Cinnamon",
        "Peanut",
        "Muffin",
        "Nugget",
        "Oreo",
        "Pepper",
        "Snickerdoodle",
        "Truffle"
      ],
      male: getRandomNames(guineaPigNames.names.male, 30),
      female: getRandomNames(guineaPigNames.names.female, 30)
    }
  },
  hamster: {
    facts: [
      "Hamsters have pouches in their cheeks that can expand to three times the size of their head",
      "They are nocturnal animals, most active during the night",
      "Hamsters can run up to 8 miles a night on their exercise wheel",
      "Their teeth never stop growing throughout their lifetime",
      "Hamsters are solitary animals that prefer to live alone",
      "They have poor eyesight but excellent sense of smell",
      "Hamsters can store up to a week's worth of food in their burrows"
    ],
    names: {
      descriptive: [
        "Pocket Explorer",
        "Cheek Stuffer",
        "Midnight Runner",
        "Tiny Burrower",
        "Seed Collector",
        "Wheel Spinner",
        "Fluffy Navigator",
        "Curious Whiskers",
        "Tiny Adventurer",
        "Nocturnal Wanderer"
      ],
      funny: [
        "Sir Stuffs-a-Lot",
        "Hammy Houdini",
        "Cheeks McGee",
        "Fuzzy McFlufferson",
        "Wheel Warrior",
        "Sunflower Bandit",
        "Escape Artist",
        "Tiny Terror",
        "Seed Hoarder",
        "Pocket Rocket"
      ],
      cute: [
        "Bean",
        "Button",
        "Cookie",
        "Peanut",
        "Nugget",
        "Mochi",
        "Pebble",
        "Pip",
        "Nibbles",
        "Biscuit"
      ],
      male: getRandomNames(hamsterNames.names.male, 30),
      female: getRandomNames(hamsterNames.names.female, 30)
    }
  },
  hedgehog: {
    facts: [
      "Hedgehogs have between 5,000 and 7,000 spines on their back",
      "They can roll into a tight ball when threatened",
      "Hedgehogs are immune to many toxins, including snake venom",
      "They are primarily nocturnal animals",
      "Hedgehogs can swim and climb well",
      "Baby hedgehogs are called hoglets",
      "They have poor eyesight but excellent hearing and sense of smell"
    ],
    names: {
      descriptive: [
        "Spiny Defender",
        "Night Explorer",
        "Prickly Wanderer",
        "Quill Master",
        "Nocturnal Navigator",
        "Garden Guardian",
        "Insect Hunter",
        "Spiky Survivor",
        "Twilight Forager",
        "Thorny Protector"
      ],
      funny: [
        "Sir Pricks-a-Lot",
        "Spike Lee",
        "Pokey McPokerson",
        "Sonic the Slow",
        "Needle Noggin",
        "Prickle Muffin",
        "Quill Smith",
        "Spiny Norman",
        "Rolly Poly",
        "Pincushion Pete"
      ],
      cute: [
        "Prickles",
        "Button",
        "Thistle",
        "Needle",
        "Pip",
        "Clover",
        "Bramble",
        "Pebble",
        "Acorn",
        "Sprout"
      ],
      male: getRandomNames(hedgehogNames.names.male, 30),
      female: getRandomNames(hedgehogNames.names.female, 30)
    }
  },
  hermitCrab: {
    facts: [
      "Hermit crabs don't grow their own shells but find and inhabit empty shells",
      "They can live up to 30 years in the wild",
      "Hermit crabs have gills and need humidity to breathe",
      "They are social creatures that thrive in groups",
      "Hermit crabs can regenerate lost limbs",
      "They communicate through chirping sounds made by rubbing their legs together",
      "Hermit crabs regularly upgrade to larger shells as they grow"
    ],
    names: {
      descriptive: [
        "Shell Seeker",
        "Tide Pool Explorer",
        "Sandy Wanderer",
        "Shell Changer",
        "Beach Comber",
        "Coastal Crawler",
        "Ocean Dweller",
        "Borrowed Home",
        "Shoreline Scuttler",
        "Reef Rambler"
      ],
      funny: [
        "Shell Shocked",
        "Home Mover",
        "Scuttle Bug",
        "Crabby Patty",
        "Shell Shopper",
        "Real Estate Agent",
        "Mobile Home",
        "Pinchy McPincherson",
        "Sideways Walker",
        "Shell Game"
      ],
      cute: [
        "Pebble",
        "Bubbles",
        "Sandy",
        "Shelly",
        "Pearl",
        "Coral",
        "Scuttle",
        "Tiny",
        "Hermie",
        "Coco"
      ],
      male: getRandomNames(hermitCrabNames.names.male, 30),
      female: getRandomNames(hermitCrabNames.names.female, 30)
    }
  }
};

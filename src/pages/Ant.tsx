
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Ants can lift up to 50 times their own body weight, making them one of nature's strongest creatures",
  "There are over 12,000 known species of ants found across the globe",
  "Ants communicate primarily through pheromones and touch",
  "Some ant colonies can have millions of members working together",
  "Ants have been farming fungi for food for over 50 million years",
  "Queen ants can live up to 30 years, while worker ants typically live 1-3 years",
  "Ants don't have ears; they feel vibrations through their feet and legs"
];

const bestNames = {
  descriptive: ["Atlas the Worker", "Titan the Mighty", "Scout the Explorer", "Forager the Brave", "Guardian the Protector"],
  funny: ["Antsy Pants", "Sir Stings-a-lot", "Queen Bee-tles", "Picnic Raider", "Tiny Titan"],
  cute: ["Tiny Tim", "Dotty", "Pepper", "Cookie", "Crumb"],
  male: ["Anthony", "Armstrong", "Atlas", "Ace", "Ajax", "Ash", "Axel", "Archer", "Alpine", "Atom"],
  female: ["Antoinette", "Aurora", "Amber", "April", "Aria", "Autumn", "Ash", "Astrid", "Azalea", "Antigua"]
};

const otherGenerators = [
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AntGenerator = () => {
  return (
    <NameGenerator
      animal="Ant"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default AntGenerator;

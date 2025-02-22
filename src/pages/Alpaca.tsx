
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Alpacas are members of the camelid family",
  "They have been domesticated for over 6,000 years",
  "Alpacas come in 22 different colors",
  "They communicate through humming sounds",
  "Alpacas are social animals and live in herds"
];

const bestNames = {
  descriptive: ["Cloud the Fluffy", "Storm the Graceful", "Mist the Gentle"],
  funny: ["Sir Spits-a-lot", "Wooliam", "Alpacacino"],
  cute: ["Fluffy", "Marshmallow", "Cotton"],
  male: ["Apollo", "Atlas", "Andes", "Astro", "Alpine"],
  female: ["Aurora", "Aria", "Autumn", "Angel", "Alba"]
};

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlpacaGenerator = () => {
  return (
    <NameGenerator
      animal="Alpaca"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default AlpacaGenerator;

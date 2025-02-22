
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Ants can lift up to 50 times their own body weight",
  "There are over 12,000 species of ants",
  "Ants are found on every continent except Antarctica",
  "Some ant colonies can have millions of ants",
  "Ants have been farming for millions of years"
];

const bestNames = {
  descriptive: ["Atlas the Worker", "Titan the Mighty", "Scout the Explorer"],
  funny: ["Antsy Pants", "Sir Stings-a-lot", "Queen Bee-tles"],
  cute: ["Tiny Tim", "Dotty", "Pepper"],
  male: ["Anthony", "Armstrong", "Atlas", "Ace", "Ajax"],
  female: ["Antoinette", "Aurora", "Amber", "April", "Aria"]
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


import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Bats are the only mammals capable of true flight",
  "They can eat up to 1,200 mosquitoes in an hour",
  "Some bats can live up to 30 years",
  "They use echolocation to navigate",
  "There are over 1,400 known species of bats"
];

const bestNames = {
  descriptive: ["Shadow the Swift", "Echo the Night", "Dusk the Silent"],
  funny: ["Batman Jr.", "Count Wingula", "Sir Squeaks"],
  cute: ["Luna", "Pip", "Shadow"],
  male: ["Ace", "Atlas", "Ash", "Axel", "Aero"],
  female: ["Aurora", "Aria", "Astrid", "Alba", "Aura"]
};

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" }
];

const BatGenerator = () => {
  return (
    <NameGenerator
      animal="Bat"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default BatGenerator;

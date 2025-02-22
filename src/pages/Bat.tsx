
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Bats are the only mammals naturally capable of true and sustained flight",
  "They can consume up to 1,200 mosquitoes in a single hour",
  "Some bat species can live for up to 30 years or more",
  "They navigate using echolocation, producing sounds up to 200 pulses per second",
  "There are over 1,400 known species of bats worldwide",
  "Bats are vital pollinators for many plants and help disperse seeds",
  "They can fly at speeds of up to 100 miles per hour"
];

const bestNames = {
  descriptive: ["Shadow the Swift", "Echo the Night", "Dusk the Silent", "Phantom the Dark", "Storm the Stealthy"],
  funny: ["Batman Jr.", "Count Wingula", "Sir Squeaks", "Lord Flappy", "Duke of Dark"],
  cute: ["Luna", "Pip", "Shadow", "Echo", "Star"],
  male: ["Ace", "Atlas", "Ash", "Axel", "Aero", "Arrow", "Alpha", "Azure", "Apex", "Asher"],
  female: ["Aurora", "Aria", "Astrid", "Alba", "Aura", "Artemis", "Autumn", "Azure", "Amara", "Athena"]
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

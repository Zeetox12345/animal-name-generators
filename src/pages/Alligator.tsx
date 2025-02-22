
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Alligators have survived on Earth for over 37 million years",
  "They can replace up to 3,000 teeth throughout their lifetime",
  "Adult alligators can go up to two years without eating",
  "Female alligators are extremely protective mothers",
  "Alligators can run up to 11 mph on land and swim up to 20 mph",
  "They have the strongest bite force of any living animal",
  "Alligators can live up to 50 years in the wild"
];

const bestNames = {
  descriptive: ["Rex the Ruler", "Titan the Fierce", "Shadow the Silent", "Storm the Swift", "Thunder the Mighty"],
  funny: ["Snappy", "Gator-ade", "Croc-star", "Sir Chomps", "Scale Master"],
  cute: ["Chompy", "Scales", "Ziggy", "Snap", "Pepper"],
  male: ["Ajax", "Apex", "Ares", "Axel", "Atlas", "Aztec", "Arrow", "Avalon", "Ace", "Alpha"],
  female: ["Athena", "Artemis", "Aurora", "Astra", "Alma", "Aspen", "Azure", "Amara", "Alba", "Alexandria"]
};

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlligatorGenerator = () => {
  return (
    <NameGenerator
      animal="Alligator"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default AlligatorGenerator;

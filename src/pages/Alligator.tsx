
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Alligators have been around for over 37 million years",
  "They can go through 2,000-3,000 teeth in a lifetime",
  "Adult alligators can go 1-2 years without eating",
  "Female alligators are protective mothers",
  "They can run up to 11 mph on land"
];

const bestNames = {
  descriptive: ["Rex the Ruler", "Titan the Fierce", "Shadow the Silent"],
  funny: ["Snappy", "Gator-ade", "Croc-star"],
  cute: ["Chompy", "Scales", "Ziggy"],
  male: ["Ajax", "Apex", "Ares", "Axel", "Atlas"],
  female: ["Athena", "Artemis", "Aurora", "Astra", "Alma"]
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

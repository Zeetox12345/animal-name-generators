
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Apes are considered among the most intelligent primates in the animal kingdom",
  "They share approximately 98% of their DNA with humans",
  "Great apes can learn and use sign language to communicate",
  "They live in complex social groups with strong family bonds",
  "Apes use sophisticated tools in the wild to gather food",
  "They have distinct personalities and emotional intelligence",
  "Some apes can recognize themselves in mirrors, showing self-awareness"
];

const bestNames = {
  descriptive: ["Sage the Wise", "Zeus the Strong", "Nova the Bright", "Atlas the Mighty", "Leo the Brave"],
  funny: ["Sir Swings-a-lot", "Banana Boss", "Kong Jr.", "Professor Primate", "Chief Chimp"],
  cute: ["Bubbles", "Milo", "Charlie", "Koko", "Gizmo"],
  male: ["Atlas", "Ares", "Apollo", "Axel", "Ajax", "Ash", "Alpha", "Archer", "August", "Asher"],
  female: ["Athena", "Aurora", "Aria", "Amara", "Alba", "Autumn", "Aspen", "Astra", "Azure", "Artemis"]
};

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Bat", path: "/bat" }
];

const ApeGenerator = () => {
  return (
    <NameGenerator
      animal="Ape"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default ApeGenerator;

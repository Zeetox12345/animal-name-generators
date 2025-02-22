
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Apes are considered the most intelligent primates",
  "They share 98% of their DNA with humans",
  "Apes can learn and use sign language",
  "They live in complex social groups",
  "Some apes use tools in the wild"
];

const bestNames = {
  descriptive: ["Sage the Wise", "Zeus the Strong", "Nova the Bright"],
  funny: ["Sir Swings-a-lot", "Banana Boss", "Kong Jr."],
  cute: ["Bubbles", "Milo", "Charlie"],
  male: ["Atlas", "Ares", "Apollo", "Axel", "Ajax"],
  female: ["Athena", "Aurora", "Aria", "Amara", "Alba"]
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

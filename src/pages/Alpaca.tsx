
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";

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
      facts={animalData.alpaca.facts}
      bestNames={animalData.alpaca.names}
      otherGenerators={otherGenerators}
    />
  );
};

export default AlpacaGenerator;

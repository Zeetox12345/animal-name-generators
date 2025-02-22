
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";

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
      facts={animalData.ape.facts}
      bestNames={animalData.ape.names}
      otherGenerators={otherGenerators}
    />
  );
};

export default ApeGenerator;

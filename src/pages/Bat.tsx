
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";

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
      facts={animalData.bat.facts}
      bestNames={animalData.bat.names}
      otherGenerators={otherGenerators}
    />
  );
};

export default BatGenerator;

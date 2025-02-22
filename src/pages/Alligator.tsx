
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";

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
      facts={animalData.alligator.facts}
      bestNames={animalData.alligator.names}
      otherGenerators={otherGenerators}
    />
  );
};

export default AlligatorGenerator;

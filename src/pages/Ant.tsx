
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";

const otherGenerators = [
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AntGenerator = () => {
  return (
    <NameGenerator
      animal="Ant"
      facts={animalData.ant.facts}
      bestNames={animalData.ant.names}
      otherGenerators={otherGenerators}
    />
  );
};

export default AntGenerator;

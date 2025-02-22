import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlligatorGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Alligator Name Generator - 10,000+ Unique Alligator Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect alligator name? Our Alligator Name Generator offers 10,000+ unique and powerful names inspired by these magnificent reptiles. Perfect for pet alligators, characters, or creative projects!" 
        />
        <meta property="og:title" content="Alligator Name Generator - Find The Perfect Alligator Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for alligators from our collection of 10,000+ creative alligator names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Alligator"
        facts={animalData.alligator.facts}
        bestNames={animalData.alligator.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default AlligatorGenerator;

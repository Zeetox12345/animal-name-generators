import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" }
];

const BatGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Bat Name Generator - 10,000+ Unique Bat Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect bat name? Our Bat Name Generator offers 10,000+ unique and creative names inspired by nocturnal creatures. Perfect for pet bats, characters, or creative projects!" 
        />
        <meta property="og:title" content="Bat Name Generator - Find The Perfect Bat Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for bats from our collection of 10,000+ creative bat names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Bat"
        facts={animalData.bat.facts}
        bestNames={animalData.bat.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default BatGenerator;

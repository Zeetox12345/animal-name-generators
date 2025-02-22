import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlpacaGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Alpaca Name Generator - 10,000+ Unique Alpaca Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Find the perfect name for your alpaca with our Alpaca Name Generator! Access 10,000+ unique and creative names inspired by these gentle, fluffy creatures. Perfect for pet alpacas, farm animals, or creative projects!" 
        />
        <meta property="og:title" content="Alpaca Name Generator - Find The Perfect Alpaca Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for alpacas from our collection of 10,000+ creative alpaca names. Perfect for pets, farm animals, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Alpaca"
        facts={animalData.alpaca.facts}
        bestNames={animalData.alpaca.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default AlpacaGenerator;

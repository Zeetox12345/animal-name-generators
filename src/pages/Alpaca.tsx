import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlpacaGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Alpaca Name Generator - 10,000+ Unique Alpaca Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect alpaca name with our Alpaca Name Generator! Browse through 10,000+ unique and creative names inspired by these gentle creatures. Perfect for pet alpacas, characters, or creative projects!" 
        />
        <meta property="og:title" content="Alpaca Name Generator - Find The Perfect Alpaca Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for alpacas from our collection of 10,000+ creative alpaca names. Perfect for pets, characters, or creative projects." 
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

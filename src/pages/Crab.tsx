import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cheetah", path: "/cheetah" },
  { name: "Cow", path: "/cow" },
  { name: "Cricket", path: "/cricket" },
  { name: "Crocodile", path: "/crocodile" }
];

const CrabGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Crab Name Generator - Find The Perfect Name For Your Crustacean Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for crabs with our Crab Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Crab Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for crabs from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Crab"
        facts={animalData.crab.facts}
        bestNames={animalData.crab.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CrabGenerator; 
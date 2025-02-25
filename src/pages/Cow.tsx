import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cheetah", path: "/cheetah" },
  { name: "Crab", path: "/crab" },
  { name: "Cricket", path: "/cricket" },
  { name: "Crocodile", path: "/crocodile" }
];

const CowGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cow Name Generator - Find The Perfect Name For Your Bovine Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for cows with our Cow Name Generator. Perfect for farm animals, pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Cow Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for cows from our collection of creative names. Perfect for farm animals, pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Cow"
        facts={animalData.cow.facts}
        bestNames={animalData.cow.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CowGenerator; 
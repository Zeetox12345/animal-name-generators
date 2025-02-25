import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cow", path: "/cow" },
  { name: "Crab", path: "/crab" },
  { name: "Cricket", path: "/cricket" },
  { name: "Crocodile", path: "/crocodile" }
];

const CheetahGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cheetah Name Generator - Find The Perfect Name For Your Speedy Feline</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for cheetahs with our Cheetah Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Cheetah Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for cheetahs from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Cheetah"
        facts={animalData.cheetah.facts}
        bestNames={animalData.cheetah.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CheetahGenerator; 
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cheetah", path: "/cheetah" },
  { name: "Cow", path: "/cow" },
  { name: "Crab", path: "/crab" },
  { name: "Cricket", path: "/cricket" }
];

const CrocodileGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Crocodile Name Generator - Find The Perfect Name For Your Reptilian Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for crocodiles with our Crocodile Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Crocodile Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for crocodiles from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Crocodile"
        facts={animalData.crocodile.facts}
        bestNames={animalData.crocodile.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CrocodileGenerator; 
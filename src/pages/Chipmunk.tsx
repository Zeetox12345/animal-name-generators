import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Capybara", path: "/capybara" },
  { name: "Cat", path: "/cat" },
  { name: "Chicken", path: "/chicken" },
  { name: "Chameleon", path: "/chameleon" }
];

const ChipmunkGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Chipmunk Name Generator - Find The Perfect Name For Your Furry Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for chipmunks with our Chipmunk Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Chipmunk Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for chipmunks from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Chipmunk"
        facts={animalData.chipmunk.facts}
        bestNames={animalData.chipmunk.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ChipmunkGenerator; 
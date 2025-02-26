import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Deer", path: "/deer" },
  { name: "Dog", path: "/dog" },
  { name: "Dolphin", path: "/dolphin" },
  { name: "Donkey", path: "/donkey" }
];

const DuckGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Duck Name Generator - Find The Perfect Name For Your Duck</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for ducks with our Duck Name Generator. Perfect for waterfowl, pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Duck Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for ducks from our collection of creative names. Perfect for waterfowl, pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Duck"
        facts={animalData.duck.facts}
        bestNames={animalData.duck.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default DuckGenerator; 
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cheetah", path: "/cheetah" },
  { name: "Cow", path: "/cow" },
  { name: "Crab", path: "/crab" },
  { name: "Crocodile", path: "/crocodile" }
];

const CricketGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cricket Name Generator - Find The Perfect Name For Your Chirping Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for crickets with our Cricket Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Cricket Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for crickets from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Cricket"
        facts={animalData.cricket.facts}
        bestNames={animalData.cricket.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CricketGenerator; 
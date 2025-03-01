import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Goat", path: "/goat" },
  { name: "Goose", path: "/goose" },
  { name: "Guinea Pig", path: "/guinea-pig" },
  { name: "Hamster", path: "/hamster" }
];

const HedgehogGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hedgehog Name Generator - 10,000+ Unique Hedgehog Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect hedgehog name with our Hedgehog Name Generator! Browse through 10,000+ unique and creative names inspired by these adorable spiny mammals. Perfect for pet hedgehogs, characters, or creative projects!" 
        />
        <meta property="og:title" content="Hedgehog Name Generator - Find The Perfect Hedgehog Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for hedgehogs from our collection of 10,000+ creative hedgehog names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="hedgehog"
        facts={animalData.hedgehog.facts}
        bestNames={animalData.hedgehog.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HedgehogGenerator; 
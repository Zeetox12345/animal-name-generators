import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Goat", path: "/goat" },
  { name: "Guinea Pig", path: "/guinea-pig" },
  { name: "Hamster", path: "/hamster" },
  { name: "Hedgehog", path: "/hedgehog" }
];

const GooseGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Goose Name Generator - 10,000+ Unique Goose Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect goose name with our Goose Name Generator! Browse through 10,000+ unique and creative names inspired by these majestic waterfowl. Perfect for pet geese, farm birds, characters, or creative projects!" 
        />
        <meta property="og:title" content="Goose Name Generator - Find The Perfect Goose Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for geese from our collection of 10,000+ creative goose names. Perfect for pets, farm birds, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="goose"
        facts={animalData.goose.facts}
        bestNames={animalData.goose.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default GooseGenerator; 
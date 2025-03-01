import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Goat", path: "/goat" },
  { name: "Goose", path: "/goose" },
  { name: "Guinea Pig", path: "/guinea-pig" },
  { name: "Hedgehog", path: "/hedgehog" }
];

const HamsterGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hamster Name Generator - 10,000+ Unique Hamster Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect hamster name with our Hamster Name Generator! Browse through 10,000+ unique and creative names inspired by these adorable pocket pets. Perfect for pet hamsters, characters, or creative projects!" 
        />
        <meta property="og:title" content="Hamster Name Generator - Find The Perfect Hamster Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for hamsters from our collection of 10,000+ creative hamster names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="hamster"
        facts={animalData.hamster.facts}
        bestNames={animalData.hamster.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HamsterGenerator; 
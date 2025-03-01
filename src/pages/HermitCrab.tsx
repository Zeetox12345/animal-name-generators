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

const HermitCrabGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hermit Crab Name Generator - 10,000+ Unique Hermit Crab Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect hermit crab name with our Hermit Crab Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating shell-dwelling creatures. Perfect for pet hermit crabs, characters, or creative projects!" 
        />
        <meta property="og:title" content="Hermit Crab Name Generator - Find The Perfect Hermit Crab Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for hermit crabs from our collection of 10,000+ creative hermit crab names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="hermit crab"
        facts={animalData.hermitCrab.facts}
        bestNames={animalData.hermitCrab.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HermitCrabGenerator; 
import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Fly", path: "/fly" },
  { name: "Fox", path: "/fox" },
  { name: "Giraffe", path: "/giraffe" },
  { name: "Goat", path: "/goat" }
];

const FrogGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Frog Name Generator - 10,000+ Unique Frog Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect frog name with our Frog Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating amphibians. Perfect for pet frogs, characters, or creative projects!" 
        />
        <meta property="og:title" content="Frog Name Generator - Find The Perfect Frog Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for frogs from our collection of 10,000+ creative frog names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Frog"
        facts={animalData.frog.facts}
        bestNames={animalData.frog.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FrogGenerator; 
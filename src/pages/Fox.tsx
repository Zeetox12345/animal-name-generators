import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Fly", path: "/fly" },
  { name: "Frog", path: "/frog" },
  { name: "Giraffe", path: "/giraffe" },
  { name: "Goat", path: "/goat" }
];

const FoxGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fox Name Generator - 10,000+ Unique Fox Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect fox name with our Fox Name Generator! Browse through 10,000+ unique and creative names inspired by these clever and beautiful animals. Perfect for pet foxes, characters, or creative projects!" 
        />
        <meta property="og:title" content="Fox Name Generator - Find The Perfect Fox Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for foxes from our collection of 10,000+ creative fox names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Fox"
        facts={animalData.fox.facts}
        bestNames={animalData.fox.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FoxGenerator; 
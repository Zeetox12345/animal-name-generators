import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Capybara", path: "/capybara" },
  { name: "Chicken", path: "/chicken" },
  { name: "Chameleon", path: "/chameleon" },
  { name: "Chipmunk", path: "/chipmunk" }
];

const CatGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cat Name Generator - Find The Perfect Name For Your Feline Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for cats with our Cat Name Generator. Perfect for kittens, pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Cat Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for cats from our collection of creative names. Perfect for kittens, pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Cat"
        facts={animalData.cat.facts}
        bestNames={animalData.cat.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CatGenerator; 
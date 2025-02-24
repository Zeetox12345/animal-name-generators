import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Capybara", path: "/capybara" },
  { name: "Cat", path: "/cat" },
  { name: "Chameleon", path: "/chameleon" },
  { name: "Chipmunk", path: "/chipmunk" }
];

const ChickenGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Chicken Name Generator - Find The Perfect Name For Your Feathered Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for chickens with our Chicken Name Generator. Perfect for farm birds, pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Chicken Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for chickens from our collection of creative names. Perfect for farm birds, pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Chicken"
        facts={animalData.chicken.facts}
        bestNames={animalData.chicken.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ChickenGenerator; 
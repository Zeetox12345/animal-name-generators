import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Eagle", path: "/eagle" },
  { name: "Ferret", path: "/ferret" },
  { name: "Fish", path: "/fish" },
  { name: "Flamingo", path: "/flamingo" }
];

const ElephantGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Elephant Name Generator - 10,000+ Unique Elephant Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect elephant name? Our Elephant Name Generator offers 10,000+ unique and memorable names inspired by these gentle giants. Perfect for pet elephants, characters, or creative projects!" 
        />
        <meta property="og:title" content="Elephant Name Generator - Find The Perfect Elephant Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for elephants from our collection of 10,000+ creative elephant names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Elephant"
        facts={animalData.elephant.facts}
        bestNames={animalData.elephant.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ElephantGenerator; 
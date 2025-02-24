import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Cat", path: "/cat" },
  { name: "Chicken", path: "/chicken" },
  { name: "Chameleon", path: "/chameleon" },
  { name: "Chipmunk", path: "/chipmunk" }
];

const CapybaraGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Capybara Name Generator - Find The Perfect Name For Your Capybara</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for capybaras with our Capybara Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Capybara Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for capybaras from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Capybara"
        facts={animalData.capybara.facts}
        bestNames={animalData.capybara.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default CapybaraGenerator; 
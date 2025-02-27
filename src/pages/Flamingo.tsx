import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Eagle", path: "/eagle" },
  { name: "Elephant", path: "/elephant" },
  { name: "Ferret", path: "/ferret" },
  { name: "Fish", path: "/fish" }
];

const FlamingoGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Flamingo Name Generator - 10,000+ Unique Flamingo Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect flamingo name? Our Flamingo Name Generator offers 10,000+ unique and vibrant names inspired by these elegant pink birds. Perfect for pet flamingos, characters, or creative projects!" 
        />
        <meta property="og:title" content="Flamingo Name Generator - Find The Perfect Flamingo Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for flamingos from our collection of 10,000+ creative flamingo names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Flamingo"
        facts={animalData.flamingo.facts}
        bestNames={animalData.flamingo.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FlamingoGenerator; 
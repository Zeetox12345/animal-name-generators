import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Eagle", path: "/eagle" },
  { name: "Elephant", path: "/elephant" },
  { name: "Fish", path: "/fish" },
  { name: "Flamingo", path: "/flamingo" }
];

const FerretGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ferret Name Generator - 10,000+ Unique Ferret Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect ferret name? Our Ferret Name Generator offers 10,000+ unique and playful names inspired by these energetic and curious pets. Perfect for pet ferrets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Ferret Name Generator - Find The Perfect Ferret Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for ferrets from our collection of 10,000+ creative ferret names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Ferret"
        facts={animalData.ferret.facts}
        bestNames={animalData.ferret.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FerretGenerator; 
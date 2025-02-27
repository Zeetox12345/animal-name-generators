import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Eagle", path: "/eagle" },
  { name: "Elephant", path: "/elephant" },
  { name: "Ferret", path: "/ferret" },
  { name: "Flamingo", path: "/flamingo" }
];

const FishGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fish Name Generator - 10,000+ Unique Fish Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect fish name? Our Fish Name Generator offers 10,000+ unique and aquatic names inspired by these fascinating underwater creatures. Perfect for pet fish, characters, or creative projects!" 
        />
        <meta property="og:title" content="Fish Name Generator - Find The Perfect Fish Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for fish from our collection of 10,000+ creative fish names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Fish"
        facts={animalData.fish.facts}
        bestNames={animalData.fish.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FishGenerator; 
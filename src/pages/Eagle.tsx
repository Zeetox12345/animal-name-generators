import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Elephant", path: "/elephant" },
  { name: "Ferret", path: "/ferret" },
  { name: "Fish", path: "/fish" },
  { name: "Flamingo", path: "/flamingo" }
];

const EagleGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Eagle Name Generator - 10,000+ Unique Eagle Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Looking for the perfect eagle name? Our Eagle Name Generator offers 10,000+ unique and powerful names inspired by these majestic birds of prey. Perfect for pet eagles, characters, or creative projects!" 
        />
        <meta property="og:title" content="Eagle Name Generator - Find The Perfect Eagle Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for eagles from our collection of 10,000+ creative eagle names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Eagle"
        facts={animalData.eagle.facts}
        bestNames={animalData.eagle.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default EagleGenerator; 
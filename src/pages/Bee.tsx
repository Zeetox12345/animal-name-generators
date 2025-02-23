import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Bear", path: "/bear" },
  { name: "Beetle", path: "/beetle" },
  { name: "Bird", path: "/bird" },
  { name: "Butterfly", path: "/butterfly" }
];

const BeeGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bee Name Generator - 10,000+ Unique Bee Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect bee name with our Bee Name Generator! Browse through 10,000+ unique and creative names inspired by these buzzing insects. Perfect for pet bees, characters, or creative projects!" 
        />
        <meta property="og:title" content="Bee Name Generator - Find The Perfect Bee Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for bees from our collection of 10,000+ creative bee names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Bee"
        facts={animalData.bee.facts}
        bestNames={animalData.bee.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default BeeGenerator; 
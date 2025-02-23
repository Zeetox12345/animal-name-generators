import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Bear", path: "/bear" },
  { name: "Bee", path: "/bee" },
  { name: "Beetle", path: "/beetle" },
  { name: "Bird", path: "/bird" }
];

const ButterflyGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Butterfly Name Generator - 10,000+ Unique Butterfly Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect butterfly name with our Butterfly Name Generator! Browse through 10,000+ unique and creative names inspired by these beautiful insects. Perfect for pet butterflies, characters, or creative projects!" 
        />
        <meta property="og:title" content="Butterfly Name Generator - Find The Perfect Butterfly Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for butterflies from our collection of 10,000+ creative butterfly names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Butterfly"
        facts={animalData.butterfly.facts}
        bestNames={animalData.butterfly.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ButterflyGenerator; 
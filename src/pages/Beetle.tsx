import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Bear", path: "/bear" },
  { name: "Bee", path: "/bee" },
  { name: "Bird", path: "/bird" },
  { name: "Butterfly", path: "/butterfly" }
];

const BeetleGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Beetle Name Generator - 10,000+ Unique Beetle Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect beetle name with our Beetle Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating insects. Perfect for pet beetles, characters, or creative projects!" 
        />
        <meta property="og:title" content="Beetle Name Generator - Find The Perfect Beetle Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for beetles from our collection of 10,000+ creative beetle names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Beetle"
        facts={animalData.beetle.facts}
        bestNames={animalData.beetle.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default BeetleGenerator; 